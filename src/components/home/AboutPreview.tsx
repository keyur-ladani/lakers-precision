import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import productHandle from "@/assets/product-handle.jpg";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "International quality standards with SS 202 & SS 304 materials",
  },
  {
    icon: Shield,
    title: "Trusted Brand",
    description: "Serving architects and builders since 2015",
  },
  {
    icon: Settings,
    title: "Precision Engineering",
    description: "Advanced manufacturing with strict quality controls",
  },
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productHandle}
                alt="Premium stainless steel door handle"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-primary/95 backdrop-blur-sm rounded-xl px-6 py-4 text-primary-foreground">
                <div className="text-3xl font-heading font-bold text-accent">
                  10+
                </div>
                <div className="text-sm text-primary-foreground/80">
                  Years of Excellence
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-accent/30 rounded-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              About Allen
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              Engineering Excellence in{" "}
              <span className="text-primary">Architectural Hardware</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              In a rapidly changing world, we remain agile and innovative to
              deliver products that balance price, performance, and consumer
              delight—becoming the most trusted supplier of architectural
              hardware solutions.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
