import Breadcrumbs from '@/components/ProductDetail/Breadcrumbs'
import GallerySection from '@/components/ProductDetail/GallerySection'
import ProductDetails from '@/components/ProductDetail/ProductDetails'
import ReviewSection from '@/components/ProductDetail/ReviewSection'
import React from 'react'
import Image from "next/image"
import TrendingProductSection from '@/components/HomePageSections/TrendingProductSection'
import Footer from '@/components/Footer/Footer'

export default function Product() {
  return (
    <>
       <div className="h-16"></div>
   <div className="w-full mx-auto px-4 ">
      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative">
          <GallerySection />
        </div>

        <div className="relative">
          {/* Wishlist and Share buttons */}
          <div className="absolute top-0 right-0 flex gap-4">
            <button className="p-2">
              <Image
                src="/Icons/Heart.png"
                alt="Wishlist"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
            <button className="p-2">
              <Image src="/Icons/Share.png" alt="Share" width={24} height={24} className="w-6 h-6" />
            </button>
          </div>

          <ProductDetails />
        </div>
      </div>
    </div>
      <ReviewSection />
      <TrendingProductSection />
      <Footer />
    </>
  )
}
