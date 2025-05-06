// Pet types
export const petTypes = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Small Pet"];

// Breeds
export const breeds = [
  { id: 1, name: "Labrador Retriever", petType: "Dog" },
  { id: 2, name: "German Shepherd", petType: "Dog" },
  { id: 3, name: "Golden Retriever", petType: "Dog" },
  { id: 4, name: "French Bulldog", petType: "Dog" },
  { id: 5, name: "Beagle", petType: "Dog" },
  { id: 6, name: "Poodle", petType: "Dog" },
  { id: 7, name: "Siamese", petType: "Cat" },
  { id: 8, name: "Persian", petType: "Cat" },
  { id: 9, name: "Maine Coon", petType: "Cat" },
  { id: 10, name: "Ragdoll", petType: "Cat" },
  { id: 11, name: "Bengal", petType: "Cat" },
  { id: 12, name: "Sphynx", petType: "Cat" },
  { id: 13, name: "Parakeet", petType: "Bird" },
  { id: 14, name: "Cockatiel", petType: "Bird" },
  { id: 15, name: "Canary", petType: "Bird" },
  { id: 16, name: "Holland Lop", petType: "Rabbit" },
  { id: 17, name: "Netherland Dwarf", petType: "Rabbit" },
  { id: 18, name: "Goldfish", petType: "Fish" },
  { id: 19, name: "Betta", petType: "Fish" },
  { id: 20, name: "Hamster", petType: "Small Pet" },
  { id: 21, name: "Guinea Pig", petType: "Small Pet" },
];

