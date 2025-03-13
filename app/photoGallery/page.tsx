import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

function PhotoGalleryPage() {
  return (
    <div className="pb-5 md:pb-10 lg:pb-20">
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6 px-10">
          <div className='flex justify-center'>
            <h1 className="text-xl md:text-3xl lg:text-5xl ">Photo Gallery</h1>
          </div>
          <div className='flex justify-center pt-10'>
            <Carousel className="w-2/3">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="h-75 md:h-100 p-5 md:p-10">
                        <CardContent className="flex aspect-square justify-start p-0">
                          Hello
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
    </div>
  )
}

export default PhotoGalleryPage