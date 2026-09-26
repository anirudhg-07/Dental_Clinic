import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as Check, D as ArrowRight, E as Baby, S as ChevronDown, T as Brush, _ as Facebook, a as Star, b as CircleCheck, c as ShieldCheck, d as MessageCircle, f as Menu, g as HeartHandshake, h as Instagram, i as Stethoscope, l as Scissors, m as Mail, n as UserRound, o as Sparkles, p as MapPin, r as Syringe, s as Smile, t as X, u as Phone, v as Clock, w as CalendarCheck, x as ChevronUp, y as ClipboardList } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEmeYrz1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var TREATMENTS$1 = [
	"General Consultation",
	"Teeth Cleaning",
	"Root Canal",
	"Dental Implants",
	"Braces / Aligners",
	"Cosmetic Dentistry",
	"Pediatric Dentistry",
	"Wisdom Tooth Consultation",
	"Other"
];
var BookingContext = (0, import_react.createContext)({ openBooking: () => {} });
function useBooking() {
	return (0, import_react.useContext)(BookingContext);
}
function BookingProvider({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [treatment, setTreatment] = (0, import_react.useState)("");
	const openBooking = () => {
		setSubmitted(false);
		setTreatment("");
		setOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BookingContext.Provider, {
		value: { openBooking },
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex size-14 items-center justify-center rounded-full bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-7 text-brand" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "mt-5 text-2xl",
							children: "Appointment Request Received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "mt-3 text-base",
							children: "Thank you! Our clinic team will contact you shortly to confirm your appointment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6 w-full",
							onClick: () => setOpen(false),
							children: "Close"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "Demo website — no request is actually sent."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-11 items-center justify-center rounded-xl bg-brand-tint",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "size-5 text-brand" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-2xl",
						children: "Book an Appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Share a few details and our team will confirm your preferred slot." })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4 pt-2",
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitted(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								required: true,
								placeholder: "Your name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									type: "tel",
									required: true,
									placeholder: "+91 "
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									required: true,
									placeholder: "you@email.com"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "treatment",
								children: "Select Treatment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: treatment,
								onValueChange: setTreatment,
								required: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "treatment",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose a treatment" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: TREATMENTS$1.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: t,
									children: t
								}, t)) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "date",
									children: "Preferred Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "date",
									type: "date",
									required: true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "time",
									children: "Preferred Time"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "time",
									type: "time",
									required: true
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Message / Dental Concern"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								rows: 3,
								placeholder: "Tell us briefly how we can help"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full",
							children: "Request Appointment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs text-muted-foreground",
							children: "Demo booking form — no payment or account needed."
						})
					]
				})] })
			})
		})]
	});
}
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `flex items-center gap-2.5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-10 items-center justify-center rounded-xl bg-brand-tint",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "size-6",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9.5 4.5c2 0 3.2 1.1 6.5 1.1S20.5 4.5 22.5 4.5c3 0 5 2.4 5 6 0 4-1.4 5.6-2.2 9.4-.7 3.3-1.3 7.3-3.4 7.3-2 0-2.2-4.6-2.6-7-.3-1.8-1-3-3.3-3s-3 1.2-3.3 3c-.4 2.4-.6 7-2.6 7-2.1 0-2.7-4-3.4-7.3C6 16.1 4.5 14.5 4.5 10.5c0-3.6 2-6 5-6Z",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.8",
					className: "text-brand"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M11.5 14.8c1.2 1.5 2.7 2.2 4.5 2.2s3.3-.7 4.5-2.2",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.8",
					strokeLinecap: "round",
					className: "text-brand-soft"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-base font-extrabold tracking-tight text-navy",
				children: "SmileCraft"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-brand",
				children: "Dental Studio"
			})]
		})]
	});
}
var NAV = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Treatments",
		href: "#treatments"
	},
	{
		label: "Our Doctors",
		href: "#doctors"
	},
	{
		label: "Testimonials",
		href: "#testimonials"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { openBooking } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell flex h-[4.5rem] items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					"aria-label": "SmileCraft Dental Studio home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm font-semibold text-muted-foreground transition-colors hover:text-brand",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-4 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+919876543210",
						className: "flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brand" }), "+91 98765 43210"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: openBooking,
						children: "Book Appointment"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: openBooking,
						children: "Book"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "flex size-10 items-center justify-center rounded-xl border border-border text-navy",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "section-shell flex flex-col py-3",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "border-b border-border/60 py-3 text-sm font-semibold text-navy last:border-0",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+919876543210",
					className: "flex items-center gap-2 py-3 text-sm font-semibold text-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "+91 98765 43210"]
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-secondary/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "Modern dental care with a patient-first approach."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							{
								Icon: Instagram,
								label: "Instagram"
							},
							{
								Icon: Facebook,
								label: "Facebook"
							},
							{
								Icon: MessageCircle,
								label: "WhatsApp"
							}
						].map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							"aria-label": label,
							className: "flex size-10 items-center justify-center rounded-xl border border-border bg-background text-brand transition-colors hover:bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, label))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-bold uppercase tracking-[0.14em]",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
					children: [
						["Home", "#home"],
						["About", "#about"],
						["Treatments", "#treatments"],
						["Doctors", "#doctors"],
						["Contact", "#contact"]
					].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "transition-colors hover:text-brand",
						children: label
					}) }, label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-bold uppercase tracking-[0.14em]",
					children: "Treatments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
					children: [
						"General Dentistry",
						"Teeth Cleaning",
						"Implants",
						"Aligners",
						"Cosmetic Dentistry"
					].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#treatments",
						className: "transition-colors hover:text-brand",
						children: label
					}) }, label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-bold uppercase tracking-[0.14em]",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+919876543210",
								className: "hover:text-brand",
								children: "+91 98765 43210"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@smilecraftdental.in",
								className: "hover:text-brand",
								children: "hello@smilecraftdental.in"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-brand" }), "123, Main Road, Chennai, Tamil Nadu 6000XX"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-shell flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 SmileCraft Dental Studio. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hover:text-brand",
						children: "Privacy Policy"
					}),
					" ",
					"|",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hover:text-brand",
						children: "Terms"
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-shell pb-6 text-center text-[0.7rem] text-muted-foreground/80",
				children: "Demo concept website. Statistics, testimonials and doctor profiles are sample content."
			})]
		})]
	});
}
var hero_clinic_default = "/assets/hero-clinic-CdLJ2gxi.jpg";
var featured_smile_default = "/assets/featured-smile-yzURxzQ8.jpg";
var about_clinic_default = "/assets/about-clinic-DRmKPiIw.jpg";
var doctor_1_default = "/assets/doctor-1-Cn846CpL.jpg";
var doctor_2_default = "/assets/doctor-2-DcYiW0OG.jpg";
var doctor_3_default = "/assets/doctor-3-CoBshDn7.jpg";
var STATS = [
	["10+", "Years of Experience"],
	["5,000+", "Patients Treated"],
	["15+", "Dental Treatments"],
	["4.9/5", "Patient Rating"]
];
var WHY = [
	{
		Icon: Stethoscope,
		title: "Experienced Dental Team",
		text: "Personalised treatment from experienced dental professionals."
	},
	{
		Icon: Sparkles,
		title: "Modern Technology",
		text: "Digital diagnostics and modern equipment for accurate treatment."
	},
	{
		Icon: HeartHandshake,
		title: "Patient Comfort",
		text: "A calm, comfortable environment designed around your needs."
	},
	{
		Icon: ShieldCheck,
		title: "Transparent Care",
		text: "Clear treatment plans and guidance before every procedure."
	}
];
var TREATMENTS = [
	{
		Icon: Stethoscope,
		title: "General Dentistry",
		text: "Routine check-ups, cleaning and preventive dental care."
	},
	{
		Icon: Brush,
		title: "Teeth Cleaning",
		text: "Professional cleaning for healthier gums and teeth."
	},
	{
		Icon: Syringe,
		title: "Root Canal Treatment",
		text: "Comfort-focused treatment for damaged or infected teeth."
	},
	{
		Icon: ShieldCheck,
		title: "Dental Implants",
		text: "Natural-looking tooth replacement solutions."
	},
	{
		Icon: Smile,
		title: "Braces & Aligners",
		text: "Modern solutions for straighter, healthier smiles."
	},
	{
		Icon: Sparkles,
		title: "Cosmetic Dentistry",
		text: "Smile enhancement treatments designed around you."
	},
	{
		Icon: Baby,
		title: "Pediatric Dentistry",
		text: "Gentle dental care for children."
	},
	{
		Icon: Scissors,
		title: "Wisdom Tooth Removal",
		text: "Professional evaluation and removal when required."
	}
];
var DOCTORS = [
	{
		img: doctor_1_default,
		name: "Dr. Ananya Rao",
		qual: "BDS, MDS",
		spec: "General & Cosmetic Dentistry"
	},
	{
		img: doctor_2_default,
		name: "Dr. Arjun Mehta",
		qual: "BDS, MDS",
		spec: "Implant & Restorative Dentistry"
	},
	{
		img: doctor_3_default,
		name: "Dr. Priya Nair",
		qual: "BDS, MDS",
		spec: "Orthodontics & Aligners"
	}
];
var STEPS = [
	{
		title: "Book Your Appointment",
		text: "Choose a convenient date and time."
	},
	{
		title: "Meet Your Dentist",
		text: "Discuss your concerns and receive a personalised evaluation."
	},
	{
		title: "Begin Your Treatment",
		text: "Get a clear treatment plan based on your dental needs."
	}
];
var TESTIMONIALS = [
	{
		name: "Sample Patient",
		text: "Sample testimonial text describing a comfortable and professional dental experience."
	},
	{
		name: "Demo Patient",
		text: "Sample testimonial about friendly staff and clear explanations."
	},
	{
		name: "Sample Patient",
		text: "Sample testimonial about the clinic environment and treatment experience."
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Treatments, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Doctors, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	}) });
}
function SectionHead({ eyebrow, title, subtitle, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "mx-auto max-w-2xl text-center" : "max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-extrabold sm:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function Hero() {
	const { openBooking } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "relative overflow-hidden bg-brand-tint/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Healthy Smiles. Confident You."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]",
					children: [
						"Professional Dental Care,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Designed Around You."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: "From routine check-ups to advanced dental treatments, our team combines modern technology with personalised care to help you achieve a healthier, confident smile."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: openBooking,
						className: "w-full sm:w-auto",
						children: ["Book an Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						asChild: true,
						className: "w-full bg-background sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#treatments",
							children: "Explore Treatments"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm font-medium text-muted-foreground",
					children: "Comfortable care • Modern technology • Experienced dental team"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl shadow-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_clinic_default,
						alt: "Modern dental treatment room at SmileCraft Dental Studio",
						width: 1600,
						height: 1200,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-background p-4 shadow-card sm:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-xl bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5 text-brand" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-navy",
								children: "Mon – Sat"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "9:00 AM – 8:00 PM"
							})]
						})]
					})
				})]
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-shell grid grid-cols-2 gap-8 py-12 lg:grid-cols-4",
			children: STATS.map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-extrabold text-brand sm:text-4xl",
					children: value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm font-medium text-muted-foreground",
					children: label
				})]
			}, label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "section-shell pb-8 text-center text-xs text-muted-foreground/80",
			children: "Sample figures shown for this demo website."
		})]
	});
}
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Why Us",
				title: "Why Choose SmileCraft?",
				subtitle: "Modern dentistry with a patient-first approach."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: WHY.map(({ Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-xl bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-brand" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-bold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: text
						})
					]
				}, title))
			})]
		})
	});
}
function Treatments() {
	const { openBooking } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "treatments",
		className: "bg-secondary/50 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Treatments",
					title: "Our Dental Treatments",
					subtitle: "Comprehensive dental care for every stage of your smile journey."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: TREATMENTS.map(({ Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-12 items-center justify-center rounded-xl bg-brand-tint transition-colors group-hover:bg-brand group-hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-brand transition-colors group-hover:text-primary-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-bold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: openBooking,
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand",
								children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
							})
						]
					}, title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						className: "bg-background",
						onClick: openBooking,
						children: "View All Treatments"
					})
				})
			]
		})
	});
}
function Featured() {
	const { openBooking } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: featured_smile_default,
					alt: "Dentist explaining a treatment plan to a patient",
					loading: "lazy",
					width: 1200,
					height: 1200,
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Cosmetic Dentistry",
					title: "Transform Your Smile With Confidence",
					center: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground",
					children: "Our cosmetic treatments start with understanding what you would like to change. We plan each step with you, using digital assessments to shape results that look natural and suit your face."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: [
						"Personalised treatment planning",
						"Modern dental technology",
						"Natural-looking results",
						"Comfortable treatment experience"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 text-sm font-medium text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-6 items-center justify-center rounded-full bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-brand" })
						}), item]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					className: "mt-8 w-full sm:w-auto",
					onClick: openBooking,
					children: ["Book a Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			] })]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-brand-tint/60 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "About the clinic",
					title: "Care That Goes Beyond Your Teeth",
					center: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground",
					children: "At SmileCraft Dental Studio, we believe great dentistry is about more than treating teeth. Our goal is to create a comfortable experience where every patient feels heard, informed and cared for."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-3",
					children: [
						"Patient-first approach",
						"Modern treatment techniques",
						"Comfortable clinical environment"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-background p-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold text-navy",
							children: item
						})]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					variant: "outline",
					asChild: true,
					className: "mt-8 bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#doctors",
						children: ["Meet Our Team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_clinic_default,
					alt: "Reception and waiting area of the dental clinic",
					loading: "lazy",
					width: 1200,
					height: 1008,
					className: "h-full w-full object-cover"
				})
			})]
		})
	});
}
function Doctors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "doctors",
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Our Doctors",
				title: "Meet Our Dental Team",
				subtitle: "Sample team profiles created for this demo website."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: DOCTORS.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: doc.img,
						alt: `Portrait of ${doc.name}`,
						loading: "lazy",
						width: 800,
						height: 912,
						className: "aspect-4/5 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: doc.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-semibold text-brand",
								children: doc.qual
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: doc.spec
							})
						]
					})]
				}, doc.name))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/50 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "How it works",
				title: "Your Visit, Made Simple",
				subtitle: "Three easy steps from booking to treatment."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-2xl border border-border bg-card p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-xl bg-brand text-lg font-extrabold text-primary-foreground",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-bold",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: step.text
						}),
						i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "absolute right-6 top-6 size-5 text-brand-soft" }),
						i === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "absolute right-6 top-6 size-5 text-brand-soft" }),
						i === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "absolute right-6 top-6 size-5 text-brand-soft" })
					]
				}, step.title))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Testimonials",
				title: "What Our Patients Say",
				subtitle: "Realistic sample testimonials for this demo website."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-7 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1",
							children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-brand-soft text-brand-soft" }, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: [
								"“",
								t.text,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-bold text-navy",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Demo content"
						})
					]
				}, i))
			})]
		})
	});
}
function CtaBanner() {
	const { openBooking } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-brand py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold text-primary-foreground sm:text-4xl",
					children: "Ready to Take Care of Your Smile?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85",
					children: "Schedule a consultation with our dental team and take the first step towards better oral health."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						variant: "secondary",
						onClick: openBooking,
						className: "w-full sm:w-auto",
						children: ["Book Your Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919876543210",
						className: "text-sm font-semibold text-primary-foreground/90",
						children: "Call us: +91 98765 43210"
					})]
				})
			]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Contact",
				title: "Visit SmileCraft Dental Studio",
				center: false
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-brand" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-navy",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "123, Main Road, Chennai, Tamil Nadu 6000XX"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5 text-brand" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-navy",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919876543210",
							className: "text-sm text-muted-foreground hover:text-brand",
							children: "+91 98765 43210"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-brand" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-navy",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@smilecraftdental.in",
							className: "text-sm text-muted-foreground hover:text-brand",
							children: "hello@smilecraftdental.in"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5 text-brand" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-navy",
							children: "Opening Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"Monday – Saturday: 9:00 AM – 8:00 PM",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Sunday: By Appointment"
							]
						})] })]
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-3xl border border-border shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "SmileCraft Dental Studio location map",
					src: "https://www.openstreetmap.org/export/embed.html?bbox=80.20%2C13.02%2C80.30%2C13.10&layer=mapnik",
					loading: "lazy",
					className: "h-80 w-full lg:h-[26rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 border-t border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Chennai, Tamil Nadu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.google.com/maps/search/?api=1&query=Chennai+Tamil+Nadu",
							target: "_blank",
							rel: "noreferrer",
							children: ["Get Directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})]
				})]
			})]
		})
	});
}
//#endregion
export { Index as component };
