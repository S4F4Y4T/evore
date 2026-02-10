import Link from 'next/link';

export default function Philosophy() {
    return (
        <section className="py-32 px-6 bg-charcoal text-ivory relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Side */}
                <div className="space-y-8 order-2 lg:order-1">
                    <span className="text-xs uppercase tracking-[0.2em] text-champagne block mb-4">Craftsmanship</span>
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wide leading-tight">
                        Rare Ingredients,<br />
                        Slow Aging
                    </h2>
                    <p className="text-stone/80 text-sm leading-relaxed max-w-md">
                        We source natural absolutes from Grasse and rare resins from Oman.
                        Our perfumes are macerated for 6 months to ensure depth and longevity.
                        Mass production is the antithesis of luxury.
                    </p>
                    <div className="pt-8">
                        <Link href="/about" className="text-xs uppercase tracking-widest border-b border-champagne/50 pb-1 hover:text-champagne hover:border-champagne transition-all">
                            Read Our Story
                        </Link>
                    </div>
                </div>

                {/* Image/Visual Side (Placeholder) */}
                <div className="order-1 lg:order-2 relative aspect-square bg-black/40 border border-white/5 p-8 flex items-center justify-center">
                    <div className="text-center opacity-40">
                        <span className="block text-6xl font-serif mb-4">E</span>
                        <span className="text-xs tracking-widest uppercase">Maceration Process</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
