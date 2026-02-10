'use client';

import Link from 'next/link';
import { Package, MapPin, User, LogOut } from 'lucide-react';
import { useState } from 'react';

type Tab = 'orders' | 'addresses' | 'profile';

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<Tab>('orders');

    return (
        <main className="min-h-screen bg-obsidian pt-32 pb-20 px-6 text-ivory">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[250px_1fr] gap-12">

                {/* Sidebar */}
                <aside className="space-y-8">
                    <h1 className="text-3xl font-serif">My Account</h1>
                    <nav className="flex flex-col gap-4 text-sm tracking-widest uppercase text-stone">
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`text-left transition-colors ${activeTab === 'orders' ? 'text-ivory' : 'hover:text-ivory'}`}
                        >
                            Orders
                        </button>
                        <button
                            onClick={() => setActiveTab('addresses')}
                            className={`text-left transition-colors ${activeTab === 'addresses' ? 'text-ivory' : 'hover:text-ivory'}`}
                        >
                            Addresses
                        </button>
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`text-left transition-colors ${activeTab === 'profile' ? 'text-ivory' : 'hover:text-ivory'}`}
                        >
                            Profile
                        </button>
                        <Link href="/account/login" className="hover:text-ivory transition-colors mt-8 pt-8 border-t border-white/10 flex items-center gap-2">
                            <LogOut size={14} /> Log Out
                        </Link>
                    </nav>
                </aside>

                {/* Content */}
                <div className="min-h-[500px]">

                    {/* ORDERS VIEW */}
                    {activeTab === 'orders' && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <h2 className="text-sm uppercase tracking-widest text-stone mb-8 flex items-center gap-2">
                                <Package size={16} /> Order History
                            </h2>

                            {/* Active Order */}
                            <div className="bg-charcoal/30 border border-white/5 p-6 space-y-6">
                                <div className="flex flex-wrap justify-between items-start gap-4 pb-6 border-b border-white/5">
                                    <div>
                                        <span className="text-xs text-stone block mb-1">Order Placed</span>
                                        <span className="text-sm">February 14, 2026</span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-stone block mb-1">Total</span>
                                        <span className="text-sm">$310.00</span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-stone block mb-1">Order #</span>
                                        <span className="text-sm">EVO-8921</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/5 flex items-center justify-center">
                                        <Package className="text-stone opacity-50" strokeWidth={1} />
                                    </div>
                                    <div>
                                        <p className="font-serif text-lg">In Transit</p>
                                        <p className="text-xs text-stone">Expected delivery Feb 18</p>
                                    </div>
                                    <button className="ml-auto text-xs uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white/5 transition-colors">
                                        Track
                                    </button>
                                </div>
                            </div>

                            {/* Past Order */}
                            <div className="bg-charcoal/10 border border-white/5 p-6 opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-xs text-stone block mb-1">Delivered Jan 02, 2026</span>
                                        <span className="text-sm">Order #EVO-7743</span>
                                    </div>
                                    <span className="text-sm">$280.00</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ADDRESSES VIEW */}
                    {activeTab === 'addresses' && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-sm uppercase tracking-widest text-stone flex items-center gap-2">
                                    <MapPin size={16} /> Addresses
                                </h2>
                                <button className="text-xs uppercase tracking-widest border-b border-ivory pb-1 hover:text-champagne hover:border-champagne transition-colors">
                                    Add New
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border border-champagne/50 p-6 relative bg-charcoal/20">
                                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-champagne text-obsidian px-2 py-1 font-bold">Default</span>
                                    <h3 className="font-serif text-lg mb-4">Jane Doe</h3>
                                    <address className="not-italic text-stone text-sm space-y-1">
                                        <p>123 Luxury Lane, Apt 4B</p>
                                        <p>New York, NY 10013</p>
                                        <p>United States</p>
                                    </address>
                                    <div className="mt-6 flex gap-4 text-xs uppercase tracking-widest">
                                        <button className="hover:text-champagne transition-colors">Edit</button>
                                        <button className="text-red-400 hover:text-red-300 transition-colors">Delete</button>
                                    </div>
                                </div>

                                <div className="border border-white/10 p-6 relative hover:border-white/30 transition-colors">
                                    <h3 className="font-serif text-lg mb-4">Jane Doe (Office)</h3>
                                    <address className="not-italic text-stone text-sm space-y-1">
                                        <p>456 Business Blvd, Suite 200</p>
                                        <p>San Francisco, CA 94107</p>
                                        <p>United States</p>
                                    </address>
                                    <div className="mt-6 flex gap-4 text-xs uppercase tracking-widest">
                                        <button className="hover:text-champagne transition-colors">Edit</button>
                                        <button className="text-red-400 hover:text-red-300 transition-colors">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* PROFILE VIEW */}
                    {activeTab === 'profile' && (
                        <div className="space-y-8 animate-in fade-in duration-500 max-w-lg">
                            <h2 className="text-sm uppercase tracking-widest text-stone mb-8 flex items-center gap-2">
                                <User size={16} /> Profile Details
                            </h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs text-stone uppercase tracking-widest">First Name</label>
                                        <input type="text" defaultValue="Jane" className="w-full bg-charcoal/50 border border-white/10 p-3 text-sm focus:border-champagne focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-stone uppercase tracking-widest">Last Name</label>
                                        <input type="text" defaultValue="Doe" className="w-full bg-charcoal/50 border border-white/10 p-3 text-sm focus:border-champagne focus:outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-stone uppercase tracking-widest">Email</label>
                                    <input type="email" defaultValue="jane.doe@example.com" className="w-full bg-charcoal/50 border border-white/10 p-3 text-sm focus:border-champagne focus:outline-none transition-colors" />
                                </div>

                                <div className="pt-8 border-t border-white/5 space-y-6">
                                    <h3 className="text-sm font-serif">Change Password</h3>
                                    <div className="space-y-2">
                                        <label className="text-xs text-stone uppercase tracking-widest">Current Password</label>
                                        <input type="password" className="w-full bg-charcoal/50 border border-white/10 p-3 text-sm focus:border-champagne focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-stone uppercase tracking-widest">New Password</label>
                                        <input type="password" className="w-full bg-charcoal/50 border border-white/10 p-3 text-sm focus:border-champagne focus:outline-none transition-colors" />
                                    </div>
                                </div>

                                <button className="bg-ivory text-obsidian uppercase tracking-widest text-xs font-bold py-4 px-8 hover:bg-champagne transition-colors">
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    )}

                </div>

            </div>
        </main>
    );
}
