'use client';

import { useSearch } from '@/context/SearchContext';
import { products } from '@/data/products';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchOverlay() {
    const { isSearchOpen, closeSearch } = useSearch();
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when opened
    useEffect(() => {
        if (isSearchOpen && inputRef.current) {
            // Small timeout to allow animation to start
            setTimeout(() => inputRef.current?.focus(), 100);
        }
        if (!isSearchOpen) {
            setQuery('');
        }
    }, [isSearchOpen]);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.tagline.toLowerCase().includes(query.toLowerCase()) ||
        product.notes.top.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isSearchOpen && (
                <div className="fixed inset-0 z-[80]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeSearch}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Content Container */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-4xl mx-auto pt-32 px-6"
                    >
                        <div className="relative border-b border-white/20">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for a scent, note, or feeling..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent text-3xl md:text-5xl font-serif text-ivory placeholder:text-white/20 py-8 focus:outline-none"
                            />
                            <button onClick={closeSearch} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone hover:text-ivory transition-colors">
                                <X size={32} strokeWidth={1} />
                            </button>
                        </div>

                        {/* Results */}
                        <div className="mt-12">
                            {query && (
                                <p className="text-xs uppercase tracking-widest text-stone mb-8">
                                    {filteredProducts.length} {filteredProducts.length === 1 ? 'Result' : 'Results'}
                                </p>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {query && filteredProducts.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/product/${product.id}`}
                                        onClick={closeSearch}
                                        className="group flex gap-6 items-center hover:bg-white/5 p-4 rounded-lg transition-colors"
                                    >
                                        <div className="relative w-20 aspect-square bg-white/5 rounded-full overflow-hidden flex-shrink-0">
                                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-ivory group-hover:text-champagne transition-colors">{product.name}</h3>
                                            <p className="text-xs text-stone uppercase tracking-widest mt-1">{product.tagline}</p>
                                        </div>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                            <ArrowRight className="text-champagne" />
                                        </div>
                                    </Link>
                                ))}
                                {query && filteredProducts.length === 0 && (
                                    <div className="text-stone/50 italic font-serif text-lg">
                                        No scents found matching your search.
                                    </div>
                                )}
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
