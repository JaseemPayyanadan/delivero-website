import Section from "@/components/Section";

export const metadata = { title: "Privacy Policy" };

const APP_NAME = "Food Distribution";
const SUPPORT_EMAIL = "support@fooddistribution.app";
const EFFECTIVE_DATE = "May 5, 2026";

export default function PrivacyPage() {
  return (
    <Section
      title="Privacy Policy"
      subtitle={`Effective date: ${EFFECTIVE_DATE}`}
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-surface p-6 text-sm leading-relaxed text-muted dark:border-white/10 md:p-10">
        <p className="text-balance">
          This Privacy Policy explains how <span className="font-semibold text-foreground">{APP_NAME}</span> (“we”, “us”)
          collects, uses, and shares information when you use our mobile application and related services.
        </p>

        <div className="mt-8 space-y-8">
          <section>
            <h3 className="text-base font-semibold text-foreground">Information we collect</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-foreground">Account information</span>: such as your name, email, and phone
                number provided by your organization/admin.
              </li>
              <li>
                <span className="font-semibold text-foreground">Operational data</span>: customers, orders, routes, delivery status
                updates, and notes you create in the app.
              </li>
              <li>
                <span className="font-semibold text-foreground">Device & usage data</span>: basic device identifiers, app version,
                and diagnostic information (for reliability and support).
              </li>
              <li>
                <span className="font-semibold text-foreground">Location data (optional)</span>: if enabled by your organization and
                device permissions, we may process location to support delivery workflows (e.g., routing and order status).
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">How we use information</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide and operate the app (create/assign/track orders and routes).</li>
              <li>Authenticate users and enforce role-based access (Owner/Manager and Driver roles).</li>
              <li>Improve performance, fix bugs, and provide customer support.</li>
              <li>Send service-related notifications (e.g., assignment updates), where enabled.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">How we share information</h3>
            <p className="mt-3">
              We share information only as needed to provide the service:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-foreground">With your organization</span>: account admins and authorized staff
                can access operational data in line with assigned roles.
              </li>
              <li>
                <span className="font-semibold text-foreground">With service providers</span>: vendors that help us run the app (e.g.,
                hosting, analytics/diagnostics) under contractual confidentiality obligations.
              </li>
              <li>
                <span className="font-semibold text-foreground">For legal reasons</span>: if required to comply with law or protect
                rights, safety, and security.
              </li>
            </ul>
            <p className="mt-3">We do not sell your personal information.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">Data retention</h3>
            <p className="mt-3">
              We retain information for as long as necessary to provide the service and as required for legitimate business purposes
              (such as security, audits, and dispute resolution). Your organization may control retention of operational data.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">Security</h3>
            <p className="mt-3">
              We use reasonable safeguards designed to protect information. No method of transmission or storage is 100% secure, so we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">Your choices</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Access and update account details through your organization/admin.</li>
              <li>Control device permissions such as notifications and location in your device settings.</li>
              <li>Request deletion or export (where applicable) by contacting support (subject to organizational policies).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">Children’s privacy</h3>
            <p className="mt-3">
              {APP_NAME} is intended for business use and is not directed to children. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">Changes to this policy</h3>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We’ll revise the effective date above when changes are posted.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground">Contact us</h3>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at{" "}
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

