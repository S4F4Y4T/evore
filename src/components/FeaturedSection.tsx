'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FeaturedSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative py-32 bg-charcoal/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Text */}
                <div className="order-2 lg:order-1 space-y-8">
                    <span className="text-champagne text-xs tracking-[0.3em] uppercase block mb-4">The Icon</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-ivory leading-[1.1]">
                        EVORÉ NO.01 <br />
                        <span className="text-white/20">Midnight Leather</span>
                    </h2>
                    <p className="text-stone/80 text-lg font-light leading-relaxed max-w-md">
                        Our signature scent. A reckless encounter between smoked leather and sacred iris.
                        Designed for those who leave a mark without saying a word.
                    </p>
                    <div className="pt-8">
                        <Link href="/product/01" className="inline-block border border-ivory/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory hover:border-ivory hover:bg-ivory hover:text-obsidian transition-all duration-300">
                            Discover No.01
                        </Link>
                    </div>
                </div>

                {/* Parallax Image */}
                <div className="order-1 lg:order-2 relative h-[600px] w-full bg-white/5 overflow-hidden">
                    <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%] w-full">
                        <Image
                            src="/images/evore_no1.png"
                            alt="EVORÉ NO.01"
                            fill
                            className="object-cover opacity-80"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
