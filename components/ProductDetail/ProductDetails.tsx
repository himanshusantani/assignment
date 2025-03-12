import Image from "next/image"

export default function ProductDetails() {
  const sizes = [
    { size: "5.5", eu: "38.5" },
    { size: "6.0", eu: "39.0" },
    { size: "6.5", eu: "40.5" },
    { size: "7.0", eu: "41.5" },
    { size: "7.5", eu: "42.0", selected: true },
    { size: "8.0", eu: "42.5" },
    { size: "8.5", eu: "43.5" },
    { size: "9.0", eu: "44.5" },
    { size: "9.5", eu: "45.0" },
    { size: "10.0", eu: "45.5" },
    { size: "10.5", eu: "45.5" },
    { size: "11.0", eu: "46.0" },
  ]

  const colorOptions = [
    { name: "White-Orange", image: "/Images/nike-white-orange.png", selected: true },
    { name: "Orange", image: "/Images/nike-orange.png" },
    { name: "Black", image: "/Images/nike-black.png" },
    { name: "Gray", image: "/Images/nike-gray.png" },
    { name: "Red-White", image: "/Images/nike-white.png" },
  ]

  return (
    <>
 
    <div className="px-4 md:px-0 pb-8">
      <div className="flex flex-col">
        {/* Brand */}
        <span className="text-lg text-gray-700 ">Nike</span>

        {/* Product Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Alpha All-Purpose Gen Z</h1>

        {/* Product Description */}
        <div className="mb-4">
          <p className="text-gray-700 mb-2">
            Introducing the Nike Alpha All-Purpose Gen Z, the latest evolution in athletic footwear designed to meet the
            dynamic needs of the modern generation. These cutting-edge trainers represent a fusion of style, technology,
            and performance, making them a perfect choice for those who value both form and function. The Gen Z boasts a
            sleek, contemporary design that ...
          </p>
          <button className="text-blue-600 font-medium">See more</button>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gray-700">4K+ sold</span>
          <div className="flex items-center">
            <span className="mr-1"><Image src={"/Icons/star.png"} alt={"Star"} height={15} width={15}/></span>
            <span className="font-medium">4.8</span>
            <span className="text-gray-500 ml-1">(156 reviews)</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl font-bold">$ 90.00</span>
          <span className="text-red-700 font-semibold line-through">$ 120.00</span>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">
             <strong> Color :</strong> <span className="font-normal">White-Orange</span>
            </span>
            <a href="#" className="text-sm text-gray-600">
              Size Guide
            </a>
          </div>
          <div className="flex gap-2">
            {colorOptions.map((color, index) => (
              <button
                key={index}
                className={`w-20 h-12 border ${color.selected ? "border-black" : "border-gray-200"} rounded-sm p-0.5`}
              >
                <Image
                  src={color.image || "/placeholder.svg"}
                  alt={color.name}
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="font-semibold">Size: </span>
            <span className="ml-2">7.5 (42.0)</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`border ${size.selected ? "border-black bg-gray-100" : "border-gray-200"} py-1 px-1 text-center`}
              >
                <div>{size.size} ({size.eu})</div>
                {/* <div className="text-xs text-gray-500"></div> */}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-medium rounded-md flex items-center justify-center gap-2">
          <Image src={'/Icons/add icon.png'} alt="add" height={12} width={12}/>
          <span className="text-lg">Add to Cart</span>
        </button>

        {/* Wishlist and Share (positioned absolutely in the parent component) */}
      </div>
    </div>

    </>
  )
}

