import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { useBooking } from "./booking";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="section-shell flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#home" aria-label="SmileCraft Dental Studio home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+11234567890"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#3BA4F6]"
          >
            <Phone className="size-4" />
            (123) 456-7890
          </a>
          <Button onClick={openBooking} className="bg-[#3BA4F6] text-white hover:bg-[#3BA4F6]/90 rounded-md px-6">
            Book Appointment
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button size="sm" onClick={openBooking}>
            Book
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-xl border border-border text-navy"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="section-shell flex flex-col py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-semibold text-navy last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 py-3 text-sm font-semibold text-brand"
            >
              <Phone className="size-4" />
              +91 98765 43210
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
