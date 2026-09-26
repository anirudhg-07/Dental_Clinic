import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  const { openBooking } = useBooking();
  return (
    <section id="home" className="relative min-h-[650px] flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroClinic}
          alt="Modern dental treatment room"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="section-shell relative z-20 w-full py-20 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-2xl"
        >
          <motion.h1 variants={fadeUpVariant} className="text-5xl font-extrabold leading-[1.1] text-gray-900 sm:text-[4rem] tracking-tight drop-shadow-sm">
            Professional dental<br />care <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3BA4F6] to-[#258ae0]">you can trust</span>
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="mt-6 text-lg leading-relaxed text-gray-700 sm:text-xl font-medium max-w-lg">
            Comprehensive dental services delivered with compassion, expertise, and the latest technology for your healthiest smile.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={openBooking} className="bg-gradient-to-r from-[#3BA4F6] to-[#258ae0] text-white hover:shadow-lg hover:shadow-blue-500/25 rounded-full px-8 text-base h-14 w-full sm:w-auto transition-all hover:-translate-y-0.5">
              Book Your Appointment <ArrowRight className="size-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/80 backdrop-blur-md text-gray-900 border-gray-200 hover:bg-gray-50 rounded-full px-8 text-base h-14 w-full sm:w-auto shadow-sm transition-all hover:-translate-y-0.5">
              <a href="#treatments">View Our Services</a>
            </Button>
          </motion.div>
        </motion.div>
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
    <section className="py-20 bg-gray-50/50">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHead
            eyebrow="Why Us"
            title="Why Choose SmileCraft?"
            subtitle="Modern dentistry with a patient-first approach."
          />
        </motion.div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ Icon, title, text }, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
              key={title}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-[#3BA4F6]">
                <Icon className="size-7 text-[#3BA4F6] transition-colors group-hover:text-white" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  const { openBooking } = useBooking();
  return (
    <section id="treatments" className="bg-white py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHead
            eyebrow="Treatments"
            title="Our Dental Treatments"
            subtitle="Comprehensive dental care for every stage of your smile journey."
          />
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map(({ Icon, title, text }, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05 } }
              }}
              key={title}
              className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3BA4F6] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
                <button
                  type="button"
                  onClick={openBooking}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3BA4F6]"
                >
                  Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mt-16 text-center">
          <Button size="lg" variant="outline" className="bg-white rounded-full px-8 border-gray-200 text-gray-900 shadow-sm hover:bg-gray-50" onClick={openBooking}>
            View All Treatments
          </Button>
        </motion.div>
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
    <section id="doctors" className="py-24 bg-gray-50/50">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHead
            eyebrow="Our Doctors"
            title="Meet Our Dental Team"
            subtitle="Experienced professionals dedicated to your smile."
          />
        </motion.div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doc, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
              key={doc.name}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="overflow-hidden aspect-4/5 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={doc.img}
                  alt={`Portrait of ${doc.name}`}
                  loading="lazy"
                  width={800}
                  height={912}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3BA4F6] transition-colors">{doc.name}</h3>
                <p className="mt-2 text-sm font-bold text-[#3BA4F6] bg-blue-50 inline-block px-3 py-1 rounded-full">{doc.qual}</p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{doc.spec}</p>
              </div>
            </motion.div>
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
    <section id="testimonials" className="py-24 bg-white">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <SectionHead
            eyebrow="Testimonials"
            title="What Our Patients Say"
            subtitle="Real stories from our happy patients."
          />
        </motion.div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
              key={i}
              className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div className="absolute -top-4 right-8 opacity-10 group-hover:text-[#3BA4F6] transition-colors">
                <svg className="size-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <div className="flex gap-1 relative z-10">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-gray-700 font-medium relative z-10">“{t.text}”</p>
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-[#3BA4F6] font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  const { openBooking } = useBooking();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3BA4F6] to-[#1d6bba] py-24">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-black/10 blur-3xl"></div>
      
      <div className="section-shell relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-sm">
            Ready to Take Care of Your Smile?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-50/90 font-medium">
            Schedule a consultation with our dental team and take the first step towards a confident, healthier smile.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              onClick={openBooking}
              className="w-full bg-white text-[#1d6bba] hover:bg-gray-50 rounded-full px-8 h-14 sm:w-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Book Your Appointment <ArrowRight className="size-5 ml-2" />
            </Button>
            <a href="tel:+11234567890" className="flex items-center gap-2 text-base font-bold text-white hover:text-blue-100 transition-colors">
              <Phone className="size-5" />
              (123) 456-7890
            </a>
          </div>
        </motion.div>
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
