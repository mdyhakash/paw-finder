// app/success-stories/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Success Stories - PawFinder",
  description: "Heartwarming stories of pets who found their forever homes through PawFinder",
};

export default function SuccessStoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Success Stories</h1>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg">
            Every adoption is a story of hope, love, and new beginnings. Here are just a few of the many
            happy endings that have been made possible through PawFinder and our amazing adopters.
          </p>
        </div>

        <Tabs defaultValue="dogs" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="dogs">Dogs</TabsTrigger>
            <TabsTrigger value="cats">Cats</TabsTrigger>
            <TabsTrigger value="other">Other Pets</TabsTrigger>
          </TabsList>

          {/* Dogs Tab */}
          <TabsContent value="dogs" className="mt-6 space-y-12">
            {/* Max */}
            <StoryCard
              imageAlt="Max with his new family"
              imageSrc="/placeholder.svg?height=400&width=400"
              title="Max's New Beginning"
              paragraphs={[
                "Max, a 3-year-old Labrador mix, spent over a year in shelters before finding his forever home with the Johnson family. Abandoned as a puppy, Max had developed trust issues that made him overlooked by many potential adopters.",
                "“When we met Max, we saw past his initial shyness and recognized a sweet, loyal dog who just needed patience and love,” says Sarah Johnson. “The adoption counselors at PawFinder were amazing at matching us with a dog that fit our family perfectly.”",
                "Today, Max is unrecognizable from the nervous dog he once was. He loves hiking with his family, playing with the Johnson children, and has even become a therapy dog who visits local nursing homes.",
              ]}
              quote="“Max has brought so much joy to our lives. We can't imagine our family without him.” – The Johnson Family"
              reverse={false}
            />

            {/* Bella */}
            <StoryCard
              imageAlt="Bella with her new family"
              imageSrc="/placeholder.svg?height=400&width=400"
              title="Bella's Second Chance"
              paragraphs={[
                "Bella, a senior German Shepherd, was surrendered to a shelter when her elderly owner could no longer care for her. At 10 years old, her chances of adoption seemed slim until Michael and David Rodriguez specifically came looking for a senior dog to adopt.",
                "“We wanted to give a home to a dog that might be overlooked because of their age,” explains Michael. “When we saw Bella's profile on PawFinder, we knew she was the one. The detailed description of her personality and needs helped us understand what to expect.”",
                "Despite some initial health challenges, Bella has thrived in her new home. She enjoys short walks in the park, lounging in the sun, and has become the neighborhood's gentlest dog.",
              ]}
              quote="“Adopting a senior pet has been one of the most rewarding experiences of our lives.” – Michael & David"
              reverse={true}
            />

            {/* Charlie */}
            <StoryCard
              imageAlt="Charlie with his new family"
              imageSrc="/placeholder.svg?height=400&width=400"
              title="Charlie: From Fearful to Fearless"
              paragraphs={[
                "Charlie, a Beagle mix, was rescued from a hoarding situation where he had minimal human contact. When he arrived at the shelter, he was terrified of people and would cower in the back of his kennel.",
                "Jennifer Taylor, a first-time dog owner, was initially hesitant about adopting a dog with behavioral challenges. “The PawFinder team was incredibly supportive,” she recalls. “They provided training resources, connected me with a behaviorist, and checked in regularly during those first challenging months.”",
                "With patience, training, and lots of love, Charlie gradually emerged from his shell. Today, he's a confident, playful dog who even participates in agility competitions.",
              ]}
              quote="“Watching Charlie transform has been the most rewarding experience.” – Jennifer"
              reverse={false}
            />
          </TabsContent>

          {/* Cats Tab */}
          <TabsContent value="cats" className="mt-6 space-y-12">
            <StoryCard
              imageAlt="Luna with her new family"
              imageSrc="/placeholder.svg?height=400&width=400"
              title="Luna: The Perfect Companion"
              paragraphs={[
                "Luna, a sleek black cat, was overlooked at the shelter for months due to the unfortunate superstition about black cats. Meanwhile, Emily Chen was looking for a quiet companion after moving to a new city for work.",
                "“When I saw Luna on PawFinder, I was drawn to her beautiful green eyes and the description of her calm, affectionate personality,” Emily says. “The detailed profile helped me understand that she would be perfect for my apartment lifestyle.”",
                "Luna adjusted quickly to her new home and has become Emily's constant companion. She greets Emily at the door each evening and has a special spot on the couch for their nightly reading sessions.",
              ]}
              quote="“Luna has helped me feel at home in a new city. She's the best roommate I could ask for.” – Emily"
              reverse={false}
            />
          </TabsContent>

          {/* Other Pets Tab */}
          <TabsContent value="other" className="mt-6 space-y-12">
            <StoryCard
              imageAlt="Nibbles the rabbit with new family"
              imageSrc="/placeholder.svg?height=400&width=400"
              title="Nibbles the Rabbit Finds a Garden Paradise"
              paragraphs={[
                "Nibbles, a Holland Lop rabbit, was rescued from an abandoned hutch in the countryside. He was malnourished and scared of human contact.",
                "The Tran family, who had a large backyard and experience with rabbits, adopted Nibbles and gave him a safe, enriching space to thrive.",
                "Today, Nibbles enjoys exploring the garden, munching on fresh greens, and even hops onto laps for cuddles.",
              ]}
              quote="“We never thought a rabbit could be so affectionate. Nibbles is a joy!” – The Tran Family"
              reverse={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

type StoryCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
  quote: string;
  reverse?: boolean;
};

function StoryCard({ imageSrc, imageAlt, title, paragraphs, quote, reverse = false }: StoryCardProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className={`relative aspect-square w-full rounded-lg overflow-hidden ${reverse ? "order-1 md:order-2" : ""}`}>
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      <div className={reverse ? "order-2 md:order-1" : ""}>
        <div className="flex items-center mb-4">
          <Quote className="h-8 w-8 text-primary mr-2" />
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>

        {paragraphs.map((para, idx) => (
          <p className="mb-4" key={idx}>
            {para}
          </p>
        ))}

        <p className="italic text-muted-foreground">{quote}</p>
      </div>
    </div>
  );
}
