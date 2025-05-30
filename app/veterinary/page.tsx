import { Suspense } from "react"
import VetSearch from "@/components/vet-search"
import VetList from "@/components/vet-list"
import AppointmentForm from "@/components/appointment-form"
import PetLoading from "@/components/pet-loading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VeterinaryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Veterinary Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Find a Veterinarian</CardTitle>
              <CardDescription>Schedule an appointment for your pet</CardDescription>
            </CardHeader>
            <CardContent>
              <VetSearch />
              <Suspense fallback={<PetLoading />}>
                <VetList />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Book an Appointment</CardTitle>
              <CardDescription>Fill out the form to schedule a visit</CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
