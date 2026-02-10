'use client';

import { useWishlist } from '@/context/WishlistContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function WishlistPage() {
    const { wishlist } = useWishlist();

    // Find products that are in the wishlist
    const wishlistProducts = products.filter((product) => wishlist.includes(product.id));

    return (
        <main className="min-h-screen bg-obsidian pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="mb-20 text-center space-y-4">
                    <h1 className="text-ivory font-serif text-4xl tracking-wide">Your Wishlist</h1>
                    <p className="text-stone text-sm tracking-widest uppercase">
                        {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'} Saved
                    </p>
                </div>

                {wishlist.length === 0 ? (
                    <div className="text-center py-20 border-t border-white/5">
                        <p className="text-ivory/60 font-serif text-xl mb-8">Your list is empty.</p>
                        <Link href="/shop" className="text-xs uppercase tracking-widest border-b border-ivory/50 pb-1 text-ivory hover:text-champagne hover:border-champagne transition-colors">
                            Explore the Collection
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {wishlistProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                tagline={product.tagline}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                )}

            </div>
        </main>
    );
}
