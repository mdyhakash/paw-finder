import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Success Stories - PawFinder",
  description: "Heartwarming stories of pets who found their forever homes through PawFinder",
}

export default function SuccessStoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Success Stories</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg">
            Every adoption is a story of hope, love, and new beginnings. 
            Here are just a few of the many happy endings that have been made possible 
            through PawFinder and our amazing adopters.
          </p>
        </div>
        
        <Tabs defaultValue="dogs" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="dogs">Dogs</TabsTrigger>
            <TabsTrigger value="cats">Cats</TabsTrigger>
            <TabsTrigger value="other">Other Pets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dogs" className="mt-6">
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/placeholder.svg?height=400&width=400" 
                    alt="Max with his new family" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-2" />
                    <h2 className="text-2xl font-semibold">Max's New Beginning</h2>
                  </div>
                  
                  <p className="mb-4">
                    Max, a 3-year-old Labrador mix, spent over a year in shelters before finding his forever home 
                    with the Johnson family. Abandoned as a puppy, Max had developed trust issues that made him 
                    overlooked by many potential adopters.
                  </p>
                  
                  <p className="mb-4">
                    "When we met Max, we saw past his initial shyness and recognized a sweet, loyal dog who just 
                    needed patience and love," says Sarah Johnson. "The adoption counselors at PawFinder were amazing 
                    at matching us with a dog that fit our family perfectly."
                  </p>
                  
                  <p className="mb-4">
                    Today, Max is unrecognizable from the nervous dog he once was. He loves hiking with his family, 
                    playing with the Johnson children, and has even become a therapy dog who visits local nursing homes.
                  </p>
                  
                  <p className="italic text-muted-foreground">
                    "Max has brought so much joy to our lives. We can't imagine our family without him." - The Johnson Family
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-2" />
                    <h2 className="text-2xl font-semibold">Bella's Second Chance</h2>
                  </div>
                  
                  <p className="mb-4">
                    Bella, a senior German Shepherd, was surrendered to a shelter when her elderly owner could no 
                    longer care for her. At 10 years old, her chances of adoption seemed slim until Michael and 
                    David Rodriguez specifically came looking for a senior dog to adopt.
                  </p>
                  
                  <p className="mb-4">
                    "We wanted to give a home to a dog that might be overlooked because of their age," explains 
                    Michael. "When we saw Bella's profile on PawFinder, we knew she was the one. The detailed 
                    description of her personality and needs helped us understand what to expect."
                  </p>
                  
                  <p className="mb-4">
                    Despite some initial health challenges, Bella has thrived in her new home. She enjoys short 
                    walks in the park, lounging in the sun, and has become the neighborhood's gentlest dog.
                  </p>
                  
                  <p className="italic text-muted-foreground">
                    "Adopting a senior pet has been one of the most rewarding experiences of our lives. Bella may 
                    have fewer years ahead, but we're making sure they're her best years." - Michael & David
                  </p>
                </div>
                
                <div className="order-1 md:order-2 relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/placeholder.svg?height=400&width=400" 
                    alt="Bella with her new family" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/placeholder.svg?height=400&width=400" 
                    alt="Charlie with his new family" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-2" />
                    <h2 className="text-2xl font-semibold">Charlie: From Fearful to Fearless</h2>
                  </div>
                  
                  <p className="mb-4">
                    Charlie, a Beagle mix, was rescued from a hoarding situation where he had minimal human 
                    contact. When he arrived at the shelter, he was terrified of people and would cower in 
                    the back of his kennel.
                  </p>
                  
                  <p className="mb-4">
                    Jennifer Taylor, a first-time dog owner, was initially hesitant about adopting a dog with 
                    behavioral challenges. "The PawFinder team was incredibly supportive," she recalls. "They 
                    provided training resources, connected me with a behaviorist, and checked in regularly 
                    during those first challenging months."
                  </p>
                  
                  <p className="mb-4">
                    With patience, training, and lots of love, Charlie gradually emerged from his shell. 
                    Today, he's a confident, playful dog who even participates in agility competitions.
                  </p>
                  
                  <p className="italic text-muted-foreground">
                    "Watching Charlie transform has been the most rewarding experience. He's taught me so much 
                    about patience and resilience." - Jennifer
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cats" className="mt-6">
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/placeholder.svg?height=400&width=400" 
                    alt="Luna with her new family" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-2" />
                    <h2 className="text-2xl font-semibold">Luna: The Perfect Companion</h2>
                  </div>
                  
                  <p className="mb-4">
                    Luna, a sleek black cat, was overlooked at the shelter for months due to the unfortunate 
                    superstition about black cats. Meanwhile, Emily Chen was looking for a quiet companion 
                    after moving to a new city for work.
                  </p>
                  
                  <p className="mb-4">
                    "When I saw Luna on PawFinder, I was drawn to her beautiful green eyes and the description 
                    of her calm, affectionate personality," Emily says. "The detailed profile helped me understand 
                    that she would be perfect for my apartment lifestyle."
                  </p>
                  
                  <p className="mb-4">
                    Luna adjusted quickly to her new home and has become Emily's constant companion. She greets 
                    Emily at the door each evening and has a special spot on the couch for their nightly reading sessions.
                  </p>
                  
                  <p className="italic text-muted-foreground">
                    "Luna has helped me feel less alone in a new city. She's not just a pet; she's family." - Emily
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-2" />
                    <h2 className="text-2xl font-semibold">Oliver & Milo: The Bonded Pair</h2>
                  </div>
                  
                  <p className="mb-4">
                    Oliver and Milo, two orange tabby brothers, were surrendered to the shelter when their 
                    owner passed away. At 5 years old, finding a home willing to adopt both cats seemed challenging.
                  </p>
                  
                  <p className="mb-4">
                    The Martinez family wasn't planning on adopting two cats, but after reading about the brothers' 
                 wasn't planning on adopting two cats, but after reading about the brothers' bond on PawFinder, they couldn't bear to separate them.

