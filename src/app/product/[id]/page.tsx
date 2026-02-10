'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { use } from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen bg-obsidian flex items-center justify-center text-ivory">
                <div className="text-center">
                    <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
                    <Link href="/shop" className="text-sm underline hover:text-champagne">Return to Shop</Link>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image || '/images/evore_no1.png'
        });
    };

    return (
        <main className="min-h-screen bg-obsidian text-ivory pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Image Side */}
                <div className="relative aspect-[3/4] lg:aspect-square bg-charcoal overflow-hidden group">
                    <Image
                        src={product.image || '/images/evore_no1.png'}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Details Side */}
                <div className="space-y-10">

                    <Link href="/shop" className="inline-flex items-center text-xs tracking-widest uppercase text-stone hover:text-ivory transition-colors">
                        <ArrowLeft size={12} className="mr-2" /> Back to Collection
                    </Link>

                    <div className="space-y-2">
                        <span className="text-champagne text-xs tracking-[0.2em] uppercase">{product.tagline}</span>
                        <h1 className="text-4xl md:text-5xl font-serif tracking-wide">{product.name}</h1>
                        <p className="text-2xl font-light text-stone">{product.price}</p>
                    </div>

                    <p className="text-stone/80 leading-relaxed font-light text-sm md:text-base max-w-md">
                        {product.description}
                    </p>

                    <div className="space-y-6 pt-6 border-t border-white/10">
                        <div className="grid grid-cols-3 gap-4 text-xs tracking-widest uppercase text-stone">
                            <div>
                                <span className="block text-ivory/40 mb-1">Top Notes</span>
                                {product.notes.top}
                            </div>
                            <div>
                                <span className="block text-ivory/40 mb-1">Heart Notes</span>
                                {product.notes.heart}
                            </div>
                            <div>
                                <span className="block text-ivory/40 mb-1">Base Notes</span>
                                {product.notes.base}
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 flex gap-6">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-ivory text-obsidian uppercase tracking-widest text-xs font-bold py-4 hover:bg-champagne transition-colors active:scale-95 duration-150"
                        >
                            Add to Bag
                        </button>
                        <button className="border border-white/20 px-6 hover:border-ivory transition-colors">
                            <span className="sr-only">Like</span>
                            ♥
                        </button>
                    </div>

                </div>

            </div>
        </main>
    );
}
