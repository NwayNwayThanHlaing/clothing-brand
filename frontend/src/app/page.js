import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative inline-block bg-white-700">
        <video autoPlay muted loop className="w-full h-3/4">
          <source src="/mng.mp4" type="video/mp4" />
        </video>
      </div>

      <div>
        <p className="text-3xl text-center font-bold mt-20 mb-10">
          TRENDS TODAY
        </p>
      </div>
      <div className="grid grid-cols-3 px-32 py-0 mb-20">
        <div className="relative inline-block text-center">
          <img src="/top1.avif" className="w-full p-4" />
          <a href="/womens" className="underline hover:text-red-600">
            Mens
          </a>
        </div>
        <div className="relative inline-block text-center">
          <img src="/top2.avif" className="w-full p-4" />
          <a href="/womens" className="underline hover:text-red-600">
            Womens
          </a>
        </div>
        <div className="relative inline-block text-center">
          <img src="/top1.avif" className="w-full p-4" />
          <a href="/womens" className="underline hover:text-red-600">
            Kids
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="relative inline-block">
          <img src="/dresses.webp" className="w-full" />
        </div>
        <div className="relative inline-block">
          <img src="/bag-cover.avif" className="w-full" />
        </div>
      </div>
    </div>
  );
}
