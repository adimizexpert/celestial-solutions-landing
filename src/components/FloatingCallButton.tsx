import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  const phoneNumber = "+918427177728";
  
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-gold animate-pulse-glow transition-transform hover:scale-110"
      aria-label="Call Now"
    >
      <Phone className="h-7 w-7 text-primary-foreground" />
    </a>
  );
};

export default FloatingCallButton;
