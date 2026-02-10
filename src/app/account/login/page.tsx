'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main className="min-h-screen bg-obsidian flex items-center justify-center p-6">
            <div className="w-full max-w-md space-y-10">

                {/* Header */}
                <div className="text-center space-y-2">
                    <Link href="/" className="text-2xl font-serif tracking-widest text-ivory">EVORÉ</Link>
                    <h2 className="text-sm text-stone uppercase tracking-widest pt-8">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </h2>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    {!isLogin && (
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50 text-ivory" />
                            <input type="text" placeholder="Last Name" className="bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50 text-ivory" />
                        </div>
                    )}

                    <input type="email" placeholder="Email" className="w-full bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50 text-ivory" />
                    <input type="password" placeholder="Password" className="w-full bg-charcoal/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-champagne transition-colors placeholder:text-stone/50 text-ivory" />

                    <div className="flex justify-between items-center text-xs">
                        {isLogin ? (
                            <a href="#" className="text-stone hover:text-ivory transition-colors">Forgot password?</a>
                        ) : (
                            <span className="text-stone">By creating an account, you agree to our Terms.</span>
                        )}
                    </div>

                    <Link
                        href="/account"
                        className="block w-full bg-ivory text-obsidian uppercase tracking-widest text-xs font-bold py-4 hover:bg-champagne transition-colors text-center"
                    >
                        {isLogin ? 'Sign In' : 'Register'}
                    </Link>
                </form>

                {/* Toggle */}
                <div className="text-center pt-6 border-t border-white/5">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-xs text-stone hover:text-ivory transition-colors uppercase tracking-widest"
                    >
                        {isLogin ? 'New to EVORÉ? Create Account' : 'Already have an account? Sign In'}
                    </button>
                </div>

            </div>
        </main>
    );
}
