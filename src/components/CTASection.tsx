import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  const phoneNumber = "+918427177728";
  const whatsappLink = `https://wa.me/918427177728?text=नमस्ते%20गुरुजी,%20मुझे%20ज्योतिष%20परामर्श%20चाहिए`;

  return (
    <section className="relative overflow-hidden bg-gradient-cosmic py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 stars-bg opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Urgency Badge */}
          <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              🔥 Limited Time - पहला परामर्श निःशुल्क!
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-gradient-gold">अभी संपर्क करें</span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            आपकी समस्या का समाधान सिर्फ एक कॉल दूर है। <br />
            <span className="font-semibold text-primary">24/7 उपलब्ध | 100% गोपनीय</span>
          </p>

          {/* Contact Info */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-muted-foreground sm:flex-row">
            <span className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">{phoneNumber}</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>All India Service Available</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-gold px-10 py-5 text-xl font-bold text-primary-foreground shadow-gold transition-all hover:scale-105 hover:shadow-glow"
            >
              <Phone className="h-7 w-7 transition-transform group-hover:animate-bounce-slow" />
              <span>📞 CALL NOW</span>
            </a>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl border-2 border-green-500 bg-green-500/20 px-10 py-5 text-xl font-bold text-green-400 transition-all hover:scale-105 hover:bg-green-500/30"
            >
              <MessageCircle className="h-7 w-7 transition-transform group-hover:animate-bounce-slow" />
              <span>💬 WHATSAPP</span>
            </a>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-muted-foreground">
            🔒 आपकी जानकारी पूर्णतः सुरक्षित और गोपनीय रहेगी
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
