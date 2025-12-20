import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import {
  Target,
  Eye,
  Shield,
  Award,
  Clock,
  Users,
  MapPin,
  Briefcase,
  Heart,
} from "lucide-react";
import productShower from "@/assets/product-shower.jpg";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "Quality-approved vendors and strict quality checks before every dispatch.",
  },
  {
    icon: Award,
    title: "International Standards",
    description:
      "Products meeting global quality benchmarks for durability and performance.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Committed to delivering your orders on time, every time.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your satisfaction is our priority with personalized service and support.",
  },
  {
    icon: Briefcase,
    title: "Ethical Business",
    description:
      "Transparent and ethical business practices built on trust.",
  },
  {
    icon: Heart,
    title: "Experienced Team",
    description:
      "Skilled workforce with years of industry expertise and knowledge.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mt-4 mb-6">
              Building Trust Through{" "}
              <span className="text-accent">Precision</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              Since 2015, LAKERS has been at the forefront of architectural
              hardware innovation, delivering premium solutions to architects,
              builders, and contractors across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={productShower}
                  alt="Premium shower enclosure"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              {/* Mission */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  In a rapidly changing world, we remain agile and innovative to
                  deliver products that balance price, performance, and consumer
                  delight—becoming the most trusted supplier of happiness through
                  architectural excellence.
                </p>
              </div>

              {/* Vision */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be India's most trusted architectural hardware brand,
                  recognized for innovation, quality, and customer satisfaction
                  in every project we touch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Established in 2015
            </h2>
            <p className="text-muted-foreground text-lg">
              Based in Rajkot, Gujarat—one of India's fastest-growing industrial
              hubs—we've built our reputation on quality, innovation, and
              customer trust.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: "2015", label: "Established" },
              { value: "500+", label: "Products" },
              { value: "1000+", label: "Happy Clients" },
              { value: "15+", label: "Categories" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
          >
            <MapPin className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Headquartered in Rajkot, Gujarat
              </h3>
              <p className="text-muted-foreground">
                Strategic location in India's industrial heartland, enabling
                efficient nationwide distribution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-lg">
              Our commitment to excellence is reflected in every aspect of our
              business operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
