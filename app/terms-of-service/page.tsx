import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - PawFinder",
  description: "The terms and conditions governing your use of PawFinder's services",
}

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">Last Updated: April 1, 2025</p>

          <p>
            Welcome to PawFinder. These Terms of Service ("Terms") govern your use of our website, mobile application,
            and services (collectively, the "Services") operated by PawFinder ("we," "us," or "our"). By accessing or
            using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you
            may not access the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Services, you confirm that you are at least 18 years of age and that you have
            read, understood, and agree to be bound by these Terms. If you are using the Services on behalf of a
            company, organization, or other entity, you represent that you have the authority to bind that entity to
            these Terms, in which case "you" or "your" shall refer to such entity.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Account Registration</h2>
          <p>
            To access certain features of our Services, you may be required to register for an account. You agree to
            provide accurate, current, and complete information during the registration process and to update such
            information to keep it accurate, current, and complete. You are responsible for safeguarding your password
            and for all activities that occur under your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Pet Adoption Services</h2>
          <p>
            PawFinder facilitates pet adoptions by connecting potential adopters with shelters, rescues, and other pet
            providers. We do not own or operate shelters or directly handle adoptions. The adoption process,
            requirements, and fees are determined by the individual shelters and rescues. We make no guarantees
            regarding the availability, health, temperament, or suitability of any pet listed on our platform.
          </p>

          <p>By submitting an adoption application through our Services, you agree to:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>Provide accurate and truthful information</li>
            <li>Comply with the adoption policies and procedures of the relevant shelter or rescue</li>
            <li>
              Accept that the shelter or rescue has the right to approve or deny your application based on their
              criteria
            </li>
            <li>Understand that we are not responsible for the outcome of any adoption application</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Veterinary Services</h2>
          <p>
            PawFinder connects pet owners with veterinary service providers. We do not provide veterinary services
            directly. The veterinarians and clinics available through our platform are independent professionals who are
            solely responsible for the services they provide. We make no representations or warranties regarding the
            quality, accuracy, or reliability of any veterinary services obtained through our platform.
          </p>

          <p>By scheduling a veterinary appointment through our Services, you agree to:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>Provide accurate information about your pet's health and medical history</li>
            <li>Comply with the policies and procedures of the veterinary provider</li>
            <li>Pay all fees associated with the veterinary services</li>
            <li>
              Understand that we are not responsible for the diagnosis, treatment, or outcome of any veterinary services
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Marketplace</h2>
          <p>
            PawFinder offers a marketplace where users can purchase pet-related products. When making a purchase through
            our marketplace, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>Provide accurate payment and shipping information</li>
            <li>
              Pay all fees associated with your purchase, including product costs, shipping fees, and applicable taxes
            </li>
            <li>Accept our return and refund policies as outlined in our marketplace guidelines</li>
          </ul>

          <p>
            We strive to ensure that product descriptions, pricing, and availability information are accurate. However,
            we do not guarantee that all information is error-free, and we reserve the right to correct any errors and
            to change or update information at any time without prior notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Content</h2>
          <p>
            Our Services may allow you to post, link, store, share, or otherwise make available certain information,
            text, graphics, videos, or other material ("User Content"). You are solely responsible for the User Content
            that you post, and you agree not to post User Content that:
          </p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>
              Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or invasive of
              another's privacy
            </li>
            <li>Infringes on any patent, trademark, trade secret, copyright, or other intellectual property rights</li>
            <li>
              Contains software viruses or any other code designed to interrupt, destroy, or limit the functionality of
              any computer software or hardware
            </li>
            <li>
              Impersonates any person or entity or falsely states or misrepresents your affiliation with a person or
              entity
            </li>
            <li>
              Contains unsolicited or unauthorized advertising, promotional materials, spam, chain letters, or any other
              form of solicitation
            </li>
          </ul>

          <p>
            By posting User Content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide
            license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly
            perform, and otherwise exploit in any manner such User Content in all formats and distribution channels now
            known or hereafter devised, without further notice to or consent from you, and without the requirement of
            payment to you or any other person or entity.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
          <p>
            The Services and their original content (excluding User Content), features, and functionality are and will
            remain the exclusive property of PawFinder and its licensors. The Services are protected by copyright,
            trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress
            may not be used in connection with any product or service without the prior written consent of PawFinder.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
          <p>
            In no event shall PawFinder, its directors, employees, partners, agents, suppliers, or affiliates be liable
            for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
            loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>Your access to or use of or inability to access or use the Services</li>
            <li>Any conduct or content of any third party on the Services</li>
            <li>Any content obtained from the Services</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            <li>The adoption of any pet through our Services</li>
            <li>Any veterinary services obtained through our Services</li>
            <li>Any products purchased through our marketplace</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Disclaimer</h2>
          <p>
            Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE"
            basis. The Services are provided without warranties of any kind, whether express or implied, including, but
            not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement,
            or course of performance.
          </p>

          <p>PawFinder does not warrant that:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>The Services will function uninterrupted, secure, or available at any particular time or location</li>
            <li>Any errors or defects will be corrected</li>
            <li>The Services are free of viruses or other harmful components</li>
            <li>The results of using the Services will meet your requirements</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of California, without
            regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or
            unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
            material change will be determined at our sole discretion. By continuing to access or use our Services after
            any revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="list-disc pl-5 space-y-1 my-4">
            <li>By email: legal@pawfinder.com</li>
            <li>By phone: (123) 456-7890</li>
            <li>By mail: 123 Pet Street, Pawville, CA 90210</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
