import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex z-50 items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
      {/* Nike Logo */}
      <div className="flex-shrink-0">
        <Link href='/' title='Home'>
       <Image src="/Logo/nike medium.png" alt="Logo" height={50} width={75}/>
       </Link>
      </div>
      
      {/* Navigation Links */}
      <nav className="hidden md:flex flex-1 justify-center space-x-8">
        <a href="#" className="font-medium text-gray-900 hover:text-gray-600 ">Men</a>
        <a href="#" className="font-medium text-gray-900 hover:text-gray-600">Women</a>
        <a href="#" className="font-medium text-gray-900 hover:text-gray-600">Kids</a>
        <a href="#" className="font-medium text-gray-900 hover:text-gray-600">Customise</a>
        <a href="#" className="font-medium text-gray-900 hover:text-gray-600">Sale</a>
        <a href="#" className="font-medium text-gray-900 hover:text-gray-600">SNKRS</a>
      </nav>
      
      {/* Search and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none ml-2 w-30 placeholder-gray-400 text-sm"
          />
        </div>
        
        {/* Favorites Icon */}
        <button className="p-1">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
        </button>
        
        {/* Shopping Bag Icon */}
        <button className="p-1">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
        </button>
      </div>
    </header>
  );
}