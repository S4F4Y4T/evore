'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ProductCardProps = {
    id: string;
    name: string;
    tagline: string;
    price?: string;
    image?: string;
};

export default function ProductCard({ id, name, tagline, price = "$280", image }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Link href={`/product/${id}`} className="group block cursor-pointer">
                <div className="relative aspect-[3/4] bg-charcoal overflow-hidden mb-6">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" />
                    )}

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Center Text (Initial hidden, appears on hover or just subtle) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <span className="text-ivory text-xs tracking-widest uppercase border border-ivory/30 px-6 py-2 backdrop-blur-sm bg-obsidian/20">
                            View Scent
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-ivory font-serif text-lg tracking-wide mb-1 group-hover:text-champagne transition-colors duration-300">
                        {name}
                    </h3>
                    <p className="text-xs text-stone uppercase tracking-widest mb-2">{tagline}</p>
                    <p className="text-sm text-ivory/60 font-serif italic">{price}</p>
                </div>
            </Link>
        </motion.div>
    );
}
