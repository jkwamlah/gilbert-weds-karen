import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return <Icon {...props}><path d="M4 6h16M4 12h16M4 18h16" /></Icon>;
}

export function XIcon(props: IconProps) {
  return <Icon {...props}><path d="m6 6 12 12M18 6 6 18" /></Icon>;
}

export function ArrowUpIcon(props: IconProps) {
  return <Icon {...props}><path d="m18 15-6-6-6 6" /></Icon>;
}

export function PhoneIcon(props: IconProps) {
  return <Icon {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" /></Icon>;
}

export function MessageIcon(props: IconProps) {
  return <Icon {...props}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /></Icon>;
}

export function SmartphoneIcon(props: IconProps) {
  return <Icon {...props}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></Icon>;
}

export function BuildingIcon(props: IconProps) {
  return <Icon {...props}><path d="M3 21h18M6 18V7l6-4 6 4v11M9 10h.01M9 14h.01M15 10h.01M15 14h.01" /></Icon>;
}

export function HeartIcon(props: IconProps) {
  return <Icon {...props}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></Icon>;
}

export function MapPinIcon(props: IconProps) {
  return <Icon {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>;
}

export function CarIcon(props: IconProps) {
  return <Icon {...props}><path d="m5 17-1 2M19 17l1 2M3 11l2-5h14l2 5v7H3Z" /><circle cx="7" cy="15" r="1" /><circle cx="17" cy="15" r="1" /></Icon>;
}

export function CopyIcon(props: IconProps) {
  return <Icon {...props}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></Icon>;
}
