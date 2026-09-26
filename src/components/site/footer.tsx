import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Modern dental care with a patient-first approach.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: MessageCircle, label: "WhatsApp" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-brand transition-colors hover:bg-brand-tint"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Treatments", "#treatments"],
              ["Doctors", "#doctors"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Treatments</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              "General Dentistry",
              "Teeth Cleaning",
              "Implants",
              "Aligners",
              "Cosmetic Dentistry",
            ].map((label) => (
              <li key={label}>
                <a href="#treatments" className="transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-brand" />
              <a href="tel:+919876543210" className="hover:text-brand">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-brand" />
              <a href="mailto:hello@smilecraftdental.in" className="hover:text-brand">
                hello@smilecraftdental.in
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              123, Main Road, Chennai, Tamil Nadu 6000XX
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 SmileCraft Dental Studio. All rights reserved.</p>
          <p>
            <a href="#contact" className="hover:text-brand">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#contact" className="hover:text-brand">
              Terms
            </a>
          </p>
        </div>
        <p className="section-shell pb-6 text-center text-[0.7rem] text-muted-foreground/80">
          Demo concept website. Statistics, testimonials and doctor profiles are sample content.
        </p>
      </div>
    </footer>
  );
}
