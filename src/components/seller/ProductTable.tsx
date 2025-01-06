import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FaX } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';

// Defining Product interface to add TypeScript types

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
                <FaCaretDown className='mx-2'/>
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
interface Product {
    id: string;
    price: string;
    name: string;
    category: string;
    quantity: number;
    image: string;
}

const ProductService = {
    getProductsMini: (): Promise<Product[]> => {
        return Promise.resolve([
            {
                id: 'p1',
                price: 'P001',
                name: 'Product 1',
                category: 'Category 1',
                quantity: 25,
                image: '/apple.jpg', // Add an image URL for the product
            },
            {
                id: 'p2',
                price: 'P002',
                name: 'Product 2',
                category: 'Category 2',
                quantity: 10,
                image: '/apple.jpg', // Add an image URL for the product
            },
            {
                id: 'p3',
                price: 'P003',
                name: 'Product 3',
                category: 'Category 3',
                quantity: 5,
                image: '/apple.jpg', // Add an image URL for the product
            },
            // More products can be added here
        ]);
    },
};

const ProductTable: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]); // Typed useState
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Typed selection state

    // Fetching products
    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    // Template for displaying the image in the table
    const imageBodyTemplate = (rowData: Product) => (
        <img
            src={rowData.image}
            alt={rowData.name}
            width="80"
            className="rounded-md "
        />
    );
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [newProduct, setNewProduct] = useState<Product>({
        id: '',
        price: '',
        name: '',
        category: '',
        quantity: 0,
        image: '',
    });

    // Handle input changes


    // Handle number input changes
    const handleNumberChange = (e: any, field: keyof Product) => {
        setNewProduct({
            ...newProduct,
            [field]: e.value,
        });
    };


    const [imagePreview, setImagePreview] = useState<string | null>(null); // State to show image preview

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Product) => {
        setNewProduct({
            ...newProduct,
            [field]: e.target.value,
        });
    };

    // Handle file input change
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;

        if (file) {
            setNewProduct({
                ...newProduct,
                image: file, // Store the file object
            });

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string); // Set image preview
            };
            reader.readAsDataURL(file); // Read the file as data URL to show preview
        }
    };

    const handleAddProduct = () => {
        // Add product to the product list (simulated logic here)
        console.log(newProduct);
        setShowModal(false); // Close the modal after adding product
        setNewProduct({
            id: '',
            price: '',
            name: '',
            category: '',
            quantity: 0,
            image: '',
        });
        setImagePreview(null); // Reset image preview
    };



    return (
        <div className="container mx-auto pr-10 py-6">
            {/* Header Section with button */}
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
                <DataTable
                    value={products}
                    selection={selectedProduct}
                    onSelectionChange={(e) => setSelectedProduct(e.value)}
                    dataKey="id"
                    tableStyle={{ minWidth: '60rem' }}
                >
                    {/* Table Columns */}
                    <Column field="image" header="Image" body={imageBodyTemplate} />
                    <Column field="price" header="Price" className="text-gray-600 text-sm" />
                    <Column field="name" header="Name" className="text-gray-700 text-md" />
                    <Column field="category" header="Category" className="text-gray-700 text-sm" />
                    <Column field="quantity" header="Quantity" className="text-gray-700 text-md font-semibold" />
                </DataTable>
            </div>


            <div>


                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-md w-[400px] relative">
                            <button
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
                                    className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color"

                                />
                                <input
                                    type="text"
                                    placeholder="Price"
                                    value={newProduct.price}
                                    onChange={(e) => handleInputChange(e, 'price')}
                                    className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color"

                                />
                                <CustomDropdown
                                    options={['Fresh Product', 'Non-Fresh Product',"HandCrafted Product","Exported Product"]}
                                    value={newProduct.category}
                                    onChange={(value) => handleInputChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>, 'category')}
                                />

                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    value={newProduct.quantity}
                                    onChange={(e) => handleNumberChange(e, 'quantity')}
                                    className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color"

                                />
                                <label
                                    htmlFor="imageUpload"
                                    className="bg-primary-color text-white py-2 px-4 rounded cursor-pointer text-center"
                                >
                                    Upload Image
                                </label>
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                                {/* Image Preview */}
                                {imagePreview && (
                                    <div className="mt-4">
                                        <img
                                            src={imagePreview}
                                            alt="Image Preview"
                                            className="max-w-full h-auto rounded-md"
                                        />
                                    </div>
                                )}

                                <div className="flex justify-center gap-4 mt-4">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="bg-red-600 text-white py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleAddProduct}
                                        className="bg-primary-color text-white py-2 px-4 rounded"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ProductTable;
