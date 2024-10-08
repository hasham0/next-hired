"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import CompaniesData from "@/utils/data/companies.json";
type Props = {};

const CarouselSection = (props: Props) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full py-10"
    >
      <CarouselContent className="flex items-center gap-5 lg:gap-20">
        {CompaniesData.map((item, index: number) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/6">
            <Image
              src={item.path}
              alt={item.name}
              width={200}
              height={200}
              className="h-9 object-contain sm:h-14"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselSection;
