import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@radix-ui/react-scroll-area'

function whyUsPage() {
  return (
    <div className="pb-20">
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">Our Mission</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              In a perfect world, things wouldn’t break down. Until then, it is our mission to respond with urgency, expertise and professionalism to minimize the length and frequency of downtime.
              We are committed to a high quality of workmanship and provide a safe work environment on all projects.
              We know that people do business with companies that meet their needs and provide reliable service. We attribute our success to building strategic partnerships and treating customers the way we want to be treated.
              We believe the quality in our work will represent us for years to come.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">Our Vision</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              Summit Engineering and Technology’s corporate vision is “to become the world’s premier digital industrial company, Transforming industry with software-defined machines and solutions that are connected, responsive and predictive.”
              In addition to this corporate vision statement, GE specifies that these machines and solutions are for “executing critical outcomes for our customers.”
              The company caters to the needs of a diverse population of customers.
              For example, customers in the oil and gas, aerospace/aviation, healthcare, power, transportation, and electric lighting industries are considered.
            </p>
          </div>
          <p className="text-sm md:text-base lg:text-xl pt-5">
            The following components are most notable in Summit Engineering and Technology vision statement:
          </p>
          <ul className="list-inside list-decimal text-sm md:text-base lg:text-xl">
            <li className="pt-5" key={"vision-1"}>
              To become the world’s premier digital industrial company
            </li>
            <li className="pt-5" key={"vision-2"}>
              Transforming industry with software-defined machines and solutions that are connected, responsive and predictive
            </li>
            <li className="pt-5" key={"vision-3"}>
              Executing critical outcomes for our customers
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center font-medium pt-10'>
        <div className='w-5/6'>
          <Card className="h-75 md:h-100 p-5 md:p-10">
            <CardContent className="flex h-60 aspect-square justify-center p-0">
              <div className="px-2 md:px-2">
                <div className='flex justify-center pb-5'>
                  <h1 className="text-xl md:text-3xl lg:text-5xl ">Why choose us?</h1>
                </div>
                <ScrollArea className="h-50 md:h-60 overflow-auto">
                  <ul className="list-inside list-decimal text-sm md:text-base lg:text-xl">
                    <li className="pt-2" key={"why-us-1"}>
                      <strong>Proven Track Record: </strong>
                      We have successfully completed many projects, demonstrating our expertise and reliability in the industry.
                    </li>
                    <li className="pt-5" key={"why-us-2"}>
                      <strong>Skilled Team: </strong>
                      Our team of qualified engineers, technicians, and project managers are dedicated to delivering projects on time and within budget.
                    </li>
                    <li className="pt-5" key={"why-us-3"}>
                      <strong>Commitment to Sustainability: </strong>
                      We prioritize environmentally-friendly solutions, integrating energy-efficient technologies into our MEP systems.
                    </li>
                    <li className="pt-5" key={"why-us-4"}>
                      <strong>Customized Solutions: </strong>
                      We understand that each project is unique. Our solutions are tailored to meet the specific requirements and challenges of our clients.
                    </li>
                  </ul>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default whyUsPage