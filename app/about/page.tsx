import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - PawFinder",
  description: "Learn about our mission to connect pets with loving homes",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">About PawFinder</h1>

        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="PawFinder team with pets"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              At PawFinder, our mission is simple: to connect loving homes with pets in need. We believe every animal
              deserves a chance at a happy life with a caring family. Through our platform, we strive to make the
              adoption process seamless, ensuring both pets and their new owners find their perfect match.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              PawFinder was founded in 2018 by a group of animal lovers who saw a need for a more streamlined,
              compassionate approach to pet adoption. What started as a small local initiative has grown into a
              nationwide platform that has helped thousands of pets find their forever homes.
            </p>
            <p>
              Our team consists of dedicated professionals with backgrounds in animal welfare, veterinary care, and
              technology. This unique combination of expertise allows us to create innovative solutions that benefit
              both animals and adopters.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-primary">5K+</span>
                  </div>
                  <h3 className="font-semibold text-lg">Adoptions</h3>
                  <p className="text-muted-foreground">Successful pet adoptions facilitated</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-primary">200+</span>
                  </div>
                  <h3 className="font-semibold text-lg">Shelters</h3>
                  <p className="text-muted-foreground">Partner shelters and rescues nationwide</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-primary">50+</span>
                  </div>
                  <h3 className="font-semibold text-lg">Veterinarians</h3>
                  <p className="text-muted-foreground">Certified veterinarians in our network</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-lg">Compassion</h3>
                <p>We approach every animal and adopter with empathy and understanding.</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">Integrity</h3>
                <p>We maintain the highest ethical standards in all our operations.</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p>We continuously seek new ways to improve the adoption experience.</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">Community</h3>
                <p>We foster a supportive network of pet lovers, shelters, and veterinarians.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
            <p>
              Whether you're looking to adopt, volunteer, or partner with us, there are many ways to get involved with
              PawFinder. Together, we can make a difference in the lives of animals in need.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

