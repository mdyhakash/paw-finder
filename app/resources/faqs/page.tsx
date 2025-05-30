import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - PawFinder",
  description: "Find answers to common questions about pet adoption, veterinary services, and more",
}

export default function FAQsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h1>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="adoption" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="adoption">Adoption</TabsTrigger>
            <TabsTrigger value="veterinary">Veterinary</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="adoption" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are the requirements to adopt a pet?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Our adoption requirements are designed to ensure pets go to loving, suitable homes. Basic
                    requirements include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Being at least 18 years old</li>
                    <li>Valid identification</li>
                    <li>Proof of residence (and landlord approval if renting)</li>
                    <li>Completion of our adoption application</li>
                    <li>Home check for certain animals or breeds</li>
                    <li>Payment of adoption fees</li>
                  </ul>
                  <p className="mt-2">
                    Additional requirements may apply depending on the specific pet and your living situation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How much does it cost to adopt a pet?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Adoption fees vary depending on the animal's species, age, and medical needs. General fee ranges:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dogs: $150-$350</li>
                    <li>Puppies: $250-$450</li>
                    <li>Cats: $75-$200</li>
                    <li>Kittens: $100-$250</li>
                    <li>Small animals (rabbits, guinea pigs): $25-$75</li>
                    <li>Birds: $20-$200 (depending on species)</li>
                  </ul>
                  <p className="mt-2">
                    These fees help cover the cost of vaccinations, spaying/neutering, microchipping, and other medical
                    care the animal received while in our care. Senior pets and animals with special needs often have
                    reduced adoption fees.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How long does the adoption process take?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    The adoption process typically takes 1-7 days from application to bringing your pet home. Simple,
                    straightforward adoptions can sometimes be completed in a single day, while others may take longer
                    if they require home checks, landlord verification, or if you're adopting a pet with special needs
                    that requires additional preparation. We strive to make the process as efficient as possible while
                    ensuring each pet goes to the right home.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I adopt if I rent my home?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, renters can adopt pets, but we require proof of landlord approval. This can be in the form of
                    your lease agreement showing pets are allowed or direct confirmation from your landlord. We also
                    recommend checking if your rental has breed or size restrictions before applying to adopt. This step
                    helps prevent the heartbreaking situation of having to return a pet due to housing issues.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What if the adoption doesn't work out?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    While we work hard to make good matches, we understand that sometimes adoptions don't work out
                    despite everyone's best intentions. If you need to return a pet, please contact us rather than
                    rehoming the pet yourself or surrendering to another shelter. We accept returns of our adopted
                    animals at any point in their lives, though we may ask for a surrender fee to help cover the costs
                    of their care. Before returning, we encourage you to speak with our behavior specialists who may be
                    able to help resolve issues you're experiencing.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Are the pets spayed/neutered and vaccinated?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, all of our adoptable dogs, cats, and rabbits are spayed or neutered before going to their new
                    homes, unless there is a medical reason to delay the procedure. All pets receive age-appropriate
                    vaccinations, deworming, and flea/tick treatment. Dogs and cats are microchipped and registered to
                    their new owners. You'll receive detailed medical records at the time of adoption, including
                    information about any future vaccinations or medical care needed.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Can I adopt if I have other pets?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Yes, having other pets doesn't disqualify you from adopting. However, we do consider how a new pet
                    will integrate with your existing pets. For dogs, we often recommend:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bringing your current dog(s) for a meet-and-greet with your potential new dog</li>
                    <li>Providing information about your current pets' temperaments and behaviors</li>
                    <li>Following our guidelines for proper introductions between new and existing pets</li>
                  </ul>
                  <p className="mt-2">
                    Our adoption counselors can help determine if a particular pet is likely to get along with your
                    existing pets and provide advice on successful introductions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Do you offer post-adoption support?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Yes, we provide comprehensive post-adoption support, including:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Behavior advice and resources</li>
                    <li>Training recommendations and referrals</li>
                    <li>Medical guidance and veterinary referrals</li>
                    <li>Follow-up check-ins to ensure the transition is going smoothly</li>
                    <li>Access to our adopter community for peer support</li>
                  </ul>
                  <p className="mt-2">
                    We're committed to the lifelong success of our adoptions and are always available to help with
                    questions or concerns that arise after you bring your new pet home.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="veterinary" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I schedule a veterinary appointment?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    You can schedule a veterinary appointment through our website by visiting the Veterinary Services
                    page, by calling our customer service line at (123) 456-7890, or by using our mobile app. We offer
                    both in-person and virtual appointments depending on your pet's needs. For urgent care, we recommend
                    calling directly as some of our partner clinics offer same-day appointments for emergencies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What veterinary services do you offer?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Our network of veterinary partners offers a comprehensive range of services, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Wellness exams and preventive care</li>
                    <li>Vaccinations and parasite prevention</li>
                    <li>Dental care and cleaning</li>
                    <li>Spay/neuter procedures</li>
                    <li>Diagnostic services (bloodwork, x-rays, ultrasound)</li>
                    <li>Surgery and specialized treatments</li>
                    <li>Geriatric care for senior pets</li>
                    <li>Behavioral consultations</li>
                    <li>Nutritional counseling</li>
                  </ul>
                  <p className="mt-2">
                    Services vary by location, so we recommend checking with your specific veterinary provider for a
                    complete list of available services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How much do veterinary services cost?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Veterinary costs vary depending on the service, location, and specific needs of your pet. General
                    price ranges include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Routine wellness exam: $50-$100</li>
                    <li>Vaccinations: $15-$30 per vaccine</li>
                    <li>Spay/neuter: $150-$400 (varies by species, size, and gender)</li>
                    <li>Dental cleaning: $200-$500</li>
                    <li>Diagnostic tests: $50-$300 depending on complexity</li>
                  </ul>
                  <p className="mt-2">
                    We believe in transparent pricing and will always provide estimates before performing services. We
                    also offer wellness plans that can help make preventive care more affordable through monthly
                    payments.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer emergency veterinary care?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    While most of our partner veterinarians operate during standard business hours, some locations offer
                    extended hours and emergency services. For after-hours emergencies, we maintain a network of
                    emergency veterinary hospitals that provide 24/7 care. Through our platform, you can quickly locate
                    the nearest emergency facility and even check current wait times. We recommend saving the emergency
                    contact information provided after booking your first appointment for quick access in urgent
                    situations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can I see the same veterinarian each visit?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we encourage building a relationship with a primary veterinarian who knows your pet's history.
                    When scheduling appointments, you can request a specific veterinarian. However, availability may
                    vary, especially for urgent appointments. If your preferred vet isn't available, you can choose to
                    wait for their next opening or see another qualified veterinarian in the practice. All of our
                    partner veterinarians have access to your pet's complete medical records, ensuring continuity of
                    care regardless of which doctor you see.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Do you accept pet insurance?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, our partner veterinarians accept most major pet insurance plans. We can provide itemized
                    receipts and the necessary documentation for you to submit claims to your insurance provider. Some
                    of our locations also offer direct billing to select insurance companies. We recommend checking with
                    your specific veterinary provider and insurance company for details about coverage and claim
                    procedures. If you don't have pet insurance, we also offer wellness plans and payment options to
                    help manage the cost of care.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="marketplace" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I place an order?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Placing an order on our marketplace is simple:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Browse or search for the products you need</li>
                    <li>Select the item and click "Add to Cart"</li>
                    <li>Adjust quantity if needed</li>
                    <li>Continue shopping or proceed to checkout</li>
                    <li>Enter your shipping and payment information</li>
                    <li>Review your order and submit</li>
                  </ol>
                  <p className="mt-2">
                    You'll receive an order confirmation email with tracking information once your order ships.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What are the shipping options and costs?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">We offer several shipping options:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Standard Shipping (3-5 business days): $5.99 or free on orders over $50</li>
                    <li>Expedited Shipping (2-3 business days): $9.99</li>
                    <li>Next Day Delivery (order by 2pm): $14.99</li>
                  </ul>
                  <p className="mt-2">
                    Shipping times are estimates and may vary based on your location and product availability. Some
                    oversized or heavy items may incur additional shipping charges, which will be clearly indicated
                    during checkout.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    We want you to be completely satisfied with your purchase. Our return policy includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>30-day return window for most unused, unopened items</li>
                    <li>Defective items can be returned within 90 days</li>
                    <li>Free return shipping for defective items</li>
                    <li>Store credit or refund to original payment method</li>
                  </ul>
                  <p className="mt-2">
                    Some items cannot be returned for health and safety reasons, including opened food, treats,
                    medications, and used bedding. These restrictions will be clearly noted in the product description.
                  </p>
                  <p className="mt-2">
                    To initiate a return, log into your account and select the order containing the item you wish to
                    return, or contact our customer service team.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Are the products on your marketplace high-quality?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we carefully vet all products and suppliers on our marketplace to ensure they meet our quality
                    standards. We prioritize products that are safe, durable, and provide good value. Many items are
                    tested by our team or reviewed by veterinarians before being added to our selection. We also monitor
                    customer reviews and promptly remove products that don't maintain our quality standards. If you ever
                    receive a product that doesn't meet your expectations for quality, please contact us, and we'll make
                    it right.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer auto-delivery for recurring purchases?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we offer an auto-delivery service for products you purchase regularly, such as food, litter,
                    medications, and supplements. You can select the frequency (every 2 weeks, monthly, etc.) and
                    quantity for each item. Auto-delivery orders receive a 5% discount and free shipping regardless of
                    order total. You can easily manage your subscriptions through your account, including changing
                    delivery dates, skipping deliveries, or canceling at any time with no penalties. We'll send a
                    reminder email before each order ships, giving you time to make any adjustments.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How do I find the right products for my pet?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">We offer several ways to find the perfect products for your specific pet:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Filter products by pet type, size, age, and specific needs</li>
                    <li>Add your pets to your profile for personalized recommendations</li>
                    <li>Read detailed product descriptions and specifications</li>
                    <li>Browse customer reviews from pet owners with similar pets</li>
                    <li>Use our "Ask a Vet" feature for product recommendations for specific health concerns</li>
                  </ul>
                  <p className="mt-2">
                    If you're still unsure which product is right for your pet, our customer service team includes pet
                    experts who can provide personalized recommendations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="account" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Creating a PawFinder account is quick and easy:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Click the "Sign Up" or "Create Account" button in the top right corner of the website</li>
                    <li>Enter your email address and create a password</li>
                    <li>Fill in your basic information (name, location, etc.)</li>
                    <li>Optionally, add information about your pets</li>
                    <li>Verify your email address by clicking the link in our confirmation email</li>
                  </ol>
                  <p className="mt-2">
                    You can also sign up using your Google, Facebook, or Apple account for faster registration.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What are the benefits of creating an account?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Having a PawFinder account offers numerous benefits:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Save favorite pets and products</li>
                    <li>Receive personalized pet and product recommendations</li>
                    <li>Track adoption applications and status</li>
                    <li>Manage veterinary appointments</li>
                    <li>View order history and easily reorder products</li>
                    <li>Access exclusive promotions and discounts</li>
                    <li>Store payment and shipping information for faster checkout</li>
                    <li>Receive important reminders for pet care (vaccinations, preventatives, etc.)</li>
                    <li>Connect with other pet owners in our community</li>
                  </ul>
                  <p className="mt-2">
                    All these features are designed to make pet ownership easier and more enjoyable.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">If you've forgotten your password, you can reset it by following these steps:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Click "Sign In" in the top right corner of the website</li>
                    <li>Select "Forgot Password" below the sign-in form</li>
                    <li>Enter the email address associated with your account</li>
                    <li>Check your email for a password reset link (check spam/junk folders if not found)</li>
                    <li>Click the link and follow the instructions to create a new password</li>
                  </ol>
                  <p className="mt-2">
                    The password reset link expires after 24 hours for security reasons. If you don't reset your
                    password within that timeframe, you'll need to request a new link.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How do I update my account information?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">You can update your account information by following these steps:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Sign in to your account</li>
                    <li>Click on your profile icon in the top right corner</li>
                    <li>Select "Account Settings" from the dropdown menu</li>
                    <li>From here, you can update various sections:</li>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>Personal information (name, email, phone number)</li>
                      <li>Address and contact details</li>
                      <li>Password and security settings</li>
                      <li>Communication preferences</li>
                      <li>Payment methods</li>
                      <li>Pet profiles</li>
                    </ul>
                  </ol>
                  <p className="mt-2">
                    Changes to your account information are saved automatically. For security reasons, changing your
                    email address or password may require verification.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Is my personal information secure?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we take data security and privacy very seriously. We use industry-standard encryption and
                    security measures to protect your personal information. We never sell your data to third parties,
                    and we only share information with partners (like veterinarians or shelters) when necessary to
                    provide you with services you've requested. Our full privacy policy details how we collect, use, and
                    protect your information. You can manage your privacy settings and communication preferences in your
                    account settings at any time.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    We're sorry to see you go! To delete your account, please sign in and go to Account Settings &gt;
                    Privacy &amp; Security &gt; Delete Account. You'll need to confirm your password and the reason for
                    leaving (optional but helpful for us to improve). Please note that account deletion is permanent and
                    willremove all your saved information, including pet profiles, favorites, and order history. If you
                    have active orders or adoption applications, we recommend resolving these before deleting your
                    account. If you're experiencing issues with our service, we'd appreciate the opportunity to address
                    them before you leave – please contact our customer support team.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Still Have Questions?</CardTitle>
              <CardDescription>Our customer support team is here to help.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you couldn't find the answer you were looking for, please don't hesitate to reach out to us directly.
              </p>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Helpful Resources</CardTitle>
              <CardDescription>Explore our other resource pages for more information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/resources/pet-care-tips" className="text-primary hover:underline block">
                Pet Care Tips
              </Link>
              <Link href="/resources/adoption-process" className="text-primary hover:underline block">
                Adoption Process
              </Link>
              <Link href="/resources/success-stories" className="text-primary hover:underline block">
                Success Stories
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
