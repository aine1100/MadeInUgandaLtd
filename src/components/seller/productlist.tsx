import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FaX } from 'react-icons/fa6';
import { FaCaretDown, FaPen, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Dropdown Component
interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const CustomDropdown = ({ options, value, onChange }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex justify-between w-full px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        onClick={toggleDropdown}
      >
        {value || 'Select Category'}
        <FaCaretDown className="mx-2" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 w-full mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
          style={{ maxHeight: '200px', overflowY: 'auto' }}
        >
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-sm text-black text-left hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Product Table Component
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]); // Array of products
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false); // Add a state for the update modal
  const [newProduct, setNewProduct] = useState<any>({
    name: '',
    category: '',
    price: '',
    quantity: 0,
    image: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found, please log in!');
        window.location.href = '/login'; // Redirect to login page if no token
        return;
      }
    //   console.log(products)

      try {
        const response = await axios.get('http://localhost:3000/products/', {
          headers: {
            Authorization: `${token}`, // Send token to authenticate the user
          },
        });
        setProducts(response.data); 
        // Set products from the response
        console.log(products)
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };
    fetchProducts();
  }, []);

  // Handle input changes for text and number fields
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setNewProduct({
      ...newProduct,
      [field]: e.target.value,
    });
  };

  // Handle image file input changes
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setNewProduct({
        ...newProduct,
        image: file,
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Preview the image
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding a new product
  const handleAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('category', newProduct.category);
    formData.append('price', newProduct.price);
    formData.append('quantity', String(newProduct.quantity));
    if (newProduct.image) {
      formData.append('image', newProduct.image);
    }

    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('No token found, please log in!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/products/newProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
      });
      toast.success(response.data.message);
      setProducts([...products, response.data.product]); // Add the new product to the table
      setShowAddModal(false); // Close the modal
      setNewProduct({ name: '', category: '', price: '', quantity: 0, image: null });
      setImagePreview(null);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Error adding product');
    }
  };

  // Handle product deletion
 
  // Handle product update (this can be expanded with modal or form for updating)
 // Handle product update (set selected product data to modal)
const handleUpdateProduct = (product: any) => {
    setNewProduct({ ...product, id: product.id });
     // Include the product ID for update
     console.log(product.id)
    setShowUpdateModal(true);
  };
  
  // Handle update submission
  const handleSubmitUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('category', newProduct.category);
    formData.append('price', newProduct.price);
    formData.append('quantity', String(newProduct.quantity));
    if (newProduct.image) {
      formData.append('image', newProduct.image);
    }
  
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('No token found, please log in!');
      return;
    }
  
    try {
      const response = await axios.put(`http://localhost:3000/products/updateProduct/${newProduct.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
      });
      toast.success(response.data.message);
      setProducts(
        products.map((product) => (product.id === newProduct.id ? response.data.product : product))
      ); // Update the product in the table
      setShowUpdateModal(false);
      setNewProduct({ name: '', category: '', price: '', quantity: 0, image: null });
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Error updating product');
    }
  };
  
  // Handle product deletion
  const handleDeleteProduct = async (id: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('No token found, please log in!');
      return;
    }
  
    try {
      const response = await axios.delete(`http://localhost:3000/products/deleteProduct/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success(response.data.message);
      setProducts(products.filter((product) => product.id !== id)); // Remove the deleted product
    } catch (err: any) {
      toast.error('Error deleting product');
    }
  };
  
  const imageTemplate = (rowData: any) => {
    const baseURL = 'http://localhost:3000/uploads/';
    return rowData.image ? (
      <img src={`${baseURL}${rowData.image}`} alt="Product" className="w-20 h-20 object-cover rounded-lg" />
    ) : (
      <span>No Image</span>
    );
  };

  return (
    <div className="container mx-auto pr-10 py-6 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-700">Products</h1>
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 bg-primary-color text-white font-semibold rounded-lg  transition duration-300"
        >
          Add New Product
        </button>
      </div>

      {/* Product Table */}
      <div className="card bg-white shadow-sm rounded-lg p-5 overflow-hidden">
        <DataTable value={products} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" tableStyle={{ minWidth: '60rem' }}>
            
          <Column field="_id" header="ID" />
          <Column field="name" header="Name" />
          <Column field="price" header="Price (Dollars)" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" />
          <Column body={imageTemplate} header="Image" />
          <Column
            body={(rowData: any) => (
              <div className="flex gap-5">
                <button className="text-primary-color" onClick={() => handleUpdateProduct(rowData)}>
                  <FaPen />
                </button>
                <button className="text-red-600" onClick={() => handleDeleteProduct(rowData.id)}>
                  <FaTrash />
                </button>
              </div>
            )}
            header="Actions"
          />
        </DataTable>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Product</h2>
              <button onClick={() => setShowAddModal(false)} className="text-xl text-gray-500">
                <FaX />
              </button>
            </div>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => handleInputChange(e, 'name')}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Category</label>
                <CustomDropdown options={['Category 1', 'Category 2']} value={newProduct.category} onChange={(value) => setNewProduct({ ...newProduct, category: value })} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => handleInputChange(e, 'price')}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  value={newProduct.quantity}
                  onChange={(e) => handleInputChange(e, 'quantity')}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
                {imagePreview && (
                  <div className="mt-4">
                    <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-6 py-2 bg-primary-color text-white font-semibold rounded-lg">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Product Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Update Product</h2>
              <button onClick={() => setShowUpdateModal(false)} className="text-xl text-gray-500">
                <FaX />
              </button>
            </div>
            <form onSubmit={handleSubmitUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => handleInputChange(e, 'name')}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Category</label>
                <CustomDropdown options={['Category 1', 'Category 2']} value={newProduct.category} onChange={(value) => setNewProduct({ ...newProduct, category: value })} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => handleInputChange(e, 'price')}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  value={newProduct.quantity}
                  onChange={(e) => handleInputChange(e, 'quantity')}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 text-sm border rounded-md"
                />
                {imagePreview && (
                  <div className="mt-4">
                    <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-6 py-2 bg-primary-color text-white font-semibold rounded-lg">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <ToastContainer />
    </div>
  );
};

export default ProductList;
