'use client';

import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-obsidian border-l border-white/10 z-[70] shadow-2xl flex flex-col transform transition-transform duration-500 ease-out">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    <h2 className="text-ivory font-serif text-xl">Your Bag ({cart.length})</h2>
                    <button onClick={toggleCart} className="text-stone hover:text-ivory transition-colors">
                        <X size={24} strokeWidth={1} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {cart.length === 0 ? (
                        <div className="text-center text-stone/50 mt-20">
                            <p className="mb-4">Your bag is empty.</p>
                            <Link
                                href="/shop"
                                onClick={toggleCart}
                                className="text-xs uppercase tracking-widest border-b border-stone/50 pb-1 hover:text-ivory hover:border-ivory transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="relative w-24 aspect-[3/4] bg-charcoal flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-ivory font-serif">{item.name}</h3>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-stone hover:text-red-400 transition-colors"
                                            >
                                                <Trash2 size={16} strokeWidth={1} />
                                            </button>
                                        </div>
                                        <p className="text-sm text-stone mt-1">{item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-ivory">
                                        <span className="text-stone uppercase tracking-widest">Qty: {item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-6 border-t border-white/5 bg-charcoal/30">
                        <div className="flex justify-between text-ivory mb-6 font-serif text-lg">
                            <span>Subtotal</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <button className="w-full bg-ivory text-obsidian py-4 uppercase tracking-widest text-xs font-bold hover:bg-champagne transition-colors">
                            Checkout
                        </button>
                    </div>
                )}

            </div>
        </>
    );
}
