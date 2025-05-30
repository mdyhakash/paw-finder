"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format, addDays, isBefore, isAfter, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getVets } from "@/lib/data"
import type { Veterinarian } from "@/lib/types"

const formSchema = z.object({
  vetId: z.string().min(1, { message: "Please select a veterinarian" }),
  petName: z.string().min(1, { message: "Pet name is required" }),
  petType: z.string().min(1, { message: "Pet type is required" }),
  ownerName: z.string().min(1, { message: "Your name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.date({ required_error: "Please select a date" }).refine((date) => !isBefore(date, startOfDay(new Date())), {
    message: "Appointment date cannot be in the past",
  }),
  time: z.string().min(1, { message: "Please select a time" }),
  visitType: z.enum(["routine", "sick", "followup", "emergency"], {
    required_error: "Please select a visit type",
  }),
  reason: z.string().min(5, { message: "Please provide a reason for the visit" }),
})

export default function AppointmentForm() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [vets, setVets] = useState<Veterinarian[]>([])

  // Get vet information from URL if available
  const preselectedVetId = searchParams.get("vetId") || ""
  const preselectedVetName = searchParams.get("vetName") || ""

  // Replace the existing getVets() call with:
  useEffect(() => {
    async function loadVets() {
      try {
        const fetchedVets = await getVets()
        // Ensure we have an array
        if (Array.isArray(fetchedVets)) {
          setVets(fetchedVets)
        } else {
          console.error("getVets() did not return an array:", fetchedVets)
          setVets([])
        }
      } catch (error) {
        console.error("Error loading vets:", error)
        setVets([])
      }
    }

    loadVets()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vetId: preselectedVetId,
      petName: "",
      petType: "",
      ownerName: "",
      email: "",
      phone: "",
      time: "",
      visitType: "routine",
      reason: "",
    },
  })

  // Update available times based on selected date
  const selectedDate = form.watch("date")
  const selectedVetId = form.watch("vetId")

  useEffect(() => {
    if (selectedDate && selectedVetId) {
      // Simulate different available times based on day of week and vet
      const day = selectedDate.getDay()
      const isWeekend = day === 0 || day === 6

      // Generate different time slots based on weekday/weekend and vet
      let times: string[] = []

      if (isWeekend) {
        times = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"]
      } else {
        times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]
      }

      // Remove some times to simulate availability
      const vetIndex = Number.parseInt(selectedVetId) % 4
      const availableTimes = times.filter((_, index) => (index + vetIndex) % 3 !== 0)

      setAvailableTimes(availableTimes)

      // Reset time if previously selected time is no longer available
      const currentTime = form.getValues("time")
      if (currentTime && !availableTimes.includes(currentTime)) {
        form.setValue("time", "")
      }
    } else {
      setAvailableTimes([])
    }
  }, [selectedDate, selectedVetId, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Get vet name for confirmation message
    const vet = vets.find((v) => v.id === values.vetId)
    const vetName = vet ? vet.name : "the veterinarian"

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      toast({
        title: "Appointment Scheduled",
        description: `Your appointment with ${vetName} has been scheduled for ${format(values.date, "EEEE, MMMM d, yyyy")} at ${values.time}.`,
      })
      form.reset({
        vetId: "",
        petName: "",
        petType: "",
        ownerName: "",
        email: "",
        phone: "",
        time: "",
        visitType: "routine",
        reason: "",
      })
    }, 1500)
  }

  return (
    <div id="appointment-form" className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="vetId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Veterinarian</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a veterinarian" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {vets && vets.length > 0 ? (
                      vets.map((vet) => (
                        <SelectItem key={vet.id} value={vet.id}>
                          {vet.name} - {vet.clinic}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="no-vets" disabled>
                        No veterinarians available
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="petName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Fluffy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="petType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="bird">Bird</SelectItem>
                      <SelectItem value="rabbit">Rabbit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="visitType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visit Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="routine" />
                      </FormControl>
                      <FormLabel className="font-normal">Routine Check-up</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="sick" />
                      </FormControl>
                      <FormLabel className="font-normal">Sick Visit</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="followup" />
                      </FormControl>
                      <FormLabel className="font-normal">Follow-up</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="emergency" />
                      </FormControl>
                      <FormLabel className="font-normal">Emergency</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? format(field.value, "EEEE, MMMM d, yyyy") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          isBefore(date, startOfDay(new Date())) || isAfter(date, addDays(new Date(), 30))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Appointments available up to 30 days in advance</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={!selectedDate || !selectedVetId}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={!selectedDate || !selectedVetId ? "Select date and vet first" : "Select time"}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableTimes.length > 0 ? (
                        availableTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="no-times" disabled>
                          No available times
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  <FormDescription>Available appointment times</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Visit</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe the reason for your visit"
                    className="min-h-[80px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
