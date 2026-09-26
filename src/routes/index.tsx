import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  Brush,
  Check,
  ClipboardList,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BookingProvider, useBooking } from "@/components/site/booking";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import heroClinic from "@/assets/hero-clinic.jpg";
import featuredSmile from "@/assets/featured-smile.jpg";
import aboutClinic from "@/assets/about-clinic.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const TITLE = "SmileCraft Dental Studio — Dental Clinic in Chennai";
const DESCRIPTION =
  "SmileCraft Dental Studio in Chennai offers general, cosmetic and implant dentistry with modern technology and personalised, comfortable care. Book an appointment online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  ["10+", "Years of Experience"],
  ["5,000+", "Patients Treated"],
  ["15+", "Dental Treatments"],
  ["4.9/5", "Patient Rating"],
];

const WHY = [
  {
    Icon: Stethoscope,
    title: "Experienced Dental Team",
    text: "Personalised treatment from experienced dental professionals.",
  },
  {
    Icon: Sparkles,
    title: "Modern Technology",
    text: "Digital diagnostics and modern equipment for accurate treatment.",
  },
  {
    Icon: HeartHandshake,
    title: "Patient Comfort",
    text: "A calm, comfortable environment designed around your needs.",
  },
  {
    Icon: ShieldCheck,
    title: "Transparent Care",
    text: "Clear treatment plans and guidance before every procedure.",
  },
];

const TREATMENTS = [
  { Icon: Stethoscope, title: "General Dentistry", text: "Routine check-ups, cleaning and preventive dental care." },
  { Icon: Brush, title: "Teeth Cleaning", text: "Professional cleaning for healthier gums and teeth." },
  { Icon: Syringe, title: "Root Canal Treatment", text: "Comfort-focused treatment for damaged or infected teeth." },
  { Icon: ShieldCheck, title: "Dental Implants", text: "Natural-looking tooth replacement solutions." },
  { Icon: Smile, title: "Braces & Aligners", text: "Modern solutions for straighter, healthier smiles." },
  { Icon: Sparkles, title: "Cosmetic Dentistry", text: "Smile enhancement treatments designed around you." },
  { Icon: Baby, title: "Pediatric Dentistry", text: "Gentle dental care for children." },
  { Icon: Scissors, title: "Wisdom Tooth Removal", text: "Professional evaluation and removal when required." },
];

const DOCTORS = [
  {
    img: doctor1,
    name: "Dr. Ananya Rao",
    qual: "BDS, MDS",
    spec: "General & Cosmetic Dentistry",
  },
  {
    img: doctor2,
    name: "Dr. Arjun Mehta",
    qual: "BDS, MDS",
    spec: "Implant & Restorative Dentistry",
  },
  {
    img: doctor3,
    name: "Dr. Priya Nair",
    qual: "BDS, MDS",
    spec: "Orthodontics & Aligners",
  },
];

const STEPS = [
  { title: "Book Your Appointment", text: "Choose a convenient date and time." },
  {
    title: "Meet Your Dentist",
    text: "Discuss your concerns and receive a personalised evaluation.",
  },
  {
    title: "Begin Your Treatment",
    text: "Get a clear treatment plan based on your dental needs.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sample Patient",
    text: "Sample testimonial text describing a comfortable and professional dental experience.",
  },
  {
    name: "Demo Patient",
    text: "Sample testimonial about friendly staff and clear explanations.",
  },
  {
    name: "Sample Patient",
    text: "Sample testimonial about the clinic environment and treatment experience.",
  },
];

