import  { useState, useEffect} from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ProductCards(){
      const [products, setProducts] = useState<any[]>([]); // Array of products
    
    const cards=[
        {
            title:"Total Products",
            amount:products.length
        },
        {
            title:"Total Sales",
            amount:500
        },
        {
            title:"Total Income",
            amount:500
        }
    ]
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
            setProducts(response.data);
             console.log(response.data.length)
          } catch (err) {
            console.error('Failed to fetch products', err);
          }
        };
        fetchProducts();
      }, []);
    
    return(
        <div className="flex gap-10 ">
            {
                cards.map((card,index)=>(
                    <div className="flex flex-col items-center gap-2 rounded-lg py-10  justify-center w-[350px]  border " key={index}>
                        <h1 className="text-md font-semibold text-gray-600">{card.title}</h1>
                        <h2 className="text-xl font-semibold text-gray-700">{card.amount}</h2>

                    </div>
                ))
            }


        </div>
    )
}