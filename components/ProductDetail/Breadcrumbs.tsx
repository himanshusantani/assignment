import Link from "next/link"

export default function Breadcrumbs() {
  return (
    <nav className="text-sm py-4 px-4 md:px-0">
      <ol className="flex flex-wrap items-center">
        <li className="flex items-center">
          <Link href="/mens" className="text-gray-500 hover:text-gray-700">
            Mens
          </Link>
          <span className="mx-2 text-gray-400">/</span>
        </li>
        <li className="flex items-center">
          <Link href="/mens/footwear" className="text-gray-500 hover:text-gray-700">
            Footwear
          </Link>
          <span className="mx-2 text-gray-400">/</span>
        </li>
        <li className="flex items-center">
          <Link href="/mens/footwear/trainers" className="text-gray-500 hover:text-gray-700">
            Trainers
          </Link>
          <span className="mx-2 text-gray-400">/</span>
        </li>
        <li className="text-gray-900 font-medium">Alpha All-Purpose Gen Z</li>
      </ol>
    </nav>
  )
}

