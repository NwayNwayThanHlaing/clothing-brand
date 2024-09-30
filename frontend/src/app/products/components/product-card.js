import Image from "next/image";

export default function ProductCard({ name, price, image }) {
  image = image || "/coming-soon.jpg";
  return (
    <div className="m-1">
      <div className="relative group">
        <Image
          src={image}
          alt="photo"
          width={350}
          height={350}
          className="bg-gray-200 group-hover:shadow-2xl transition-all duration-300 ease-in-out"
          priority
        />

        <button className="absolute bottom-0 left-0 w-full transform bg-black text-white font-semibold px-4 py-2 opacity-0 bg-opacity-0 group-hover:bg-opacity-40 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          Add to Cart
        </button>
      </div>
      <div className="flex flex-row items-center mb-10 pt-2 px-2">
        <div className="w-3/4">
          <p className="font-semibold">{name}</p>
          <p className="text-sm font-light">See More &gt;&gt; </p>
        </div>
        <div className="w-1/4 flex flex-row-reverse">
          <p className="font-semibold">£{price}</p>
        </div>
      </div>
    </div>
  );
}
