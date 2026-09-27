import Link from "next/link";
import type { ReactNode } from "react";

function BrandIcon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const FacebookIcon = ({ className }: { className?: string }) => (
  <BrandIcon className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </BrandIcon>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <BrandIcon className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </BrandIcon>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <BrandIcon className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </BrandIcon>
);

const links = [
  { label: "Contact us", href: "/contact" },
  { label: "About us", href: "/about" },
  { label: "Custom Trip", href: "/custom-trip" },
  { label: "Travel Guide", href: "/travel-guide" },
  { label: "My Booking", href: "/my-booking" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* STAY CONNECTED */}
      <div className="container-shell py-12 text-center">
        <p className="text-lg font-medium text-slate-800">Stay Connected</p>
        <p className="mt-1 text-sm text-slate-600">Follow us on</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 text-white transition-colors hover:bg-ocean"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* LINKS */}
      <div className="border-y border-slate-300">
        <div className="container-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-[13px] font-medium text-slate-700">
          {links.map((l) => (
            <Link key={l.href + l.label} href={l.href} className="hover:text-ocean">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container-shell py-6 text-center">
        <p className="text-xs text-slate-600">©2026 Melintang Tour. All rights reserved.</p>
        <p className="mt-3 text-xs text-slate-600">Explore Beyond Boundaries.</p>
      </div>
    </footer>
  );
}
