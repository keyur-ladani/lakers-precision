import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Sparkles,
  Palette,
  Package,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "All products manufactured with the highest quality standards and rigorous testing.",
  },
  {
    icon: Shield,
    title: "International Standards",
    description:
      "Products meet international quality benchmarks for durability and performance.",
  },
  {
    icon: Sparkles,
    title: "SS 202 & SS 304",
    description:
      "Premium stainless steel grades ensuring corrosion resistance and longevity.",
  },
  {
    icon: Palette,
    title: "Multiple Finishes",
    description:
      "Available in Satin, Glossy, and Combi finishes to match any design aesthetic.",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description:
      "500+ products across 15+ categories for complete project solutions.",
  },
  {
    icon: Users,
    title: "Trusted by Experts",
    description:
      "Preferred choice of architects, builders, and contractors across India.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Why LAKERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Why Choose LAKERS?
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the difference of working with a trusted partner committed
            to excellence in every detail.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 rounded-2xl bg-primary p-10 md:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Get in touch with our team for personalized recommendations and
            competitive pricing on all your hardware needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg shadow-gold hover:bg-accent-light transition-all duration-300"
            >
              Request a Quote
            </a>
            <a
              href="tel:+919033494363"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground font-medium px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
