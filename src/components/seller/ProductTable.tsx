import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FaX } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import axios from 'axios';
import { toast ,ToastContainer} from 'react-toastify';
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
const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]); // Array of products
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found, please log in!');
        window.location.href = '/login'; // Redirect to login page if no token
        return;
      }
  
      try {
        const response = await axios.get('http://localhost:3000/products/', {
          headers: {
            Authorization: `${token}`, // Send token to authenticate the user
          },
        });
        setProducts(response.data); // Set products from the response
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };
    fetchProducts();
  }, []);
  
  // Modal state and new product state
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<any>({
    name: '',
    category: '',
    price: '',
    quantity: 0,
    image: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      setShowModal(false); // Close the modal
      setNewProduct({ name: '', category: '', price: '', quantity: 0, image: null });
      setImagePreview(null);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Error adding product');
    }
  };

  const imageTemplate = (rowData: any) => {
    return rowData.image ? (
      <img src={rowData.image} alt="Product" className="w-20 h-20 object-cover rounded-lg" />
    ) : (
      <span>No Image</span>
    );
  };

  return (
    <div className="container mx-auto pr-10 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-700">Products</h1>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-primary-color text-white font-semibold rounded-lg  transition duration-300"
        >
          Add New Product
        </button>
      </div>

      {/* Product Table */}
      <div className="card bg-white shadow-sm rounded-lg p-5 overflow-hidden">
        <DataTable value={products} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" tableStyle={{ minWidth: '60rem' }}>
          <Column field="name" header="Name" />
          <Column field="price" header="Price" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" />
          <Column body={imageTemplate} header="Image" />
        </DataTable>
      </div>

      {/* Modal for Adding New Product */}
      {showModal && (
        <form onSubmit={handleAddProduct} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px] relative">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="text-red-500 absolute top-2 right-2 p-4"
            >
              <FaX />
            </button>
            <h2 className="text-lg font-bold mb-4 text-center">Add New Product</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => handleInputChange(e, 'name')}
                className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm"
              />
              <input
                type="text"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => handleInputChange(e, 'price')}
                className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm"
              />
              <CustomDropdown
                options={['Fresh Product', 'Non-Fresh Product', 'HandCrafted Product', 'Exported Product']}
                value={newProduct.category}
                onChange={(value) => handleInputChange({ target: { value } }, 'category')}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={newProduct.quantity}
                onChange={(e) => handleInputChange(e, 'quantity')}
                className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm"
              />

              {/* File input for image */}
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
              {imagePreview && (
                <div className="mt-4">
                  <img src={imagePreview} alt="Preview" className="w-full h-[150px] object-cover rounded-lg" />
                </div>
              )}

              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-primary-color text-white font-semibold rounded-lg  transition duration-300"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      )}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ProductTable;
