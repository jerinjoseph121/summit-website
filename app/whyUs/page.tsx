import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ourMissionData, ourVisionData, whyChooseUsData } from '../utils/whyUsPageData'

function WhyUsPage() {
  return (
    <div className="pb-20">
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">{ourMissionData.heading}</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              {ourMissionData.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <h1 className="text-xl md:text-3xl lg:text-5xl ">{ourVisionData.heading}</h1>
          <div>
            <p className="text-sm md:text-base lg:text-xl pt-5">
              {ourVisionData.description}
            </p>
          </div>
          <p className="text-sm md:text-base lg:text-xl pt-5">
            {ourVisionData.subHeading}
          </p>
          <ul className="list-inside list-decimal text-sm md:text-base lg:text-xl">
            {ourVisionData.data.map((ourVisionItem, index) => (
              <li className="pt-5" key={index}>
                {ourVisionItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-center font-medium pt-10'>
        <div className='w-5/6'>
          <Card className="h-75 md:h-100 p-5 md:p-10">
            <CardContent className="flex h-60 aspect-square justify-center p-0">
              <div className="px-2 md:px-2">
                <div className='flex justify-center pb-5'>
                  <h1 className="text-xl md:text-3xl lg:text-5xl ">{whyChooseUsData.heading}</h1>
                </div>
                <ScrollArea className="h-50 md:h-60 overflow-auto">
                  <ul className="list-inside list-decimal text-sm md:text-base lg:text-xl">
                    {whyChooseUsData.data.map((whyChooseUsItem, index) => (
                      <li className="pt-2" key={index}>
                        <strong>{whyChooseUsItem.heading}: </strong>
                        {whyChooseUsItem.description}
                      </li>
                    ))}
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

export default WhyUsPage