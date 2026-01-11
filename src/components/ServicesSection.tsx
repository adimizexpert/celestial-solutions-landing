import { Heart, Users, Baby, Scale, Home, ArrowRight, Sparkles, UserCheck, Ban, HeartCrack } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Love Marriage Specialist",
    titleHi: "प्रेम विवाह समस्या",
    description: "Get your love marriage approved by parents with vedic remedies",
  },
  {
    icon: HeartCrack,
    title: "Love Problem Solution",
    titleHi: "प्रेम समस्या समाधान",
    description: "Solve all love related issues with powerful astrology",
  },
  {
    icon: Users,
    title: "Husband Wife Dispute",
    titleHi: "पति-पत्नी विवाद",
    description: "Restore peace and harmony in your married life",
  },
  {
    icon: Scale,
    title: "Divorce Problem Solution",
    titleHi: "तलाक समस्या समाधान",
    description: "Save your marriage from divorce with expert guidance",
  },
  {
    icon: Home,
    title: "Family Problem Solution",
    titleHi: "पारिवारिक समस्या",
    description: "Resolve family conflicts and bring happiness back",
  },
  {
    icon: Baby,
    title: "Childless Couple",
    titleHi: "संतान प्राप्ति",
    description: "Blessed solutions for couples seeking children",
  },
  {
    icon: ArrowRight,
    title: "Get Lost Love Back",
    titleHi: "खोया प्यार वापस पाएं",
    description: "Reunite with your lost love through powerful mantras",
  },
  {
    icon: Sparkles,
    title: "Intercast Marriage",
    titleHi: "अंतर्जातीय विवाह",
    description: "Remove obstacles in inter-caste love marriages",
  },
  {
    icon: UserCheck,
    title: "Relationship Problem",
    titleHi: "रिश्ते की समस्या",
    description: "Fix all relationship issues and misunderstandings",
  },
  {
    icon: Ban,
    title: "Extra Marital Affairs",
    titleHi: "अवैध संबंध समस्या",
    description: "Handle delicate situations with confidentiality",
  },
  {
    icon: Sparkles,
    title: "Lottery Number Vashikaran",
    titleHi: "लॉटरी नंबर वशीकरण",
    description: "Attract luck and fortune with powerful vashikaran",
  },
  {
    icon: Users,
    title: "Black Magic Removal",
    titleHi: "काला जादू निवारण",
    description: "Protection and removal of black magic effects",
  },
  {
    icon: Heart,
    title: "Vashikaran Specialist",
    titleHi: "वशीकरण विशेषज्ञ",
    description: "Powerful vashikaran mantras for all purposes",
  },
  {
    icon: Scale,
    title: "Business Problem",
    titleHi: "व्यापार समस्या",
    description: "Solve business losses and attract prosperity",
  },
  {
    icon: Home,
    title: "Enemy Problem Solution",
    titleHi: "शत्रु समस्या समाधान",
    description: "Protection from enemies and evil intentions",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            🔮 Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-gold">हमारी सेवाएं</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            25+ वर्षों के अनुभव के साथ, हमने हजारों लोगों की समस्याओं का समाधान किया है
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-gold"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-1 font-bold text-foreground">{service.title}</h3>
                <p className="mb-2 text-sm font-medium text-primary">{service.titleHi}</p>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
