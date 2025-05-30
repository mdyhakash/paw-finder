// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { toast } from "@/hooks/use-toast"

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   phone: z.string().min(10, { message: "Please enter a valid phone number." }),
//   address: z.string().min(5, { message: "Please enter your full address." }),
//   experience: z.string().optional(),
//   homeType: z.string(),
//   hasChildren: z.boolean().default(false),
//   hasPets: z.boolean().default(false),
//   reason: z.string().min(10, { message: "Please tell us why you want to adopt this pet." }),
//   terms: z.boolean().refine((val) => val === true, { message: "You must agree to the terms." }),
// })

// export default function AdoptionForm({ petId, petName }: { petId: string; petName: string }) {
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       experience: "",
//       homeType: "",
//       hasChildren: false,
//       hasPets: false,
//       reason: "",
//       terms: false,
//     },
//   })

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       console.log({ petId, ...values })
//       setIsSubmitting(false)
//       toast({
//         title: "Application Submitted",
//         description: `Thank you for your interest in adopting ${petName}. We'll contact you soon!`,
//       })
//       form.reset()
//     }, 1500)
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Full Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="John Doe" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input type="email" placeholder="john@example.com" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="phone"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Phone Number</FormLabel>
//                 <FormControl>
//                   <Input placeholder="(123) 456-7890" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <FormField
//           control={form.control}
//           name="address"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Address</FormLabel>
//               <FormControl>
//                 <Textarea placeholder="Your full address" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="homeType"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Home Type</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select your home type" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="house">House</SelectItem>
//                   <SelectItem value="apartment">Apartment</SelectItem>
//                   <SelectItem value="condo">Condo</SelectItem>
//                   <SelectItem value="other">Other</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="experience"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Pet Experience</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select your experience with pets" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="first-time">First-time pet owner</SelectItem>
//                   <SelectItem value="some">Some experience</SelectItem>
//                   <SelectItem value="experienced">Experienced pet owner</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <FormField
//             control={form.control}
//             name="hasChildren"
//             render={({ field }) => (
//               <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
//                 <FormControl>
//                   <Checkbox checked={field.value} onCheckedChange={field.onChange} />
//                 </FormControl>
//                 <div className="space-y-1 leading-none">
//                   <FormLabel>Do you have children?</FormLabel>
//                   <FormDescription>Please indicate if you have children in your home.</FormDescription>
//                 </div>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="hasPets"
//             render={({ field }) => (
//               <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
//                 <FormControl>
//                   <Checkbox checked={field.value} onCheckedChange={field.onChange} />
//                 </FormControl>
//                 <div className="space-y-1 leading-none">
//                   <FormLabel>Do you have other pets?</FormLabel>
//                   <FormDescription>Please indicate if you have other pets in your home.</FormDescription>
//                 </div>
//               </FormItem>
//             )}
//           />
//         </div>

//         <FormField
//           control={form.control}
//           name="reason"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Why do you want to adopt this pet?</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Tell us why you're interested in adopting this pet and what kind of home you can provide."
//                   className="min-h-[120px]"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="terms"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//               <FormControl>
//                 <Checkbox checked={field.value} onCheckedChange={field.onChange} />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel>I agree to the adoption terms and conditions</FormLabel>
//                 <FormDescription>
//                   By checking this box, you agree to our{" "}
//                   <a href="#" className="text-primary underline">
//                     terms and conditions
//                   </a>
//                   .
//                 </FormDescription>
//                 <FormMessage />
//               </div>
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="w-full" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit Application"}
//         </Button>
//       </form>
//     </Form>
//   )
// }

"use client"

import * as React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  experience: z.enum(["first-time", "experienced"]),
  homeType: z.enum(["house", "apartment"]),
  hasChildren: z.boolean().default(false),
  hasPets: z.boolean().default(false),
  reason: z.string().min(10, { message: "Please provide a reason." }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms." }),
  }),
})

type AdoptionFormProps = {
  petId: string
  petName: string
}

export function AdoptionForm({ petId, petName }: AdoptionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      experience: "first-time",
      homeType: "house",
      hasChildren: false,
      hasPets: false,
      reason: "",
      terms: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("http://localhost:8000/adoption-applications/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pet_id: petId,
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: values.address,
          experience: values.experience,
          home_type: values.homeType,
          has_children: values.hasChildren,
          has_pets: values.hasPets,
          reason: values.reason,
          agreed_to_terms: values.terms,
        }),
      })

      if (!response.ok) {
        throw new Error("Server error")
      }

      toast({
        title: "Application Submitted",
        description: `Thank you for your interest in adopting ${petName}. We'll contact you soon!`,
      })
      form.reset()
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }
return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
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

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="0123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Home Address</FormLabel>
              <FormControl>
                <Textarea placeholder="123 Main St, Dhaka, Bangladesh" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Experience */}
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have experience with pets?</FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-4"
              >
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="first-time" />
                  </FormControl>
                  <FormLabel className="ml-2">First-time</FormLabel>
                </FormItem>
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="experienced" />
                  </FormControl>
                  <FormLabel className="ml-2">Experienced</FormLabel>
                </FormItem>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Home Type */}
        <FormField
          control={form.control}
          name="homeType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Home</FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-4"
              >
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="house" />
                  </FormControl>
                  <FormLabel className="ml-2">House</FormLabel>
                </FormItem>
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="apartment" />
                  </FormControl>
                  <FormLabel className="ml-2">Apartment</FormLabel>
                </FormItem>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Children / Pets Checkboxes */}
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="hasChildren"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="ml-2">I have children at home</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasPets"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="ml-2">I have other pets</FormLabel>
              </FormItem>
            )}
          />
        </div>

        {/* Reason */}
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why do you want to adopt this pet?</FormLabel>
              <FormControl>
                <Textarea placeholder="Your reason here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel className="ml-2">
                I agree to the terms and conditions
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  )
}