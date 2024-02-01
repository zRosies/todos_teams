import Image from "next/image";
import adidas from "@/app/carouselPics/adidas.png";

export default function BrandCarousel() {
  const brands = [
    { name: "apple", src: "/carou/apple.png" },
    { name: "coca", src: "/carou/coca.png" },
    { name: "f1", src: "/carou/f1.png" },
    { name: "nike", src: "/carou/nike.png" },
    { name: "disney", src: "/carou/disney.png" },
    { name: "dell", src: "/carou/dell.png" },
    { name: "adidas", src: "/carou/adidas.png" },
    { name: "spofty", src: "/carou/spotfy.png" },
    { name: "microsoft", src: "/carou/micro.png" },
  ];
  return (
    <>
      {/* Consite em criar 2 divs com  os mesmos logos, um do lado do outro
       e assim que o primeiro div desaparece o segundo entra na tela porque está ao lado, e assim successivamente.
     Os elementos after e before são apenas para efeito de suavidade */}
      <section className=" whitespace-nowrap overflow-hidden relative justify-center before:content-[''] before:bg-gradient-to-r from-white to-transparent  before:absolute before:left-0 before:top-0 before:w-[200px] before:h-full after:content-[''] after:bg-gradient-to-l after:from-white after:to-transparent  after:absolute after:right-0 after:top-0 after:w-[200px] after:h-full before:z-20 group">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="inline-block animate-slide whitespace-nowrap group-hover:animate-paused "
          >
            {/* <p>{brand.name}</p> */}
            <Image
              src={brand.src}
              alt={brand.name}
              width={80}
              height={80}
              className="mx-[40px] "
            />
          </div>
        ))}

        {brands.map((brand) => (
          <div
            key={brand.name}
            className="whitespace-nowrap inline-block animate-slide"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={80}
              height={80}
              className="mx-[40px]"
            />
          </div>
        ))}
      </section>
    </>
  );
}
