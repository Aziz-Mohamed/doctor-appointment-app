"use client"
import { Star, User, Calendar } from 'lucide-react'

import { Card, CardContent } from "@/_components/ui/Card"
import { Button } from "@/_components/ui/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/Avatar"
import Link from 'next/link'

export default function DoctorList({ doctors = [] }) {
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctors.map((doctor) => (
          <Card key={doctor.doctorID} className="overflow-hidden">
            <CardContent className="p-4 flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={doctor.photoUrl} alt={doctor.doctorName} />
                <AvatarFallback>
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{doctor.doctorName} </h2>
                <p className="text-sm text-gray-600 capitalize">{doctor.specialty}</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{doctor.rate.toFixed(1)}</span>
                </div>
              </div>
              <Link href={`/dashboard/${doctor.doctorID}`} >
                <Button className="ml-auto border-slate-200 shadow-sm hover:shadow-md active:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-offset-2 focus:ring-slate-300" size="sm" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}