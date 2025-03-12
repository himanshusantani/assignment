import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function TrendingProductSection() {
  const router = useRouter()
  const products = [
    {
      id: 1,
      name: 'Nike Air Force M1 LV8',
      category: "Men's Shoes",
      price: '9999 INR',
      image: '/Images/AJ1.png', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Nike Air Force M1 LV8',
      category: "Men's Shoes",
      price: '9999 INR',
      image: '/Images/AJ2.png', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Nike Air Force M1 LV8',
      category: "Men's Shoes",
      price: '9999 INR',
      image: '/Images/AJ3.png', // Replace with actual image path
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative overflow-hidden bg-white ">
                
              <div className="w-full overflow-hidden">
             
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
               
              </div>
              <div className="pt-4 text-center">
              <Link href="/product"> 
                <div className='' style={{display:'flex',justifyContent:'space-between'}}>
                <h3 className="text-lg ">{product.name}</h3>   
                <p className="text-black ">{product.price}</p>
                
                </div>
                <p className="text-gray-500 text-start">{product.category}</p>
                </Link>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
