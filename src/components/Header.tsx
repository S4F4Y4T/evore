'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useSearch } from '@/context/SearchContext';

export default function Header() {
    const { toggleCart, cartCount } = useCart();
    const { openSearch } = useSearch();

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Mobile Menu */}
                <button className="md:hidden text-ivory hover:text-champagne transition-colors">
                    <Menu strokeWidth={1} />
                </button>

                {/* Desktop Nav - Left */}
                <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-stone">
                    <Link href="/shop" className="hover:text-ivory transition-colors">SHOP</Link>
                    <Link href="/about" className="hover:text-ivory transition-colors">ABOUT</Link>
                    <Link href="/wishlist" className="hover:text-ivory transition-colors">WISHLIST</Link>
                </nav>

                {/* Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <h1 className="text-2xl font-serif tracking-widest text-ivory">EVORÉ</h1>
                </Link>

                {/* Icons - Right */}
                <div className="flex items-center gap-6 text-ivory">
                    <button onClick={openSearch} className="hover:text-champagne transition-colors">
                        <Search size={20} strokeWidth={1} />
                    </button>
                    <Link href="/account" className="hover:text-champagne transition-colors">
                        <User size={20} strokeWidth={1} />
                    </Link>
                    <button onClick={toggleCart} className="hover:text-champagne transition-colors relative">
                        <ShoppingBag size={20} strokeWidth={1} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-champagne text-obsidian text-[9px] font-bold w-3 h-3 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
