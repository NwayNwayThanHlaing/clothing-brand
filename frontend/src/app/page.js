import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="bg-white-700 relative w-full">
        <div className="text-white absolute left-72 top-1/2 transform translate-x-56">
          <p className="text-left text-5xl font-semibold mb-2">
            WELCOME TO ECHO
          </p>
          <p className="text-left text-3xl font-thin">Shop the latest trends</p>
          <a
            href="/products"
            className="text-left text-sm font-medium hover:underline"
          >
            Discover more
          </a>{" "}
          &gt;&gt;
        </div>
        <video autoPlay muted loop className="w-full h-3/4 z-0">
          <source src="/home-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div>
        <p className="text-3xl text-center font-bold mt-20 mb-10">
          TRENDS TODAY
        </p>
      </div>
      <div className="grid grid-cols-3 px-32 py-0 mb-20">
        <div className="relative inline-block text-center">
          <img src="/home-outerwears.jpg" className="w-full p-4" />
          <a href="/womens" className="underline hover:text-red-600">
            Outerwears
          </a>
        </div>
        <div className="relative inline-block text-center">
          <img src="/home-denims.jpeg" className="w-full p-4" />
          <a href="/womens" className="underline hover:text-red-600">
            Denims
          </a>
        </div>
        <div className="relative inline-block text-center">
          <img src="/home-tops.jpg" className="w-full p-4" />
          <a href="/womens" className="underline hover:text-red-600">
            Tops
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="relative inline-block">
          <img src="/home-dresses.webp" className="w-full" />
          <span className="absolute bottom-3 left-5 text-white p-2">
            Dresses &gt;&gt;
          </span>
        </div>
        <div className="relative inline-block">
          <img src="/home-bags.avif" className="w-full" />
          <span className="absolute bottom-3 left-5 text-white p-2">
            Bags &gt;&gt;
          </span>
        </div>
      </div>
    </div>
  );
}
