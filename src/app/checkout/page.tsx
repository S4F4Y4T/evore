'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Lock } from 'lucide-react';
import { useState } from 'react';

export default function CheckoutPage() {
    const { cart, cartCount } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);

    const subtotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return acc + price * item.quantity;
    }, 0);

    const shipping = 20; // Flat rate
    const total = subtotal + shipping;

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
        // Here we would typically clear cart and send data to backend
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-obsidian text-ivory flex items-center justify-center p-6">
                <div className="text-center space-y-6 max-w-md">
                    <div className="w-16 h-16 rounded-full bg-champagne text-obsidian flex items-center justify-center mx-auto mb-6">
                        <Check size={32} />
                    </div>
                    <h1 className="text-4xl font-serif">Order Confirmed</h1>
                    <p className="text-stone/80 leading-relaxed">
                        Thank you for choosing EVORÉ. Your order <span className="text-ivory">#EVO-8921</span> has been placed creates a moment of silence in our atelier.
                        We will notify you when it begins its journey.
                    </p>
                    <Link href="/" className="inline-block mt-8 text-xs uppercase tracking-widest border-b border-champagne text-champagne pb-1">
                        Return to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-obsidian text-ivory grid lg:grid-cols-2">

            {/* Left Column: Forms */}
            <div className="p-6 lg:p-20 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/5">

                {/* Header mobile only */}
                <div className="lg:hidden mb-8">
                    <Link href="/" className="text-2xl font-serif tracking-widest text-ivory">EVORÉ</Link>
                </div>

                <div className="max-w-xlg mx-auto space-y-12">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone">
                        <Link href="/shop" className="hover:text-ivory transition-colors">Cart</Link>
                        <span>/</span>
                        <span className="text-ivory">Checkout</span>
                    </div>

                    <form onSubmit={handlePlaceOrder} className="space-y-12">

                        {/* Contact */}
                        <section className="space-y-6">
                            <h2 className="text-lg font-serif">Contact Information</h2>
                            <div className="space-y-4">
                                <input type="email" placeholder="Email" required className="w-full bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="newsletter" className="accent-champagne" />
                                    <label htmlFor="newsletter" className="text-xs text-stone">Email me with news and offers</label>
                                </div>
                            </div>
                        </section>

                        {/* Shipping */}
                        <section className="space-y-6">
                            <h2 className="text-lg font-serif">Shipping Address</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" required className="bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                                <input type="text" placeholder="Last Name" required className="bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                            </div>
                            <input type="text" placeholder="Address" required className="w-full bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                            <div className="grid grid-cols-3 gap-4">
                                <input type="text" placeholder="City" required className="bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                                <input type="text" placeholder="Country" defaultValue="United States" readOnly className="bg-charcoal/50 border border-white/10 p-4 text-sm text-stone/50 cursor-not-allowed" />
                                <input type="text" placeholder="ZIP Code" required className="bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                            </div>
                        </section>

                        {/* Payment (Visual) */}
                        <section className="space-y-6">
                            <h2 className="text-lg font-serif">Payment</h2>
                            <p className="text-xs text-stone mb-4">All transactions are secure and encrypted.</p>
                            <div className="border border-white/10 rounded overflow-hidden">
                                <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10">
                                    <span className="text-sm">Credit Card</span>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-5 bg-white/10 rounded text-[8px] flex items-center justify-center">VISA</div>
                                        <div className="w-8 h-5 bg-white/10 rounded text-[8px] flex items-center justify-center">MC</div>
                                    </div>
                                </div>
                                <div className="p-6 bg-charcoal/30 space-y-4">
                                    <input type="text" placeholder="Card Number" className="w-full bg-obsidian border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Expiration (MM/YY)" className="bg-obsidian border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                                        <input type="text" placeholder="Security Code" className="bg-obsidian border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                                    </div>
                                    <input type="text" placeholder="Name on Card" className="w-full bg-obsidian border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50" />
                                </div>
                            </div>
                        </section>

                        <button type="submit" className="w-full bg-ivory text-obsidian uppercase tracking-widest text-xs font-bold py-5 hover:bg-champagne transition-colors mt-8">
                            Pay Now — ${total.toFixed(2)}
                        </button>

                    </form>

                    <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-stone/40">
                        <p>Protected by EVORÉ Secure Technology</p>
                    </div>
                </div>

            </div>

            {/* Right Column: Summary */}
            <div className="bg-charcoal/20 p-6 lg:p-20 order-1 lg:order-2 lg:sticky lg:top-0 h-fit lg:min-h-screen border-b lg:border-b-0 border-white/5">
                <div className="max-w-md mx-auto lg:ml-0">
                    {/* Logo Desktop */}
                    <div className="hidden lg:block mb-12">
                        <Link href="/" className="text-2xl font-serif tracking-widest text-ivory">EVORÉ</Link>
                    </div>

                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <div className="relative w-16 aspect-square bg-white/5 border border-white/10 rounded overflow-hidden">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    <span className="absolute top-0 right-0 bg-stone/50 text-obsidian text-[10px] w-5 h-5 flex items-center justify-center font-bold rounded-bl">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-serif">{item.name}</h3>
                                    <p className="text-xs text-stone">{item.price}</p>
                                </div>
                                <span className="text-sm text-ivory/80">
                                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(0)}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="my-8 h-[1px] bg-white/5" />

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-stone">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-stone">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="my-8 h-[1px] bg-white/5" />

                    <div className="flex justify-between items-baseline">
                        <span className="text-lg font-serif">Total</span>
                        <span className="text-2xl font-light text-champagne">${total.toFixed(2)}</span>
                    </div>

                </div>
            </div>

        </main>
    );
}
