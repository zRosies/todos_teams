import Image from "next/image";
import adidas from "../../../public/icons/adidas.png";

export default function BrandCarousel() {
  const brands = [
    { name: "apple", src: "/icons/apple.png" },
    { name: "coca", src: "/icons/coca.png" },
    { name: "f1", src: "/icons/f1.png" },
    { name: "nike", src: "/icons/nike.png" },
    { name: "disney", src: "/icons/disney.png" },
    { name: "dell", src: "/icons/dell.png" },
    { name: "adidas", src: "/icons/adidas.png" },
    { name: "spofty", src: "/icons/spotfy.png" },
    { name: "microsoft", src: "/icons/micro.png" },
  ];
  return (
    <>
      <section className="overflow-hidden  items-center border-blue-200  flex justify-center animate-slide whitespace-nowrap gap-12">
        {brands.map((brand) => (
          <div key={brand.name} className=" whitespace-nowrap">
            {/* <p>{brand.name}</p> */}
            <Image
              src={brand.src}
              alt={brand.name}
              width={80}
              height={80}
              className=" "
            />
          </div>
        ))}

        {brands.map((brand) => (
          <div key={brand.name} className="whitespace-nowrap ">
            {/* <p>{brand.name}</p> */}
            <Image
              src={brand.src}
              alt={brand.name}
              width={80}
              height={80}
              className=""
            />
          </div>
        ))}
      </section>
    </>
  );
}
