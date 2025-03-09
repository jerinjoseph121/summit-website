import React from "react"
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { servicesOfferedData } from './utils/homePageData';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="pb-20">
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">About Us</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              Summit Engineering & Technology LLC is a multi-service Company providing comprehensive MEP services for a diverse range of projects.
              From concept to completion, we specialize in designing, installing, and maintaining cutting-edge electrical, mechanical and plumbing systems that meet the highest industry standards.
              Summit Engineering & Technology was established in 2012 with a sole motive to break new grounds in its business domain and provide turnkey solutions to the customers in Oman.
              Our expertise particularly extends to 11kV/415V electrical works, showcasing a profound focus on high-voltage and low-voltage electrical systems, covering everything from the design and installation to the maintenance of these specific electrical components.
              Our commitment lies in consistently delivering top-tier solutions within this focused and specialized field.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">Our Core Values</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              At Summit Engineering & Technology LLC, our core values define our approach to business:
            </p>
            <ul className="list-inside list-disc text-sm md:text-base lg:text-xl">
              <li className="pt-5" key={"excellence"}>
                <strong>Excellence:</strong> We strive for excellence in every aspect of our work, ensuring that our clients receive top-notch MEP solutions tailored to their unique needs.
              </li>
              <li className="pt-5" key={"innovation"}>
                <strong>Innovation:</strong> Embracing the latest technologies and industry trends, we continuously innovate to deliver state-of-the-art MEP systems that enhance efficiency and sustainability.
              </li>
              <li className="pt-5" key={"integrity"}>
                <strong>Integrity:</strong> Transparency, honesty, and integrity form the foundation of our interactions with clients, partners, and employees.
              </li>
              <li className="pt-5" key={"clientCentric"}>
                <strong>Client-Centric:</strong> We prioritize client satisfaction, working collaboratively to understand their goals and delivering solutions that exceed expectations.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
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
                                <strong>{servicesOfferedData[index].Heading}:</strong>
                              </p>
                              <ul className="list-inside list-disc text-sm md:text-base lg:text-xl">
                                {Array.from({ length: servicesOfferedData[index].Data.length }).map((_, dataIndex) => (
                                  <li className="pt-5" key={dataIndex}>
                                    {servicesOfferedData[index].Data[dataIndex]}
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
      </div>
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">Areas of operation</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              Summit Engineering & Technology LLC is currently operating from Al Khuwair in the Sultanate of Oman.
              The infrastructure, equipment, and personnel give us the advantage in maintaining continuity of services to our valued customers.
              Our deep industry knowledge enables us to provide, our customers with innovative ideas that help them improve quality and security.
              We deliver our commitments; we build strong relationships with our customers and win a strong place in the market.
              Our high quality, cost-effective services provide the optimal mix that, our customers demand.
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
