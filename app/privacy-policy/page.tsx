import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - PawFinder",
  description: "Learn about how PawFinder collects, uses, and protects your personal information",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">Last Updated: April 1, 2025</p>

          <p>
            At PawFinder, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website, use our mobile application, or interact with our
            services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Personal Data</h3>
          <p>
            We may collect personal identification information from you in a variety of ways, including, but not limited
            to:
          </p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>When you register an account</li>
            <li>When you fill out a form</li>
            <li>When you submit an adoption application</li>
            <li>When you schedule a veterinary appointment</li>
            <li>When you make a purchase</li>
            <li>When you sign up for our newsletter</li>
            <li>When you respond to a survey</li>
            <li>When you participate in our community features</li>
          </ul>

          <p>
            The personal information we collect may include your name, email address, postal address, phone number,
            payment information, and demographic information. We may also collect information about your pets, including
            their species, breed, age, health information, and behavior characteristics.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Usage Data</h3>
          <p>We may also collect information about how you use our website and services, including:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Pages you visit</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
            <li>Device information</li>
            <li>Referring website addresses</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect from you for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>To provide, operate, and maintain our services</li>
            <li>To process adoption applications</li>
            <li>To schedule and manage veterinary appointments</li>
            <li>To process and fulfill orders and transactions</li>
            <li>To improve, personalize, and expand our services</li>
            <li>To understand how users use our services</li>
            <li>To develop new products, services, features, and functionality</li>
            <li>To communicate with you about our services, updates, and promotions</li>
            <li>To send administrative information, such as updates to our terms, conditions, and policies</li>
            <li>To respond to your comments, questions, and requests</li>
            <li>To provide customer support</li>
            <li>To protect, investigate, and deter against fraudulent, unauthorized, or illegal activity</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Disclosure of Your Information</h2>
          <p>We may share your information in the following situations:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>
              <strong>With Service Providers:</strong> We may share your information with third-party vendors, service
              providers, contractors, or agents who perform services for us or on our behalf, such as payment
              processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </li>
            <li>
              <strong>With Shelters and Veterinarians:</strong> When you apply to adopt a pet or schedule a veterinary
              appointment, we share necessary information with the relevant shelter or veterinary provider to facilitate
              these services.
            </li>
            <li>
              <strong>With Business Partners:</strong> We may share your information with our business partners to offer
              you certain products, services, or promotions.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
              your consent.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
              portion of our assets, your information may be transferred as part of that transaction.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do
              so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or
              legal process.
            </li>
            <li>
              <strong>To Protect Rights:</strong> We may disclose your information to protect the rights, property, or
              safety of PawFinder, our users, or others.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>The right to access the personal information we have about you</li>
            <li>The right to request that we correct or update your personal information</li>
            <li>The right to request that we delete your personal information</li>
            <li>The right to object to the processing of your personal information</li>
            <li>The right to request restrictions on how we use your personal information</li>
            <li>The right to data portability</li>
            <li>The right to opt-out of marketing communications</li>
          </ul>

          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, despite our safeguards and efforts to secure your
            information, no electronic transmission over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
            unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or
            modify your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website and mobile
            application to help customize and improve your experience. When you access our website, we may place small
            data files called cookies on your device. These cookies help us collect information about how you use our
            website, which pages you visit, and which features you use.
          </p>

          <p>
            You can choose to disable cookies through your browser settings, but this may affect your ability to access
            certain features of our website. For more information about our use of cookies and other tracking
            technologies, please see our
            <Link href="/cookie-policy" className="text-primary hover:underline">
              {" "}
              Cookie Policy
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites and applications that are not owned or controlled by
            PawFinder. We have no control over, and assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services. We strongly advise you to review the privacy policy of
            every site you visit.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and you are aware that your child has
            provided us with personal information, please contact us so that we can take necessary actions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to
            review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when
            they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>By email: privacy@pawfinder.com</li>
            <li>By phone: (123) 456-7890</li>
            <li>By mail: 123 Pet Street, Pawville, CA 90210</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

