import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "राहुल शर्मा",
    location: "दिल्ली",
    text: "गुरुजी की कृपा से मेरा प्रेम विवाह हो गया। माता-पिता भी मान गए। धन्यवाद गुरुजी!",
    rating: 5,
  },
  {
    name: "Priya Singh",
    location: "Mumbai",
    text: "My husband was having an affair. Guruji's remedies saved my marriage. Forever grateful!",
    rating: 5,
  },
  {
    name: "अमित कुमार",
    location: "जयपुर",
    text: "10 साल से संतान नहीं थी। गुरुजी के उपाय से अब हमारे घर में खुशियां आ गईं।",
    rating: 5,
  },
];

const stats = [
  { value: "25+", label: "Years Experience", labelHi: "वर्षों का अनुभव" },
  { value: "50K+", label: "Cases Solved", labelHi: "समस्याएं हल" },
  { value: "100%", label: "Confidential", labelHi: "गोपनीय परामर्श" },
  { value: "24/7", label: "Available", labelHi: "उपलब्ध" },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container px-4">
        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-primary/20 bg-background p-6 text-center transition-all hover:border-primary/50 hover:shadow-gold"
            >
              <div className="mb-2 text-3xl font-extrabold text-gradient-gold md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="block">{stat.label}</span>
                <span className="text-primary">{stat.labelHi}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            ⭐ Client Reviews
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-gold">संतुष्ट ग्राहक</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-border/50 bg-background p-6"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />
              
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="mb-4 text-muted-foreground">"{testimonial.text}"</p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">📍 {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