function Index() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Stats />
          <WhyChoose />
          <Treatments />
          <Featured />
          <About />
          <Doctors />
          <HowItWorks />
          <Testimonials />
          <CtaBanner />
          <Contact />
        </main>
        <Footer />
      </div>
    </BookingProvider>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Hero() {
  const { openBooking } = useBooking();
  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/70 sm:bg-white/60 md:bg-white/40 z-10" />
        <img
          src={heroClinic}
          alt="Modern dental treatment room"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="section-shell relative z-20 w-full py-20 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.1] text-gray-900 sm:text-[4rem] tracking-tight">
            Professional dental<br />care you can trust
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700 sm:text-xl font-medium max-w-lg">
            Comprehensive dental services delivered with compassion, expertise, and the latest technology for your healthiest smile.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={openBooking} className="bg-[#3BA4F6] text-white hover:bg-[#3BA4F6]/90 rounded-md px-8 text-base h-14 w-full sm:w-auto">
              Book Your Appointment <ArrowRight className="size-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white text-gray-900 border-gray-200 hover:bg-gray-50 rounded-md px-8 text-base h-14 w-full sm:w-auto shadow-sm">
              <a href="#treatments">View Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-border">
      <div className="section-shell grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {STATS.map(([value, label]) => (
          <div key={label} className="text-center">
            <p className="text-3xl font-extrabold text-brand sm:text-4xl">{value}</p>
            <p className="mt-1.5 text-sm font-medium text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <p className="section-shell pb-8 text-center text-xs text-muted-foreground/80">
        Sample figures shown for this demo website.
      </p>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHead
          eyebrow="Why Us"
          title="Why Choose SmileCraft?"
          subtitle="Modern dentistry with a patient-first approach."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint">
                <Icon className="size-6 text-brand" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  const { openBooking } = useBooking();
  return (
    <section id="treatments" className="bg-secondary/50 py-20">
      <div className="section-shell">
        <SectionHead
          eyebrow="Treatments"
          title="Our Dental Treatments"
          subtitle="Comprehensive dental care for every stage of your smile journey."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                <Icon className="size-6 text-brand transition-colors group-hover:text-primary-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <button
                type="button"
                onClick={openBooking}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand"
              >
                Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="bg-background" onClick={openBooking}>
            View All Treatments
          </Button>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const { openBooking } = useBooking();
  return (
    <section className="py-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={featuredSmile}
            alt="Dentist explaining a treatment plan to a patient"
            loading="lazy"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <SectionHead
            eyebrow="Cosmetic Dentistry"
            title="Transform Your Smile With Confidence"
            center={false}
          />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our cosmetic treatments start with understanding what you would like to change. We plan
            each step with you, using digital assessments to shape results that look natural and
            suit your face.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Personalised treatment planning",
              "Modern dental technology",
              "Natural-looking results",
              "Comfortable treatment experience",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-navy">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand-tint">
                  <Check className="size-3.5 text-brand" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8 w-full sm:w-auto" onClick={openBooking}>
            Book a Consultation <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-brand-tint/60 py-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="About the clinic" title="Care That Goes Beyond Your Teeth" center={false} />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            At SmileCraft Dental Studio, we believe great dentistry is about more than treating
            teeth. Our goal is to create a comfortable experience where every patient feels heard,
            informed and cared for.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Patient-first approach", "Modern treatment techniques", "Comfortable clinical environment"].map(
              (item) => (
                <div key={item} className="rounded-2xl border border-border bg-background p-5 shadow-soft">
                  <Check className="size-5 text-brand" />
                  <p className="mt-3 text-sm font-semibold text-navy">{item}</p>
                </div>
              ),
            )}
          </div>
          <Button size="lg" variant="outline" asChild className="mt-8 bg-background">
            <a href="#doctors">
              Meet Our Team <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={aboutClinic}
            alt="Reception and waiting area of the dental clinic"
            loading="lazy"
            width={1200}
            height={1008}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section id="doctors" className="py-20">
      <div className="section-shell">
        <SectionHead
          eyebrow="Our Doctors"
          title="Meet Our Dental Team"
          subtitle="Sample team profiles created for this demo website."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <img
                src={doc.img}
                alt={`Portrait of ${doc.name}`}
                loading="lazy"
                width={800}
                height={912}
                className="aspect-4/5 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">{doc.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">{doc.qual}</p>
                <p className="mt-2 text-sm text-muted-foreground">{doc.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="section-shell">
        <SectionHead
          eyebrow="How it works"
          title="Your Visit, Made Simple"
          subtitle="Three easy steps from booking to treatment."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-border bg-card p-8 shadow-soft">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-lg font-extrabold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              {i === 0 && <ClipboardList className="absolute right-6 top-6 size-5 text-brand-soft" />}
              {i === 1 && <UserRound className="absolute right-6 top-6 size-5 text-brand-soft" />}
              {i === 2 && <Smile className="absolute right-6 top-6 size-5 text-brand-soft" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="section-shell">
        <SectionHead
          eyebrow="Testimonials"
          title="What Our Patients Say"
          subtitle="Realistic sample testimonials for this demo website."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-brand-soft text-brand-soft" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
              <p className="mt-6 text-sm font-bold text-navy">{t.name}</p>
              <p className="text-xs text-muted-foreground">Demo content</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  const { openBooking } = useBooking();
  return (
    <section className="bg-brand py-16">
      <div className="section-shell text-center">
        <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          Ready to Take Care of Your Smile?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85">
          Schedule a consultation with our dental team and take the first step towards better oral
          health.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            onClick={openBooking}
            className="w-full sm:w-auto"
          >
            Book Your Appointment <ArrowRight className="size-4" />
          </Button>
          <a href="tel:+919876543210" className="text-sm font-semibold text-primary-foreground/90">
            Call us: +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Contact" title="Visit SmileCraft Dental Studio" center={false} />
          <ul className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint">
                <MapPin className="size-5 text-brand" />
              </span>
              <div>
                <p className="font-bold text-navy">Address</p>
                <p className="text-sm text-muted-foreground">
                  123, Main Road, Chennai, Tamil Nadu 6000XX
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint">
                <Phone className="size-5 text-brand" />
              </span>
              <div>
                <p className="font-bold text-navy">Phone</p>
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-brand">
                  +91 98765 43210
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint">
                <Mail className="size-5 text-brand" />
              </span>
              <div>
                <p className="font-bold text-navy">Email</p>
                <a
                  href="mailto:hello@smilecraftdental.in"
                  className="text-sm text-muted-foreground hover:text-brand"
                >
                  hello@smilecraftdental.in
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint">
                <Clock className="size-5 text-brand" />
              </span>
              <div>
                <p className="font-bold text-navy">Opening Hours</p>
                <p className="text-sm text-muted-foreground">
                  Monday – Saturday: 9:00 AM – 8:00 PM
                  <br />
                  Sunday: By Appointment
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="SmileCraft Dental Studio location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=80.20%2C13.02%2C80.30%2C13.10&layer=mapnik"
            loading="lazy"
            className="h-80 w-full lg:h-[26rem]"
          />
          <div className="flex items-center justify-between gap-4 border-t border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu</p>
            <Button variant="outline" asChild>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chennai+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
