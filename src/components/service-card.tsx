"use client";
import React from "react";
import { GetStartForm } from "./get-started-form";
import { ServiceDialog } from "./service-dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceCardProps {
  description: string;
  price: string;
  title: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ description, price, title, icon }: ServiceCardProps) => {
  return (
    <Card className="w-full p-6">
      <CardContent className="flex flex-col gap-4 p-0">
        <div className="flex items-center justify-between pb-2">
          {icon}
          <ServiceDialog title={title} icon={icon} />
        </div>
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-3">
          <h2 className="text-lg font-medium text-foreground sm:text-xl">
            {title}
          </h2>
          <Badge variant="secondary">{price}</Badge>
        </div>
        <div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="">
            <GetStartForm />
          </div>
          <Button variant={"outline"}>Book a Call</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
