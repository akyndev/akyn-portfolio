import React from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Linkedin, Mail, Plus } from "lucide-react"

const ServiceCard = () => {
  return (
    <Card className="w-full p-6">
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2">
          <Linkedin />
          <Button className="w-max h-max px-1 py-0">
            <Plus className="mr-2 h-4 w-4" /> More
          </Button>
        </div>
        <div className="flex items-start gap-1 sm:gap-3 flex-col sm:flex-row sm:items-center">
          <h2 className="text-lg sm:text-xl text-white font-medium">Framer Landing Page Design</h2>
          <Badge variant="secondary">Secondary</Badge>
        </div>
        <div>
          <p className="text-sm">
            As a Framer Expert & Top Creator, I&apos;ve successfully brought complex, multi-page websites to life.
            Let&apos;s collaborate and create something amazing together!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button>Get Started</Button>
          <Button variant={"outline"}>Book a Call</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
