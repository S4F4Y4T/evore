export default function Footer() {
    return (
        <footer className="bg-obsidian text-stone py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm tracking-wide">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <h2 className="text-ivory font-serif text-xl mb-6">EVORÉ</h2>
                    <p className="opacity-60 leading-relaxed">
                        Luxury is not loud.<br />
                        Luxury is felt.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-ivory uppercase text-xs tracking-widest mb-6">Explore</h3>
                    <ul className="space-y-4 opacity-60">
                        <li><a href="#" className="hover:text-ivory transition-colors">Collection</a></li>
                        <li><a href="#" className="hover:text-ivory transition-colors">Philosophy</a></li>
                        <li><a href="#" className="hover:text-ivory transition-colors">Journal</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-ivory uppercase text-xs tracking-widest mb-6">Legal</h3>
                    <ul className="space-y-4 opacity-60">
                        <li><a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-ivory transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-ivory transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-ivory uppercase text-xs tracking-widest mb-6">Newsletter</h3>
                    <form className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-champagne text-ivory transition-colors"
                        />
                        <button className="text-left text-xs uppercase tracking-widest text-ivory hover:text-champagne transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-xs opacity-40 text-center md:text-left">
                &copy; {new Date().getFullYear()} EVORÉ Parfums. All rights reserved.
            </div>
        </footer>
    );
}