// Pets data
const pets = [
  {
    id: "1",
    name: "Max",
    type: "Dog",
    breed: "Labrador Retriever",
    age: 2,
    gender: "Male",
    size: "Large",
    color: "Golden",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    description:
      "Max is a friendly and energetic Labrador Retriever who loves to play fetch and go for long walks. He is great with children and other pets.",
    personality:
      "Friendly, energetic, and loves to play. Max is a quick learner and already knows several commands.",
    location: "San Francisco, CA",
    address: "123 Pet Street, San Francisco, CA 94101",

    image: "https://i.ibb.co.com/hNcW9ch/Labrador-Retriever3.jpg",
    additionalImages: [
      "https://i.ibb.co.com/3YsGrdrq/Labrador-Retriever2.jpg",
      "https://i.ibb.co.com/hNcW9ch/Labrador-Retriever3.jpg",
      "https://i.ibb.co.com/nq7k3G7v/Labrador-Retriever4.jpg",
      "https://i.ibb.co.com/rG3NdhYF/Labrador-Retriever5.jpg",
    ],
  },
  {
    id: "2",
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: 1,
    gender: "Female",
    size: "Medium",
    color: "Cream with brown points",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    description:
      "Luna is a beautiful Siamese cat with striking blue eyes. She is playful and affectionate, and loves to curl up in your lap for a nap.",
    personality:
      "Curious, vocal, and affectionate. Luna enjoys interactive toys and being the center of attention.",
    location: "Los Angeles, CA",
    address: "456 Feline Avenue, Los Angeles, CA 90001",
    image: "https://i.ibb.co.com/Wq828qC/Siamese.jpg",
    additionalImages: [
      "https://i.ibb.co.com/dwMyB4n1/Siamese1.jpg",
      "https://i.ibb.co.com/ZzWg87HG/Siamese2.jpg",
      "https://i.ibb.co.com/6JN6FHjm/Siamese3.jpg",
    ],
  },
  {
    id: "3",
    name: "Charlie",
    type: "Dog",
    breed: "Beagle",
    age: 3,
    gender: "Male",
    size: "Medium",
    color: "Tricolor",
    vaccinated: true,
    neutered: false,
    goodWithKids: true,
    description:
      "Charlie is a sweet Beagle with a great nose for adventure. He loves to explore and follow scents, but also enjoys cuddling on the couch.",
    personality:
      "Curious, friendly, and food-motivated. Charlie has a typical Beagle howl and will let you know when he's excited.",
    location: "New York, NY",
    address: "789 Bark Street, New York, NY 10001",
    image: "https://i.ibb.co.com/jkhVknRb/Beagle.jpg",
    additionalImages: [
      "https://i.ibb.co.com/xSGzWbS1/Beagle1.jpg",
      "https://i.ibb.co.com/jPDcmVnV/Beagle2.jpg",
      "https://i.ibb.co.com/jkhVknRb/Beagle.jpg",
      "https://i.ibb.co.com/xSGzWbS1/Beagle1.jpg",
    ],
  },
  {
    id: "4",
    name: "Bella",
    type: "Cat",
    breed: "Maine Coon",
    age: 4,
    gender: "Female",
    size: "Large",
    color: "Brown Tabby",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    description:
      "Bella is a majestic Maine Coon with a luxurious coat. She is gentle and patient, making her great with children and other pets.",
    personality:
      "Gentle, patient, and intelligent. Bella is not overly demanding of attention but enjoys being near her people.",
    location: "Chicago, IL",
    address: "101 Purr Lane, Chicago, IL 60601",
    image: "https://i.ibb.co.com/MyWXg6Nc/Maine-Coon.jpg",
    additionalImages: [
      "https://i.ibb.co.com/g0hMSTx/Maine-Coon1.jpg",
      "https://i.ibb.co.com/Ps2ftTBc/Maine-Coon2.jpg",
      "https://i.ibb.co.com/Z6ZJt19p/Maine-Coon3.jpg",
    ],
  },
  {
    id: "5",
    name: "Rocky",
    type: "Dog",
    breed: "German Shepherd",
    age: 5,
    gender: "Male",
    size: "Large",
    color: "Black and Tan",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    description:
      "Rocky is a loyal and intelligent German Shepherd. He is well-trained and would make an excellent companion for an active family.",
    personality:
      "Loyal, intelligent, and protective. Rocky is alert and quick to learn new commands.",
    location: "Seattle, WA",
    address: "202 Canine Court, Seattle, WA 98101",
    image: "https://i.ibb.co.com/R4S8pzYT/German-Shepherd.jpg",
    additionalImages: [
      "https://i.ibb.co.com/Z6XMNRgK/German-Shepherd1.jpg",
      "https://i.ibb.co.com/zHxWPNWC/German-Shepherd2.jpg",
      "https://i.ibb.co.com/R4S8pzYT/German-Shepherd.jpg",
      "https://i.ibb.co.com/Z6XMNRgK/German-Shepherd1.jpg",
    ],
  },
  {
    id: "6",
    name: "Oliver",
    type: "Cat",
    breed: "Ragdoll",
    age: 2,
    gender: "Male",
    size: "Large",
    color: "Seal Point",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    description:
      "Oliver is a stunning Ragdoll with captivating blue eyes. He is known for going limp when picked up, true to his breed's name.",
    personality:
      "Calm, affectionate, and docile. Oliver loves to be held and will follow you from room to room.",
    location: "Austin, TX",
    address: "303 Whisker Way, Austin, TX 78701",
    image: "https://i.ibb.co.com/TD1fdSgX/Ragdoll.jpg",
    additionalImages: [
      "https://i.ibb.co.com/0ybKyYLn/Ragdoll1.jpg",
      "https://i.ibb.co.com/SXyTKpck/Ragdoll2.jpg",
      "https://i.ibb.co.com/1YHL9h5p/Ragdoll3.jpg",
    ],
  },
  {
    id: "7",
    name: "Daisy",
    type: "Dog",
    breed: "Golden Retriever",
    age: 1,
    gender: "Female",
    size: "Large",
    color: "Golden",
    vaccinated: true,
    neutered: false,
    goodWithKids: true,
    description:
      "Daisy is a beautiful Golden Retriever puppy full of love and energy. She is eager to please and would thrive in an active home.",
    personality:
      "Playful, friendly, and eager to please. Daisy loves water and would enjoy a home with a yard.",
    location: "Denver, CO",
    address: "404 Paw Path, Denver, CO 80201",
    image: "https://i.ibb.co.com/2YPpdkhK/Golden-Retriever.jpg",
    additionalImages: [
      "https://i.ibb.co.com/5h8MfqYt/Golden-Retriever1.jpg",
      "https://i.ibb.co.com/vCcc3V9n/Golden-Retriever2.jpg",
      "https://i.ibb.co.com/99mhCBvX/Golden-Retriever3.jpg",
    ],
  },
  {
    id: "8",
    name: "Milo",
    type: "Cat",
    breed: "Bengal",
    age: 3,
    gender: "Male",
    size: "Medium",
    color: "Spotted Rosetted",
    vaccinated: true,
    neutered: true,
    goodWithKids: false,
    description:
      "Milo is a striking Bengal with a wild appearance but a domestic heart. He is very active and needs plenty of stimulation.",
    personality:
      "Active, intelligent, and curious. Milo enjoys climbing and interactive toys that challenge his mind.",
    location: "Portland, OR",
    address: "505 Meow Street, Portland, OR 97201",
    image: "https://i.ibb.co.com/dwVQV561/Bengal.jpg",
    additionalImages: [
      "https://i.ibb.co.com/LdkgjCXv/Bengal1.jpg",
      "https://i.ibb.co.com/hxYms2m8/Bengal2.jpg",
      "https://i.ibb.co.com/7NKZFbQW/Bengal3.jpg",
      "https://i.ibb.co.com/fzXk5Y5B/Bengal4.jpg",
    ],
  },
];

