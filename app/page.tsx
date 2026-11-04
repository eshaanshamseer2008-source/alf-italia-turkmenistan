"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Instagram,
  ArrowUpRight,
  Compass,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Clock,
  X,
  Layers,
} from "lucide-react";

const collections = [
  {
    id: "living",
    title: "Living & Entertainment",
    subtitle: "Sophisticated modular units & lacquered surfaces",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    tag: "High Gloss Finish",
  },
  {
    id: "dining",
    title: "Contemporary Dining",
    subtitle: "Curated tables, leather chairs & marble accents",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1200",
    tag: "Calacatta & Bronze",
  },
  {
    id: "bedroom",
    title: "Master Bedrooms",
    subtitle: "Illuminated headboards & ergonomic comfort",
    image:
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&q=80&w=1200",
    tag: "Custom Headboards",
  },
  {
    id: "wardrobes",
    title: "Walk-In Wardrobes",
    subtitle: "Bespoke storage systems engineered in Treviso",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=1200",
    tag: "LED Integrated",
  },
];

const instagramPosts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
    title: "Living Room Symphony",
    likes: "2.4k",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600",
    title: "Minimalist Ashgabat Penthouse",
    likes: "3.1k",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    title: "Veneer & Bronze Detailing",
    likes: "1.9k",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600",
    title: "Dining Atelier Collection",
    likes: "4.2k",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-luxury-900 text-luxury-sand">
      {/* Top Floating Glass Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-5 inset-x-0 mx-auto w-[92%] max-w-7xl z-50 glass-panel rounded-full px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-luxury-bronze/20 border border-luxury-bronze flex items-center justify-center font-serif text-luxury-bronze font-bold text-sm">
            AI
          </div>
          <div>
            <span className="font-serif tracking-widest text-base font-bold uppercase luxury-gradient-text">
              Alf Italia
            </span>
            <span className="text-[10px] tracking-widest text-luxury-muted block font-sans uppercase">
              Turkmenistan
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-luxury-sand/80">
          <a href="#collections" className="hover:text-luxury-bronze transition">
            Collections
          </a>
          <a href="#heritage" className="hover:text-luxury-bronze transition">
            100% Made in Italy
          </a>
          <a href="#showroom" className="hover:text-luxury-bronze transition">
            Showroom
          </a>
          <a
            href="https://www.instagram.com/alfitalia_turkmenistan/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-luxury-bronze hover:underline"
          >
            <Instagram className="w-4 h-4" />
            <span>@alfitalia_turkmenistan</span>
          </a>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-luxury-bronze hover:bg-luxury-bronze-light text-luxury-900 font-semibold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg shadow-luxury-bronze/20"
        >
          Book Consultation
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center px-6 overflow-hidden">
        {/* Subtle Ambient Light Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-bronze/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-luxury-bronze/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-luxury-bronze/30 text-luxury-bronze text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Ashgabat Flagship Atelier
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none font-medium">
              Italian Artistry. <br />
              <span className="italic luxury-gradient-text">Timeless Luxury.</span>
            </h1>

            <p className="text-luxury-muted max-w-xl text-base md:text-lg font-light leading-relaxed">
              Official salon in Turkmenistan presenting Alf Italia’s world-renowned
              contemporary living, dining, and bedroom furniture. 100% crafted in Treviso, Italy.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#collections"
                className="bg-luxury-sand text-luxury-900 px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-luxury-bronze hover:text-luxury-900 transition flex items-center gap-2"
              >
                Explore Catalogue <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/alfitalia_turkmenistan/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="glass-panel px-6 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider text-luxury-sand hover:text-luxury-bronze hover:border-luxury-bronze/50 transition flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" /> View Reels & Gallery
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-luxury-700/60 max-w-lg">
              <div>
                <p className="font-serif text-3xl font-light text-luxury-bronze">1951</p>
                <p className="text-xs uppercase tracking-wider text-luxury-muted mt-1">Italian Heritage</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-light text-luxury-bronze">100%</p>
                <p className="text-xs uppercase tracking-wider text-luxury-muted mt-1">Made in Italy</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-light text-luxury-bronze">Ashgabat</p>
                <p className="text-xs uppercase tracking-wider text-luxury-muted mt-1">Exclusive Showroom</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Floating Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-luxury-bronze/20 aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
                alt="Alf Italia Luxury Interior"
                className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-900/90 via-luxury-900/20 to-transparent" />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 glass-panel px-4 py-2 rounded-xl text-xs flex items-center gap-2 border-luxury-bronze/30 shadow-xl"
              >
                <ShieldCheck className="w-4 h-4 text-luxury-bronze" />
                <span className="font-medium tracking-wide">Certified Italian Excellence</span>
              </motion.div>

              <div className="absolute bottom-6 inset-x-6 glass-panel p-5 rounded-2xl border-luxury-bronze/20">
                <span className="text-[10px] uppercase tracking-widest text-luxury-bronze font-semibold">
                  Featured Masterpiece
                </span>
                <h3 className="font-serif text-xl font-medium mt-1">Novecento Living Area</h3>
                <p className="text-luxury-muted text-xs mt-1">
                  High-gloss warm grey lacquer with polished gold chrome accents.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Moving Marquee */}
      <div className="py-6 bg-luxury-800/80 border-y border-luxury-700/50 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee gap-10 uppercase text-xs tracking-[0.3em] font-medium text-luxury-bronze">
          <span>• 100% Made In Italy</span>
          <span>• Ashgabat Exclusive Salon</span>
          <span>• High-Gloss Lacquers & Veneers</span>
          <span>• Bespoke Architectural Solutions</span>
          <span>• Official Alf Uno S.p.A. Partner</span>
          <span>• 100% Made In Italy</span>
          <span>• Ashgabat Exclusive Salon</span>
          <span>• High-Gloss Lacquers & Veneers</span>
          <span>• Bespoke Architectural Solutions</span>
          <span>• Official Alf Uno S.p.A. Partner</span>
        </div>
      </div>

      {/* Collections Showcase Section */}
      <section id="collections" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-luxury-bronze uppercase tracking-[0.25em] text-xs font-semibold block mb-2">
              Signature Portfolios
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">Curated Collections</h2>
          </div>
          <p className="text-luxury-muted text-sm max-w-md">
            Each composition represents contemporary Italian innovation, blending natural woods,
            marble nuances, and hand-applied multi-layer lacquer finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-luxury-700/50 hover:border-luxury-bronze/40 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[11px] uppercase tracking-wider text-luxury-bronze border-luxury-bronze/30">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl group-hover:text-luxury-bronze transition">
                    {item.title}
                  </h3>
                  <p className="text-luxury-muted text-xs mt-1">{item.subtitle}</p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-11 h-11 rounded-full glass-panel border-luxury-bronze/40 flex items-center justify-center text-luxury-bronze group-hover:bg-luxury-bronze group-hover:text-luxury-900 transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Live Moodboard Showcase */}
      <section className="py-20 bg-luxury-800/40 border-t border-luxury-700/40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <span className="text-luxury-bronze uppercase tracking-[0.25em] text-xs font-semibold block mb-2">
                Social Atelier
              </span>
              <h2 className="font-serif text-3xl md:text-4xl">Follow on Instagram</h2>
            </div>
            <a
              href="https://www.instagram.com/alfitalia_turkmenistan/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="mt-4 md:mt-0 glass-panel px-6 py-2.5 rounded-full text-xs uppercase tracking-widest text-luxury-sand hover:text-luxury-bronze flex items-center gap-2 border-luxury-bronze/30"
            >
              <Instagram className="w-4 h-4 text-luxury-bronze" /> @alfitalia_turkmenistan
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com/alfitalia_turkmenistan/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-xl overflow-hidden aspect-square border border-luxury-700/40"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-xs font-semibold text-white">{post.title}</p>
                  <p className="text-[10px] text-luxury-bronze mt-1">❤️ {post.likes} likes</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom & Contact Location Section */}
      <section id="showroom" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 md:p-14 border-luxury-bronze/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-luxury-bronze uppercase tracking-[0.25em] text-xs font-semibold">
                Ashgabat Experience
              </span>
              <h2 className="font-serif text-3xl md:text-5xl">Visit Our Salon</h2>
              <p className="text-luxury-muted text-sm leading-relaxed">
                Experience authentic Italian materials, tactile wood grains, and precision finishes in
                person. Our design consultants are available for personalized private appointments.
              </p>

              <div className="space-y-4 pt-4 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-luxury-bronze shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-luxury-sand">Ashgabat, Turkmenistan</p>
                    <p className="text-luxury-muted text-xs">Official Alf Italia Representative</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-luxury-bronze shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-luxury-sand">Monday - Sunday</p>
                    <p className="text-luxury-muted text-xs">10:00 AM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-luxury-bronze shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-luxury-sand">Direct Contact & WhatsApp</p>
                    <p className="text-luxury-muted text-xs">+993 (Showroom Direct Line)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-luxury-bronze hover:bg-luxury-bronze-light text-luxury-900 font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition"
                >
                  Schedule Private Viewing
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-luxury-700/60 relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200"
                alt="Showroom Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-900/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-xs text-luxury-sand font-light">
                  <span className="text-luxury-bronze font-semibold uppercase block">Alf Italia Atelier</span>
                  Ashgabat, Turkmenistan Showroom
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-luxury-800 py-12 px-6 text-xs text-luxury-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif tracking-widest text-base font-bold text-luxury-sand uppercase">
              Alf Italia
            </span>
            <span className="text-[10px] tracking-widest uppercase">| Turkmenistan</span>
          </div>
          <p>© {new Date().getFullYear()} Alf Italia Turkmenistan. All rights reserved. 100% Made in Italy.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/alfitalia_turkmenistan/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-luxury-bronze hover:underline"
            >
              Instagram
            </a>
            <a href="https://www.alfitalia.com" target="_blank" rel="noreferrer" className="hover:text-luxury-sand">
              Alf Group Global
            </a>
          </div>
        </div>
      </footer>

      {/* Appointment Consultation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg glass-panel bg-luxury-900 p-8 rounded-3xl border border-luxury-bronze/30 shadow-2xl z-10"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-luxury-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-luxury-bronze text-xs uppercase tracking-widest font-semibold block mb-1">
                Private Consultation
              </span>
              <h3 className="font-serif text-2xl font-medium mb-4">Book Showroom Appointment</h3>
              <p className="text-luxury-muted text-xs mb-6">
                Leave your details and our interior team in Ashgabat will contact you with product catalogues
                and reserve your visit.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Our Ashgabat team will contact you shortly.");
                  setModalOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-luxury-muted block mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Merdan"
                    className="w-full bg-luxury-800 border border-luxury-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-luxury-bronze"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-luxury-muted block mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+993 6..."
                    className="w-full bg-luxury-800 border border-luxury-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-luxury-bronze"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-luxury-muted block mb-1">
                    Category of Interest
                  </label>
                  <select className="w-full bg-luxury-800 border border-luxury-700 rounded-xl px-4 py-2.5 text-sm text-luxury-sand focus:outline-none focus:border-luxury-bronze">
                    <option>Complete Living Room Sets</option>
                    <option>Dining Tables & Chairs</option>
                    <option>Bedrooms & Dressing Rooms</option>
                    <option>Custom Architectural Project</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-luxury-bronze hover:bg-luxury-bronze-light text-luxury-900 font-semibold py-3 rounded-xl text-xs uppercase tracking-widest mt-2 transition"
                >
                  Confirm Request
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
