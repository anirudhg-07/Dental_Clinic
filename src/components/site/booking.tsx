import { createContext, useContext, useState, type ReactNode } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TREATMENTS = [
  "General Consultation",
  "Teeth Cleaning",
  "Root Canal",
  "Dental Implants",
  "Braces / Aligners",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Wisdom Tooth Consultation",
  "Other",
];

type BookingContextValue = { openBooking: () => void };

const BookingContext = createContext<BookingContextValue>({ openBooking: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [treatment, setTreatment] = useState("");

  const openBooking = () => {
    setSubmitted(false);
    setTreatment("");
    setOpen(true);
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-tint">
                <CheckCircle2 className="size-7 text-brand" />
              </div>
              <DialogTitle className="mt-5 text-2xl">Appointment Request Received</DialogTitle>
              <DialogDescription className="mt-3 text-base">
                Thank you! Our clinic team will contact you shortly to confirm your appointment.
              </DialogDescription>
              <Button className="mt-6 w-full" onClick={() => setOpen(false)}>
                Close
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                Demo website — no request is actually sent.
              </p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint">
                  <CalendarCheck className="size-5 text-brand" />
                </div>
                <DialogTitle className="text-2xl">Book an Appointment</DialogTitle>
                <DialogDescription>
                  Share a few details and our team will confirm your preferred slot.
                </DialogDescription>
              </DialogHeader>

              <form
                className="grid gap-4 pt-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="+91 " />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@email.com" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="treatment">Select Treatment</Label>
                  <Select value={treatment} onValueChange={setTreatment} required>
                    <SelectTrigger id="treatment">
                      <SelectValue placeholder="Choose a treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {TREATMENTS.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input id="time" type="time" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message / Dental Concern</Label>
                  <Textarea id="message" rows={3} placeholder="Tell us briefly how we can help" />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Request Appointment
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Demo booking form — no payment or account needed.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
}
