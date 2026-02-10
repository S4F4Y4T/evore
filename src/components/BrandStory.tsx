'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function BrandStory() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="py-32 px-6 bg-obsidian text-center border-t border-white/5 overflow-hidden">
            <motion.div style={{ y, opacity }} className="max-w-3xl mx-auto space-y-12">
                <span className="text-stone text-[10px] tracking-[0.3em] uppercase opacity-70">Philosophy</span>

                <h3 className="text-2xl md:text-3xl lg:text-4xl text-ivory font-serif leading-relaxed tracking-wide opacity-90">
                    Luxury is not loud. <br />
                    Luxury is felt.
                </h3>

                <div className="w-12 h-[1px] bg-champagne/40 mx-auto" />

                <p className="text-stone/70 leading-loose text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
                    EVORÉ believes fragrance is an identity, not an accessory.
                    Each scent is designed to linger—on skin, in memory, in presence.
                </p>
            </motion.div>
        </section>
    );
}
