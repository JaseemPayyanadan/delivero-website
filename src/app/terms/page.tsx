import Section from "@/components/Section";

export const metadata = { title: "Terms of Service" };

const APP_NAME = "Delivero";
const SUPPORT_EMAIL = "support@delivero.app";
const EFFECTIVE_DATE = "May 5, 2026";

export default function TermsPage() {
  return (
    <Section title="Terms of Service" subtitle={`Effective date: ${EFFECTIVE_DATE}`}>
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/8 bg-surface p-6 text-sm leading-relaxed text-muted md:p-10">
        <p className="text-balance">
          These Terms of Service (“Terms”) govern access to and use of <span className="font-semibold text-foreground">{APP_NAME}</span>{" "}
          (the “Service”). By using the Service, you agree to these Terms.
        </p>

        <div className="mt-8 space-y-8">
          <section>
            <h3 className="text-base font-semibold text-foreground">1. Who the Service is for</h3>
            <p className="mt-3">
              {APP_NAME} is a business application intended for delivery-based businesses (including owners/managers and delivery
              staff) authorized by an organization. Your organization may provide your account and set permissions.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">2. Accounts and access</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You must use the Service only for authorized business purposes.</li>
              <li>We may suspend access if we reasonably believe the account is being misused or compromised.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">3. Acceptable use</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Do not attempt to access data you are not authorized to view.</li>
              <li>Do not interfere with or disrupt the Service or its infrastructure.</li>
              <li>Do not upload unlawful, infringing, or malicious content.</li>
              <li>Do not reverse engineer or attempt to extract source code except where permitted by law.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">4. Operational data</h3>
            <p className="mt-3">
              The Service lets you create and manage operational records like customers, orders, routes, and delivery statuses. You
              represent that you have the necessary rights and permissions to input and use such data.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">5. Third-party services</h3>
            <p className="mt-3">
              The Service may rely on third-party services (for example, hosting or diagnostics). Use of those services may be subject
              to their terms.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">6. Changes, availability, and termination</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>We may update or modify the Service to improve features, security, and reliability.</li>
              <li>We may suspend or terminate access to the Service for violation of these Terms or for legal/security reasons.</li>
              <li>Your organization may deactivate accounts at any time.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">7. Disclaimers</h3>
            <p className="mt-3">
              The Service is provided “as is” and “as available”. To the extent permitted by law, we disclaim warranties of
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">8. Limitation of liability</h3>
            <p className="mt-3">
              To the extent permitted by law, we will not be liable for indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits, revenue, data, or goodwill arising from use of the Service.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">9. Changes to these Terms</h3>
            <p className="mt-3">
              We may update these Terms from time to time. We’ll revise the effective date above when changes are posted.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">10. Contact</h3>
            <p className="mt-3">
              Questions about these Terms can be sent to{" "}
              <a className="font-semibold text-(--color-primary) hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
