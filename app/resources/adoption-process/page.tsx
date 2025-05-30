import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Adoption Process - PawFinder",
  description: "Learn about our pet adoption process and requirements",
}

export default function AdoptionProcessPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">The Adoption Process</h1>

      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Happy family adopting a pet"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Finding Your Perfect Companion</h2>
          <p className="text-lg">
            At PawFinder, we believe that adopting a pet is a lifelong commitment. Our adoption process is designed to
            ensure that both you and your new pet will be happy together for years to come.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-primary">1</span>
              </div>
              <h2 className="text-2xl font-semibold">Browse Available Pets</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Start your journey by exploring our database of pets looking for their forever homes. You can filter
                  by species, breed, age, and location to find pets that match your lifestyle.
                </p>
                <p>
                  Take your time to read through pet profiles, which include information about each animal's
                  personality, background, and any special needs they may have.
                </p>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Tips for Finding the Right Match:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Consider your living situation, including space and any restrictions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Think about your activity level and how it matches with the pet's needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Consider any existing pets and how they might interact with a new addition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Be honest about your experience level with pets</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Person browsing pets on computer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-primary">2</span>
              </div>
              <h2 className="text-2xl font-semibold">Submit an Application</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1 relative aspect-square w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Person filling out adoption application"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <p className="mb-4">
                  Once you've found a pet you're interested in, the next step is to complete an adoption application.
                  This helps us understand your lifestyle, experience with pets, and what you're looking for in a
                  companion.
                </p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">The application typically includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic contact information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Details about your home environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Experience with pets</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Information about other household members and pets</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>References (personal and veterinary)</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Our adoption counselors review applications to ensure that each pet goes to a home where both the
                  animal and the adopter will thrive together.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-primary">3</span>
              </div>
              <h2 className="text-2xl font-semibold">Meet & Greet</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  After your application is reviewed, we'll arrange a meet and greet with the pet you're interested in.
                  This is a crucial step in the adoption process, as it allows you to interact with the pet and see if
                  you're a good match for each other.
                </p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">During the meet and greet:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Spend time interacting with the pet in a quiet environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ask questions about the pet's behavior, health, and needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>If you have other pets, we may arrange a supervised introduction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Discuss any concerns with our adoption counselors</span>
                    </li>
                  </ul>
                </div>

                <p>
                  We encourage you to take your time during this step. Sometimes, the perfect match isn't the pet you
                  initially thought you wanted.
                </p>
              </div>

              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Person meeting a dog"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-primary">4</span>
              </div>
              <h2 className="text-2xl font-semibold">Home Check</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1 relative aspect-square w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Home check for pet adoption"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <p className="mb-4">
                  For some adoptions, especially those involving certain breeds or animals with special needs, we may
                  conduct a home check. This isn't meant to be intrusive, but rather to ensure that your home is safe
                  and suitable for the specific pet you want to adopt.
                </p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">During a home check, we look for:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure fencing for dogs, if applicable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Safe spaces for the pet to rest and play</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Potential hazards that may need to be addressed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Compliance with any housing restrictions</span>
                    </li>
                  </ul>
                </div>

                <p>
                  We're happy to provide suggestions for pet-proofing your home and making it comfortable for your new
                  companion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-primary">5</span>
              </div>
              <h2 className="text-2xl font-semibold">Finalize the Adoption</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Once all the previous steps are completed successfully, it's time to finalize the adoption! This
                  involves completing paperwork, paying the adoption fee, and receiving important information about your
                  new pet.
                </p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">The adoption package typically includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Adoption certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Medical records and vaccination history</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Microchip registration information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Care instructions specific to your new pet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Information about follow-up veterinary care</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Our adoption fees vary depending on the animal's age, breed, and medical needs. These fees help cover
                  the cost of care while the animal was with us, including vaccinations, spaying/neutering,
                  microchipping, and any medical treatments.
                </p>
              </div>

              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Family with newly adopted pet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-primary">6</span>
              </div>
              <h2 className="text-2xl font-semibold">Post-Adoption Support</h2>
            </div>

            <p className="mb-6">
              Our commitment to you and your pet doesn't end when you leave with your new companion. We provide ongoing
              support to help ensure a successful transition and a happy life together.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Training Resources</h3>
                  <p className="text-muted-foreground">
                    Access to training guides, videos, and discounted training classes with our partners.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Behavior Support</h3>
                  <p className="text-muted-foreground">
                    Guidance for addressing common behavior issues and adjusting to your home.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Medical Advice</h3>
                  <p className="text-muted-foreground">
                    Information about follow-up care and recommendations for veterinarians in your area.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Join our adopter community to share experiences and get advice from other pet parents.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Check-ins</h3>
                  <p className="text-muted-foreground">
                    We'll follow up to see how you and your new pet are adjusting and offer support if needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Return Policy</h3>
                  <p className="text-muted-foreground">
                    If things don't work out, we accept returns to ensure every pet finds the right home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Find Your Perfect Companion?</h2>
          <p className="text-lg mb-6">
            Start your journey today by browsing our available pets or contacting us with any questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button size="lg">Browse Available Pets</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
