import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-astrologer.jpg";

const HeroSection = () => {
  const phoneNumber = "+918427177728";
  const whatsappLink = `https://wa.me/918427177728?text=नमस्ते%20गुरुजी,%20मुझे%20ज्योतिष%20परामर्श%20चाहिए`;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-cosmic stars-bg">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Hero Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-40">
        <img
          src={heroImage}
          alt="Astrologer"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-sm font-medium text-primary">
            ✨ 30+ Years Experience | 50,000+ Cases Solved
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          <span className="text-gradient-gold">प्रसिद्ध ज्योतिषाचार्य</span>
        </h1>
        <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          Love Marriage Specialist
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          क्या आप <span className="font-semibold text-primary">प्रेम, विवाह, या पारिवारिक समस्याओं</span> से परेशान हैं? 
          आज ही <span className="font-semibold text-primary">निःशुल्क परामर्श</span> प्राप्त करें!
        </p>

        {/* CTA Buttons */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={`tel:${phoneNumber}`}
            className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-gold px-8 py-4 text-lg font-bold text-primary-foreground shadow-gold transition-all hover:scale-105 hover:shadow-glow"
          >
            <Phone className="h-6 w-6 transition-transform group-hover:animate-bounce-slow" />
            <span>📞 Call Now - अभी कॉल करें</span>
          </a>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 rounded-xl border-2 border-green-500 bg-green-500/10 px-8 py-4 text-lg font-bold text-green-400 backdrop-blur-sm transition-all hover:scale-105 hover:bg-green-500/20"
          >
            <MessageCircle className="h-6 w-6 transition-transform group-hover:animate-bounce-slow" />
            <span>💬 WhatsApp Now</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-2 backdrop-blur-sm">
            🕉️ वैदिक ज्योतिष विशेषज्ञ
          </span>
          <span className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-2 backdrop-blur-sm">
            🔮 100% गोपनीय परामर्श
          </span>
          <span className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-2 backdrop-blur-sm">
            ⚡ तुरंत समाधान
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-12 w-6 rounded-full border-2 border-primary/30 p-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
