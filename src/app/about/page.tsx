export default function About() {
    return (
        <main className="bg-obsidian min-h-screen text-ivory">

            {/* Hero */}
            <section className="h-[70vh] flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-6 z-10 p-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-champagne block animate-fade-in">Our Philosophy</span>
                    <h1 className="text-5xl md:text-7xl font-serif tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Silence Speaks
                    </h1>
                    <p className="max-w-lg mx-auto text-stone/80 text-sm md:text-base leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        In a world of noise, we choose quiet. In an era of instant gratification, we choose patience.
                    </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 to-obsidian" />
            </section>

            {/* Craftsmanship */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-champagne">The Process</h2>
                        <div className="space-y-6 text-stone/80 text-sm leading-loose">
                            <p>
                                Every bespoke creation begins with raw materials of exceptional provenance.
                                We do not synthesize what nature has already perfected.
                            </p>
                            <p>
                                Our maceration process extends beyond industry standards—six months minimum—allowing the volatile oils to marry and mature into something profound.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-white/5 relative p-8 border border-white/5 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne/10 to-transparent opacity-50" />
                        <span className="font-serif text-9xl opacity-10">06</span>
                        <span className="absolute bottom-8 text-xs uppercase tracking-widest text-white/40">Months of Maceration</span>
                    </div>
                </div>
            </section>

            {/* Manifesto */}
            <section className="py-32 bg-ivory text-obsidian text-center px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl font-serif">The Manifesto</h2>
                    <p className="text-lg font-light leading-relaxed">
                        "We believe perfume is not a mask, but a revelation.
                        It is the invisible architecture of your presence.
                        We craft for the few who understand that true luxury is felt, not seen."
                    </p>
                    <div className="pt-8">
                        <span className="font-serif italic text-xl">— The Founder</span>
                    </div>
                </div>
            </section>

        </main>
    );
}
