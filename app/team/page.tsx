import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamPage = () => {
  return (
    <div className="pb-20">
      <div className="flex justify-center font-medium pt-10">
        <div className="w-5/6">
          <Avatar className="w-50 h-50">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>BJ</AvatarFallback>
          </Avatar>
          <h1 className="text-xl md:text-3xl lg:text-5xl ">Our Mission</h1>
        </div>

      </div>
    </div>
  )
};

export default TeamPage;