'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All Scents', 'Woody', 'Floral', 'Fresh', 'Oriental'];

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState('All Scents');

    const filteredProducts = activeCategory === 'All Scents'
        ? products
        : products.filter((product) =>
            product.scent_profile.toLowerCase().includes(activeCategory.toLowerCase())
        );

    return (
        <main className="min-h-screen bg-obsidian pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center space-y-4">
                    <h1 className="text-ivory font-serif text-4xl tracking-wide">The Collection</h1>
                    <div className="flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase text-stone mt-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`pb-1 transition-all duration-300 ${activeCategory === category
                                        ? 'text-ivory border-b border-ivory'
                                        : 'text-stone hover:text-ivory border-b border-transparent'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    tagline={product.tagline}
                                    price={product.price}
                                    image={product.image}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-stone italic">No scents found in this category.</p>
                    </div>
                )}

            </div>
        </main>
    );
}
