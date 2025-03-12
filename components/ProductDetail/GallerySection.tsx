import Image from "next/image"
import { useState } from "react"

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    "/Images/p1.png",
    "/Images/p2.png",
    "/Images/p3.png",
    "/Images/p4.png",
    "/Images/p5.png",
    "/Images/p6.png",
    "/Images/p7.png",
  ]

  return (
    <div className="relative">
      {/* Discount badge */}
      <div className="absolute top-0 left-0 z-10 bg-black text-white px-3 py-1 font-bold">25% OFF</div>

      {/* Main image */}
      <div className="border border-gray-200 mb-4 relative">
        <Image
          src={images[activeImage] || "/placeholder.svg"}
          alt="Product image"
          width={600}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 border ${activeImage === index ? "border-black" : "border-gray-200"} p-1 w-[80px] h-[80px]`}
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </button>
        ))}

        {/* +2 more button */}
        <button className="flex-shrink-0 border border-gray-200 p-1 w-[80px] h-[80px] bg-black text-white flex items-center justify-center">
          +2
        </button>
      </div>
    </div>
  )
}

