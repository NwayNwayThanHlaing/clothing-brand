import Image from "next/image";

export default function ProductCard({ name, price, image }) {
  return (
    <div className="p-1">
      <Image
        src={image}
        alt="photo"
        width={280}
        height={350}
        className="gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
        priority
      />
      <div className="flex flex-row items-center mb-10 pt-2 px-2">
        <div className="w-3/4">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm font-light">See More &gt;&gt; </p>
        </div>
        <div className="w-1/4 flex flex-row-reverse">
          <p className="text-sm font-semibold">£{price}</p>
        </div>
      </div>
    </div>
  );
}