// Veterinarians data
const vets = [
  {
    id: "101",
    name: "Dr. Sarah Johnson",
    clinic: "Pawsome Veterinary Clinic",
    specialties: ["general", "surgery", "dental"],
    rating: 4.9,
    reviewCount: 124,
    address: "123 Vet Street, San Francisco, CA 94101",
    location: "San Francisco, CA",
    phone: "(415) 555-1234",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Dr. Johnson is a highly skilled veterinarian with over 10 years of experience in small animal medicine. She specializes in dental procedures and soft tissue surgery.",
    nextAvailable: "Today",
  },
  {
    id: "102",
    name: "Dr. Michael Chen",
    clinic: "Happy Paws Animal Hospital",
    specialties: ["general", "emergency", "dermatology"],
    rating: 4.7,
    reviewCount: 98,
    address: "456 Pet Avenue, Los Angeles, CA 90001",
    location: "Los Angeles, CA",
    phone: "(213) 555-5678",
    hours: "Mon-Sun: 24 Hours (Emergency)",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Experienced veterinarian providing comprehensive care for all types of pets.",
    nextAvailable: "Tomorrow",
  },
  {
    id: "103",
    name: "Dr. Emily Rodriguez",
    clinic: "Furry Friends Veterinary Care",
    specialties: ["general", "dental", "dermatology"],
    rating: 4.8,
    reviewCount: 112,
    address: "789 Animal Lane, New York, NY 10001",
    location: "New York, NY",
    phone: "(212) 555-9012",
    hours: "Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-4PM",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Experienced veterinarian providing comprehensive care for all types of pets.",
    nextAvailable: "Tomorrow",
  },
  {
    id: "104",
    name: "Dr. James Wilson",
    clinic: "Healthy Pets Clinic",
    specialties: ["general", "surgery", "emergency"],
    rating: 4.6,
    reviewCount: 87,
    address: "101 Vet Circle, Chicago, IL 60601",
    location: "Chicago, IL",
    phone: "(312) 555-3456",
    hours: "Mon-Fri: 8AM-8PM, Sat: 9AM-5PM",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Experienced veterinarian providing comprehensive care for all types of pets.",
    nextAvailable: "Tomorrow",
  },
];

