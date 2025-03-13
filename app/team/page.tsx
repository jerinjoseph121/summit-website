import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembersData } from '../utils/teamPageData';

function TeamPage() {
  return (
    <div className="pb-20">
      <div className="flex justify-center font-medium">
        <div className="w-5/6">
          {teamMembersData.map((teamMember, index) => (
            <div className="pt-10" key={index}>
              <div className="flex">
                <Avatar className="w-25 md:w-30 lg:w-50 h-25 md:h-30 lg:h-50">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>{teamMember.image.label}</AvatarFallback>
                </Avatar>
                <div className="pl-5 lg:pl-10 flex items-center">
                  <div>
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{teamMember.name}</h1>
                    <h3 className="text-md md:text-xl lg:text-3xl pt-2 lg:pt-5">{teamMember.position}</h3>
                  </div>
                </div>
              </div>
              <div className="text-sm md:text-base lg:text-xl pt-5">
                {teamMember.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default TeamPage;