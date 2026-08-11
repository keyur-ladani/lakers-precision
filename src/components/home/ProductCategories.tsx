import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import productFloorSpring from "@/assets/product-floor-spring.jpg";
import productPatch from "@/assets/product-patch.jpg";
import productLock from "@/assets/product-lock.jpg";
import productSpider from "@/assets/product-spider.jpg";
import productDoorCloser from "@/assets/product-door-closer.jpg";
import slimPartition from "@/assets/slim-partition.jpg";
import productHandle from "@/assets/product-handle.jpg";
import productShower from "@/assets/product-shower.jpg";

const categories = [
  {
    id: "floor-springs",
    name: "Floor Springs",
    description: "Hydraulic patch fittings for heavy-duty glass doors",
    image: productFloorSpring,
  },
  {
    id: "patch-fittings",
    name: "Patch Fittings",
    description: "Premium glass to wall and glass to glass connectors",
    image: productPatch,
  },
  {
    id: "glass-locks",
    name: "Glass Locks",
    description: "Secure locking solutions for frameless glass doors",
    image: productLock,
  },
  {
    id: "spider-fittings",
    name: "Spider Fittings",
    description: "Point fixing systems for structural glass facades",
    image: productSpider,
  },
  {
    id: "door-closers",
    name: "Door Closers",
    description: "Overhead and concealed door closing mechanisms",
    image: productDoorCloser,
  },
  {
    id: "slim-partition",
    name: "Slim Partition",
    description: "a modern interior divider system built with ultra-thin aluminum or stainless steel frames that hold large glass panels",
    image: slimPartition,
  },
  {
    id: "glass-door-handles",
    name: "Glass Door Handles",
    description: "H-Type, D-Type, and S-Type handle designs",
    image: productHandle,
  },
  {
    id: "shower-hinges",
    name: "Shower Hinges",
    description: "Premium bathroom glass enclosure fittings",
    image: productShower,
  },
];

export function ProductCategories() {
  return (
    <section className="py-24 bg-secondary">
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
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Comprehensive Hardware Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From floor springs to spider fittings, we offer a complete range of
            architectural hardware for every project requirement.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={`/products?category=${category.id}`}
                className="group block product-card h-full"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                    View Products
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View All Product Categories
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
