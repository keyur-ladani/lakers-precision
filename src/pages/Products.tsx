import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import productFloorSpring from "@/assets/product-floor-spring.jpg";
import productPatch from "@/assets/product-patch.jpg";
import productLock from "@/assets/product-lock.jpg";
import productSpider from "@/assets/product-spider.jpg";
import productDoorCloser from "@/assets/product-door-closer.jpg";
import productMortise from "@/assets/product-mortise.jpg";
import productHandle from "@/assets/product-handle.jpg";
import productShower from "@/assets/product-shower.jpg";

const categories = [
  { id: "all", name: "All Products" },
  { id: "floor-springs", name: "Floor Springs" },
  { id: "patch-fittings", name: "Patch Fittings" },
  { id: "glass-locks", name: "Glass Locks" },
  { id: "spider-fittings", name: "Spider Fittings" },
  { id: "door-closers", name: "Door Closers" },
  { id: "mortise-handles", name: "Mortise Handles" },
  { id: "glass-door-handles", name: "Glass Door Handles" },
  { id: "shower-hinges", name: "Shower Hinges" },
];

const materials = ["All", "SS 202", "SS 304"];
const finishes = ["All", "Satin", "Glossy", "Combi"];

const products = [
  {
    id: 1,
    name: "Floor Spring LFS-02",
    code: "LFS-02",
    category: "floor-springs",
    material: "SS 304",
    finish: "Satin",
    image: productFloorSpring,
    description: "Heavy-duty hydraulic floor spring for glass doors up to 120kg",
  },
  {
    id: 2,
    name: "Patch Fitting LPF-01",
    code: "LPF-01",
    category: "patch-fittings",
    material: "SS 304",
    finish: "Glossy",
    image: productPatch,
    description: "Glass to glass 180° patch fitting with beveled edges",
  },
  {
    id: 3,
    name: "Glass Lock LGL-05",
    code: "LGL-05",
    category: "glass-locks",
    material: "SS 202",
    finish: "Satin",
    image: productLock,
    description: "Center lock for 10-12mm tempered glass doors",
  },
  {
    id: 4,
    name: "Spider Fitting LSF-04",
    code: "LSF-04",
    category: "spider-fittings",
    material: "SS 304",
    finish: "Glossy",
    image: productSpider,
    description: "4-arm spider connector for structural glazing",
  },
  {
    id: 5,
    name: "Door Closer LDC-03",
    code: "LDC-03",
    category: "door-closers",
    material: "SS 202",
    finish: "Satin",
    image: productDoorCloser,
    description: "Overhead door closer with adjustable closing speed",
  },
  {
    id: 6,
    name: "Mortise Handle LMH-31",
    code: "LMH-31",
    category: "mortise-handles",
    material: "SS 304",
    finish: "Combi",
    image: productMortise,
    description: "Premium lever handle with rose escutcheon",
  },
  {
    id: 7,
    name: "Glass Handle H-Type LGH-01",
    code: "LGH-01",
    category: "glass-door-handles",
    material: "SS 304",
    finish: "Satin",
    image: productHandle,
    description: "H-Type pull handle for frameless glass doors",
  },
  {
    id: 8,
    name: "Shower Hinge LSH-90",
    code: "LSH-90",
    category: "shower-hinges",
    material: "SS 304",
    finish: "Glossy",
    image: productShower,
    description: "90° glass to wall shower hinge with soft close",
  },
  {
    id: 9,
    name: "Floor Spring LFS-03",
    code: "LFS-03",
    category: "floor-springs",
    material: "SS 304",
    finish: "Glossy",
    image: productFloorSpring,
    description: "Premium floor spring with 90° hold open function",
  },
  {
    id: 10,
    name: "Glass Handle D-Type LGH-02",
    code: "LGH-02",
    category: "glass-door-handles",
    material: "SS 202",
    finish: "Satin",
    image: productHandle,
    description: "D-Type curved handle for elegant glass entrances",
  },
  {
    id: 11,
    name: "Patch Fitting LPF-02",
    code: "LPF-02",
    category: "patch-fittings",
    material: "SS 304",
    finish: "Satin",
    image: productPatch,
    description: "Glass to wall 90° patch fitting for partitions",
  },
  {
    id: 12,
    name: "Mortise Handle LMH-45",
    code: "LMH-45",
    category: "mortise-handles",
    material: "SS 304",
    finish: "Glossy",
    image: productMortise,
    description: "Modern slim profile lever handle design",
  },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedFinish, setSelectedFinish] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const selectedCategory = searchParams.get("category") || "all";

  const setCategory = (category: string) => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesMaterial =
        selectedMaterial === "All" || product.material === selectedMaterial;
      const matchesFinish =
        selectedFinish === "All" || product.finish === selectedFinish;
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesMaterial && matchesFinish && matchesSearch;
    });
  }, [selectedCategory, selectedMaterial, selectedFinish, searchQuery]);

  const clearFilters = () => {
    setCategory("all");
    setSelectedMaterial("All");
    setSelectedFinish("All");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedMaterial !== "All" ||
    selectedFinish !== "All" ||
    searchQuery !== "";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mt-4 mb-6">
              Architectural Hardware{" "}
              <span className="text-accent">Collection</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl">
              Explore our comprehensive range of premium stainless steel hardware
              solutions for every architectural need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block w-64 shrink-0"
            >
              <div className="sticky top-28 space-y-8">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Search
                  </label>
                  <div className="relative">
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Categories
                  </label>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Material
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {materials.map((material) => (
                      <button
                        key={material}
                        onClick={() => setSelectedMaterial(material)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedMaterial === material
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finish */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Finish
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {finishes.map((finish) => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedFinish === finish
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="w-full"
                  >
                    <X size={16} />
                    Clear Filters
                  </Button>
                )}
              </div>
            </motion.aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex-1"
              >
                <Filter size={18} />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    !
                  </span>
                )}
              </Button>
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-muted rounded-xl p-6 space-y-6"
              >
                {/* Categories */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Categories
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedCategory === cat.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-foreground"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material & Finish */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Material
                    </label>
                    <select
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    >
                      {materials.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Finish
                    </label>
                    <select
                      value={selectedFinish}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    >
                      {finishes.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                )}
              </motion.div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground text-sm">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground mb-4">
                    No products found matching your criteria.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="product-card group"
                    >
                      {/* Image */}
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
                            {product.code}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                            {product.material}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent-dark font-medium">
                            {product.finish}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