"We originally came to the shelter looking for one kitten," explains Maria Martinez. "But the adoption counselor told us about Oliver and Milo's story and suggested we meet them. They were so loving and clearly attached to each other."

The family decided to open their home to both cats, and it's been a perfect match. Oliver is the adventurous one who loves to explore, while Milo is more laid-back and enjoys cuddling on laps.

<p className="italic text-muted-foreground">
  "Having two cats is twice the love and only a little more work. We can't imagine our home without both of them now." - The Martinez Family
</p>
              </div>
              
              <div className="order-1 md:order-2 relative aspect-square w-full rounded-lg overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Oliver and Milo with their new family" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
              
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Cleo with her new family" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-2" />
                  <h2 className="text-2xl font-semibold">Cleo: The Unexpected Healer</h2>
                </div>
                
                <p className="mb-4">
                  Cleo, a gentle calico cat with special needs, was brought to the shelter after being found abandoned. Born with a mild neurological condition that affects her balance, she needed a patient, understanding home.
                </p>
                
                <p className="mb-4">
                  James Wilson, a veteran recovering from PTSD, wasn't looking for a special needs cat, but something about Cleo's profile on PawFinder spoke to him. "Her description mentioned how she never gave up despite her challenges. That resonated with me."
                </p>
                
                <p className="mb-4">
                  The bond between James and Cleo was immediate. Her calm presence has helped James through difficult days, and caring for her has given him a renewed sense of purpose.
                </p>
                
                <p className="italic text-muted-foreground">
                  "People think I rescued Cleo, but the truth is, she rescued me. We're helping each other heal." - James
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="other" className="mt-6">
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Hopper the rabbit with his new family" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-2" />
                  <h2 className="text-2xl font-semibold">Hopper: The Classroom Bunny</h2>
                </div>
                
                <p className="mb-4">
                  Hopper, a friendly Holland Lop rabbit, was surrendered to the shelter when his previous owners moved to an apartment that didn't allow pets. Meanwhile, Ms. Thompson, a third-grade teacher, was looking for a classroom pet to teach her students about responsibility.
                </p>
                
                <p className="mb-4">
                  "I was browsing PawFinder for a suitable classroom pet when I came across Hopper," Ms. Thompson recalls. "His profile mentioned that he was good with children and had a calm temperament, which was perfect for a classroom environment."
                </p>
                
                <p className="mb-4">
                  Hopper has become an integral part of the classroom, teaching the children about compassion, responsibility, and respect for animals. The students take turns caring for him under Ms. Thompson's supervision, and he's become the school's unofficial mascot.
                </p>
                
                <p className="italic text-muted-foreground">
                  "Hopper has been an incredible teaching tool. The children are learning valuable life lessons while giving him a loving home." - Ms. Thompson
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-2" />
                  <h2 className="text-2xl font-semibold">Sunny & Sky: The Inseparable Parakeets</h2>
                </div>
                
                <p className="mb-4">
                  Sunny and Sky, a pair of vibrant parakeets, were brought to the shelter when their elderly owner could no longer care for them. Having spent their lives together, these birds had formed a strong bond that the shelter was reluctant to break.
                </p>
                
                <p className="mb-4">
                  The Lee family, with two young children interested in birds, discovered the parakeets on PawFinder. "We were initially looking for just one bird, but after learning about Sunny and Sky's friendship, we knew we had to keep them together," says Mr. Lee.
                </p>
                
                <p className="mb-4">
                  The family built a spacious aviary in their living room, where Sunny and Sky can fly freely during supervised times. The children have learned about bird behavior and care, developing a deep appreciation for these intelligent creatures.
                </p>
                
                <p className="italic text-muted-foreground">
                  "Watching Sunny and Sky interact has been fascinating for our whole family. They've brought so much joy and learning into our home." - The Lee Family
                </p>
              </div>
              
              <div className="order-1 md:order-2 relative aspect-square w-full rounded-lg overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Sunny and Sky with their new family" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Share Your Success Story</h2>
        <p className="text-center mb-6">
          Have you adopted a pet through PawFinder? We'd love to hear your story and possibly feature it on our website!
        </p>
        <div className="flex justify-center">
          <Link href="/contact">
            <Button>Submit Your Story</Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Create Your Own Success Story</h2>
        <p className="text-lg mb-6">
          Every pet deserves a loving home. Browse our available pets and find your perfect match today.
        </p>
        <Link href="/">
          <Button size="lg">Find Your New Best Friend</Button>
        </Link>
      </div>
    </main>
  );
}