// Products data
const products = [
  {
    id: "11111",
    name: "Premium Dog Food",
    category: "food",
    petType: "dog",
    brand: "Healthy Paws",
    price: 49.99,
    discountPrice: 59.99,
    description:
      "High-quality, grain-free dog food made with real chicken and vegetables. Provides complete nutrition for dogs of all ages and breeds.",
    weight: "15 lbs",
    dimensions: '24" x 16" x 4"',
    material: "N/A",
    image: "https://i.ibb.co.com/zHDgDR5h/Pet-food-bowl-1.jpg",
    inStock: true,
    rating: 4.8,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "John D.",
        rating: 5,
        date: "2023-03-15",
        comment:
          "My dog loves this food! His coat is shinier and he has more energy.",
      },
      {
        name: "Sarah M.",
        rating: 4,
        date: "2023-02-28",
        comment: "Good quality food, but a bit pricey.",
      },
    ],
  },
  {
    id: "2222",
    name: "Interactive Cat Toy",
    category: "toys",
    petType: "cat",
    brand: "Playful Pets",
    price: 24.99,
    description:
      "Electronic interactive toy that keeps your cat entertained for hours. Features unpredictable movements and light patterns.",
    weight: "0.5 lbs",
    dimensions: '8" x 8" x 3"',
    material: "Plastic, Feathers",
    image: "/placeholder.svg?height=400&width=400",
    inStock: true,
    rating: 4.5,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "Emily R.",
        rating: 5,
        date: "2023-04-02",
        comment: "My cat is obsessed with this toy! Best purchase ever.",
      },
      {
        name: "Michael T.",
        rating: 3,
        date: "2023-03-20",
        comment: "It's good but the battery doesn't last long.",
      },
    ],
  },
  {
    id: "3333",
    name: "Adjustable Dog Collar",
    category: "accessories",
    petType: "dog",
    brand: "Paw Couture",
    price: 18.99,
    description:
      "Durable, adjustable collar made from high-quality nylon. Available in multiple colors and sizes to fit any dog.",
    weight: "0.2 lbs",
    dimensions: 'S: 8-12", M: 12-18", L: 18-24"',
    material: "Nylon, Metal Buckle",
    image: "/placeholder.svg?height=400&width=400",
    inStock: true,
    rating: 4.5,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "David L.",
        rating: 5,
        date: "2023-03-10",
        comment:
          "Very sturdy and the color is vibrant. Perfect fit for my Lab.",
      },
      {
        name: "Jessica K.",
        rating: 4,
        date: "2023-02-15",
        comment: "Good quality but runs a bit small.",
      },
    ],
  },
  {
    id: "4444",
    name: "Cat Scratching Post",
    category: "accessories",
    petType: "cat",
    brand: "Kitty Kingdom",
    price: 39.99,
    discountPrice: 49.99,
    description:
      "Tall, sturdy scratching post covered in natural sisal rope. Helps protect your furniture while providing exercise for your cat.",
    weight: "8 lbs",
    dimensions: '16" x 16" x 32"',
    material: "Sisal, Plush, Wood",
    image: "/placeholder.svg?height=400&width=400",
    inStock: false,
    rating: 4.6,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "Amanda P.",
        rating: 5,
        date: "2023-04-05",
        comment:
          "My cats love this! It's tall enough for them to fully stretch.",
      },
      {
        name: "Robert J.",
        rating: 4,
        date: "2023-03-22",
        comment: "Good quality, but assembly was a bit tricky.",
      },
    ],
  },
  {
    id: "5555",
    name: "Dog Dental Chews",
    category: "health",
    petType: "dog",
    brand: "Healthy Chomps",
    price: 29.99,
    description:
      "Dental chews that help reduce plaque and tartar while freshening your dog's breath. Made with natural ingredients.",
    weight: "12 oz",
    dimensions: '6" x 4" x 8"',
    material: "Natural Ingredients",
    image: "/placeholder.svg?height=400&width=400",
    inStock: true,
    rating: 4.5,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "Thomas B.",
        rating: 5,
        date: "2023-03-28",
        comment: "These really work! My dog's breath is much better.",
      },
      {
        name: "Laura M.",
        rating: 3,
        date: "2023-03-05",
        comment: "My dog likes them, but they don't last very long.",
      },
    ],
  },
  {
    id: "6666",
    name: "Bird Cage Deluxe",
    category: "accessories",
    petType: "bird",
    brand: "Feathered Friends",
    price: 89.99,
    discountPrice: 109.99,
    description:
      "Spacious cage with multiple perches, feeding stations, and toys. Perfect for small to medium-sized birds.",
    weight: "15 lbs",
    dimensions: '24" x 18" x 36"',
    material: "Metal, Plastic",
    image: "/placeholder.svg?height=400&width=400",
    inStock: true,
    rating: 4.5,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "Karen L.",
        rating: 5,
        date: "2023-04-10",
        comment: "Excellent cage! Easy to clean and my parakeets love it.",
      },
      {
        name: "Steven R.",
        rating: 4,
        date: "2023-03-15",
        comment: "Good quality but assembly took longer than expected.",
      },
    ],
  },
  {
    id: "7777",
    name: "Fish Tank Filter",
    category: "accessories",
    petType: "fish",
    brand: "Aqua Pure",
    price: 34.99,
    description:
      "High-efficiency filter system for aquariums up to 30 gallons. Keeps water clear and healthy for your fish.",
    weight: "1.5 lbs",
    dimensions: '6" x 4" x 8"',
    material: "Plastic, Carbon Filter",
    image: "/placeholder.svg?height=400&width=400",
    inStock: true,
    rating: 4.5,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "Nancy T.",
        rating: 5,
        date: "2023-04-08",
        comment: "Works great! Water has never been clearer.",
      },
      {
        name: "Paul S.",
        rating: 4,
        date: "2023-03-20",
        comment: "Good filter, but a bit noisy.",
      },
    ],
  },
  {
    id: "8888",
    name: "Small Pet Bedding",
    category: "accessories",
    petType: "small-pet",
    brand: "Cozy Critters",
    price: 19.99,
    description:
      "Soft, absorbent bedding made from recycled paper. Dust-free and perfect for hamsters, guinea pigs, and other small pets.",
    weight: "5 lbs",
    dimensions: '12" x 8" x 16"',
    material: "Recycled Paper",
    image: "/placeholder.svg?height=400&width=400",
    inStock: true,
    rating: 4.5,
    additionalImages: [
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    reviews: [
      {
        name: "Melissa C.",
        rating: 5,
        date: "2023-04-12",
        comment:
          "My guinea pigs love this bedding! It's soft and controls odor well.",
      },
      {
        name: "Brian K.",
        rating: 4,
        date: "2023-03-25",
        comment: "Good quality and lasts a long time.",
      },
    ],
  },
];

// Export functions to get data
export function getPets() {
  return pets;
}

export function getPetById(id: string) {
  return pets.find((pet) => pet.id === id);
}

export function getVets() {
  return vets;
}

export function getVetById(id: string) {
  return vets.find((vet) => vet.id === id);
}

export function getProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
