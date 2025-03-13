import React from 'react'
import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table"
import { majorProjectsData, scopeOfWorkProps } from '../utils/majorProjectsData';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const ScopeOfWorkList = ({ data }: { data: scopeOfWorkProps }) => {
  return (
    <div>
      {data.electricalInstallation && (
        <div className='pt-2'>
          <strong>Electrical Installation: </strong>
          {data.electricalInstallation.description}
          <ul className="list-inside list-disc">
            {data.electricalInstallation.installationItems.map((installationItem, index) => (
              <li key={index}>{installationItem}</li>
            ))}
          </ul>
        </div>
      )}
      {data.mechanicalInstallation && (
        <div className='pt-2'>
          <strong>Mechanical Installation: </strong>
          {data.mechanicalInstallation.description}
          <ul className="list-inside list-disc">
            {data.mechanicalInstallation.installationItems.map((installationItem, index) => (
              <li key={index}>{installationItem}</li>
            ))}
          </ul>
        </div>
      )}
      {data.elvInstallation && (
        <div className='pt-2'>
          <strong>ELV Installation: </strong>
          {data.elvInstallation.description}
          <ul className="list-inside list-disc">
            {data.elvInstallation.installationItems.map((installationItem, index) => (
              <li key={index}>{installationItem}</li>
            ))}
          </ul>
        </div>
      )}
      {data.cathodicProtectionInstallation && (
        <div className='pt-2'>
          <strong>Cathodic Protection Installation: </strong>
          {data.cathodicProtectionInstallation.description}
          <ul className="list-inside list-disc">
            {data.cathodicProtectionInstallation.installationItems.map((installationItem, index) => (
              <li key={index}>{installationItem}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MajorProjectsPage() {
  return (
    <div className="pb-5 md:pb-10 lg:pb-20">
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6 px-10">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-5xl ">Major Projects</h1>
          </div>
          <div className='pt-10'>
            <Carousel>
              <CarouselContent>
                {majorProjectsData.map((majorProjectItem, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <div className='flex justify-center'>
                        <Card className='p-3 md:p-5 lg:p-10'>
                          <CardContent>
                            <div className="flex items-center justify-center pt-5">
                              <Image src={majorProjectItem.projectImage} alt={'ShadCN'} />
                            </div>
                            <div className='flex justify-center pt-5'>
                              {majorProjectItem.projectImageDescription}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div className='flex justify-center pt-10'>
                        <Table>
                          <TableCaption>{majorProjectItem.projectDescription}</TableCaption>
                          <TableBody className='w-fit'>
                            <TableRow key={majorProjectItem.projectDescription}>
                              <TableHead className="w-[100px]">Project Description</TableHead>
                              <TableCell className="font-medium">{majorProjectsData[0].projectDescription}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableHead>Client</TableHead>
                              <TableCell>{majorProjectItem.client}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableHead>Scope of Work</TableHead>
                              <TableCell>
                                <ScopeOfWorkList data={majorProjectItem.scopeOfWork} />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableHead>Project Value</TableHead>
                              <TableCell>{majorProjectItem.projectValue}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableHead>Project Duration</TableHead>
                              <TableCell>{majorProjectItem.projectDuration}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div >
    </div >
  )
}

export default MajorProjectsPage