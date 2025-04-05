import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Pet Care Tips - PawFinder",
  description: "Essential tips and advice for caring for your pets",
}

export default function PetCareTipsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Pet Care Tips</h1>

      <Tabs defaultValue="dogs" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dogs">Dogs</TabsTrigger>
          <TabsTrigger value="cats">Cats</TabsTrigger>
          <TabsTrigger value="small-pets">Small Pets</TabsTrigger>
          <TabsTrigger value="birds">Birds</TabsTrigger>
        </TabsList>

        <TabsContent value="dogs" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Essential Dog Care</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Nutrition</h3>
                  <p className="mb-2">
                    Proper nutrition is the foundation of your dog's health. Choose high-quality dog food appropriate
                    for your dog's age, size, and activity level.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Feed adult dogs twice a day on a regular schedule</li>
                    <li>Provide fresh water at all times</li>
                    <li>Avoid feeding table scraps, which can lead to obesity and digestive issues</li>
                    <li>Consult your vet about specific dietary needs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Exercise</h3>
                  <p className="mb-2">
                    Regular exercise is crucial for your dog's physical and mental well-being. The amount needed varies
                    by breed, age, and health status.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Aim for at least 30 minutes of activity daily</li>
                    <li>Include walks, play sessions, and mental stimulation</li>
                    <li>Adjust exercise based on weather conditions</li>
                    <li>Consider breed-specific activities (retrieving, agility, etc.)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Grooming</h3>
                  <p className="mb-2">
                    Regular grooming keeps your dog clean and healthy while strengthening your bond.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Brush your dog's coat regularly to remove loose fur and prevent mats</li>
                    <li>Bathe your dog as needed, typically every 1-3 months</li>
                    <li>Trim nails when you hear them clicking on hard floors</li>
                    <li>Clean ears and brush teeth regularly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="relative aspect-square w-full mb-6 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=400" alt="Dog care" fill className="object-cover" />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Health Care</h3>
                <p className="mb-2">Preventive care is essential for keeping your dog healthy throughout their life.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Schedule regular veterinary check-ups (at least annually)</li>
                  <li>Keep vaccinations up to date</li>
                  <li>Maintain parasite prevention (fleas, ticks, heartworm)</li>
                  <li>Spay or neuter your pet</li>
                  <li>Learn to recognize signs of illness</li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-2">Training & Socialization</h3>
                  <p className="mb-2">Training and socialization help your dog become a well-adjusted companion.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Start training early with positive reinforcement methods</li>
                    <li>Teach basic commands like sit, stay, come, and leave it</li>
                    <li>Socialize your dog with different people, animals, and environments</li>
                    <li>Address behavioral issues promptly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="cats" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Essential Cat Care</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Nutrition</h3>
                  <p className="mb-2">
                    Cats have specific dietary needs that differ from other pets. Proper nutrition is essential for
                    their health.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Feed high-quality cat food formulated for their life stage</li>
                    <li>Provide fresh water daily in clean bowls</li>
                    <li>Monitor portion sizes to prevent obesity</li>
                    <li>Consider wet food to increase water intake</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Litter Box Maintenance</h3>
                  <p className="mb-2">A clean litter box is essential for your cat's hygiene and happiness.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Scoop the litter box daily</li>
                    <li>Change litter completely every 1-2 weeks</li>
                    <li>Provide one litter box per cat, plus one extra</li>
                    <li>Place litter boxes in quiet, accessible locations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Grooming</h3>
                  <p className="mb-2">While cats are excellent self-groomers, they still benefit from your help.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Brush short-haired cats weekly and long-haired cats daily</li>
                    <li>Trim nails every 2-3 weeks</li>
                    <li>Check and clean ears monthly</li>
                    <li>Brush teeth regularly with cat-specific toothpaste</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="relative aspect-square w-full mb-6 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=400" alt="Cat care" fill className="object-cover" />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Health Care</h3>
                <p className="mb-2">Regular veterinary care helps catch health issues early.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Schedule annual wellness exams</li>
                  <li>Keep vaccinations current</li>
                  <li>Maintain parasite prevention</li>
                  <li>Spay or neuter your cat</li>
                  <li>Watch for changes in behavior, appetite, or litter box habits</li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-2">Enrichment & Play</h3>
                  <p className="mb-2">
                    Mental and physical stimulation keeps cats happy and prevents behavior problems.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide scratching posts and pads</li>
                    <li>Offer a variety of toys that stimulate hunting instincts</li>
                    <li>Create vertical spaces with cat trees or shelves</li>
                    <li>Schedule regular interactive play sessions</li>
                    <li>Consider puzzle feeders to engage their minds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="small-pets" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Small Pet Care</h2>
          <p className="mb-6">
            Small pets like rabbits, guinea pigs, hamsters, and gerbils each have unique care requirements. Here are
            some general guidelines to keep your small pets healthy and happy.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Housing</h3>
                <p className="mb-2">Proper housing is essential for small pets' comfort and safety.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide a cage or habitat with adequate space to move around</li>
                  <li>Include hiding spots for security</li>
                  <li>Use appropriate bedding material</li>
                  <li>Clean habitats regularly</li>
                  <li>Keep in a temperature-controlled environment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Nutrition</h3>
                <p className="mb-2">Each small pet species has specific dietary needs.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Research the specific nutritional requirements for your pet</li>
                  <li>Provide fresh water daily</li>
                  <li>Offer appropriate commercial food as a base diet</li>
                  <li>Supplement with fresh vegetables and limited fruits</li>
                  <li>For some species (like guinea pigs), provide vitamin C</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Health Care</h3>
                <p className="mb-2">Small pets need regular health monitoring.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Find an exotic pet veterinarian for check-ups</li>
                  <li>Learn normal behavior for your pet's species</li>
                  <li>Watch for signs of illness (lethargy, not eating, abnormal droppings)</li>
                  <li>Maintain proper dental health (especially for rabbits and guinea pigs)</li>
                  <li>Keep nails trimmed as needed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Socialization & Enrichment</h3>
                <p className="mb-2">Mental stimulation is important for small pets' well-being.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide toys appropriate for your pet's species</li>
                  <li>Allow supervised time outside the cage in a safe area</li>
                  <li>Some species (like rabbits and guinea pigs) benefit from companionship</li>
                  <li>Handle your pet regularly to build trust</li>
                  <li>Rotate toys to maintain interest</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="birds" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Bird Care Essentials</h2>
          <p className="mb-6">
            Birds require specialized care to thrive in captivity. Whether you have a parakeet, cockatiel, canary, or
            larger parrot, these guidelines will help you provide proper care.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Housing</h3>
                <p className="mb-2">A proper cage is essential for your bird's safety and comfort.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Choose the largest cage you can accommodate</li>
                  <li>Select appropriate bar spacing for your bird's size</li>
                  <li>Include a variety of perches of different diameters</li>
                  <li>Position the cage in a draft-free area away from the kitchen</li>
                  <li>Clean the cage and replace liners regularly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Nutrition</h3>
                <p className="mb-2">A varied diet is crucial for birds' health and longevity.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide a high-quality pelleted diet as the foundation</li>
                  <li>Supplement with fresh vegetables and limited fruits</li>
                  <li>Offer small amounts of seeds as treats</li>
                  <li>Ensure fresh, clean water is always available</li>
                  <li>Avoid avocado, chocolate, caffeine, and alcohol, which are toxic to birds</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Health Care</h3>
                <p className="mb-2">Birds are masters at hiding illness, so preventive care is essential.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Find an avian veterinarian for regular check-ups</li>
                  <li>Watch for signs of illness (fluffed feathers, lethargy, changes in droppings)</li>
                  <li>Keep wings properly trimmed for safety</li>
                  <li>Provide opportunities for bathing</li>
                  <li>Maintain proper humidity and temperature</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Enrichment & Socialization</h3>
                <p className="mb-2">Birds are intelligent and need mental stimulation and social interaction.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide a variety of toys and rotate them regularly</li>
                  <li>Allow supervised time outside the cage daily</li>
                  <li>Interact with your bird through talking, training, and play</li>
                  <li>Consider getting a companion for social species</li>
                  <li>Provide foraging opportunities to stimulate natural behaviors</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Seasonal Pet Care Tips</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Spring pet care"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg mb-2">Spring</h3>
              <ul className="text-sm space-y-1">
                <li>• Update parasite prevention</li>
                <li>• Watch for seasonal allergies</li>
                <li>• Begin heartworm prevention</li>
                <li>• Be aware of toxic spring plants</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Summer pet care"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg mb-2">Summer</h3>
              <ul className="text-sm space-y-1">
                <li>• Prevent heat stroke</li>
                <li>• Never leave pets in hot cars</li>
                <li>• Provide plenty of fresh water</li>
                <li>• Protect paws from hot surfaces</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Fall pet care"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg mb-2">Fall</h3>
              <ul className="text-sm space-y-1">
                <li>• Keep pets away from rodenticides</li>
                <li>• Be cautious with fall decorations</li>
                <li>• Watch for mushrooms in damp areas</li>
                <li>• Adjust food intake as activity levels change</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Winter pet care"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg mb-2">Winter</h3>
              <ul className="text-sm space-y-1">
                <li>• Protect pets from cold temperatures</li>
                <li>• Wipe paws after walks (salt, antifreeze)</li>
                <li>• Provide a warm sleeping area</li>
                <li>• Monitor outdoor time in extreme cold</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

