import React from "react"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  homeImage,
  aboutUsData,
  ourCoreValuesData,
  servicesOfferedData,
  areasOfOperationData
} from './utils/homePageData';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="flex justify-center pb-20">
      <div className="w-5/6">
        <div className="flex justify-center pt-10">
          <Image src={homeImage.image} alt={homeImage.alt} width={450} />
        </div>
        <div className="font-medium pt-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">{aboutUsData.heading}</h1>
          <div className="text-sm md:text-base lg:text-xl pt-5">
            {aboutUsData.description}
          </div>
        </div>
        <div className="font-medium pt-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">{ourCoreValuesData.heading}</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              {ourCoreValuesData.description}
            </p>
            <ul className="list-inside list-disc text-sm md:text-base lg:text-xl">
              {ourCoreValuesData.data.map((ourCoreValuesItem) => (
                <li className="pt-5" key={ourCoreValuesItem.heading}>
                  <strong>{ourCoreValuesItem.heading}:</strong> {ourCoreValuesItem.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="font-medium pt-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">Services We Offer</h1>
          <div className="flex justify-center pt-10">
            <Carousel className="w-2/3">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="h-75 md:h-100 p-5 md:p-10">
                        <CardContent className="flex aspect-square justify-start p-0">
                          <ScrollArea className="h-60 md:h-80 overflow-auto">
                            <div className="px-2 md:px-10">
                              <p className="text-base md:text-xl lg:text-2xl">
                                <strong>{servicesOfferedData[index].heading}:</strong>
                              </p>
                              <ul className="list-inside list-disc text-sm md:text-base lg:text-xl">
                                {Array.from({ length: servicesOfferedData[index].data.length }).map((_, dataIndex) => (
                                  <li className="pt-5" key={dataIndex}>
                                    {servicesOfferedData[index].data[dataIndex]}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="font-medium pt-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">{areasOfOperationData.heading}</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              {areasOfOperationData.description}
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
