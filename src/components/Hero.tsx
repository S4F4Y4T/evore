export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-obsidian overflow-hidden">
            {/* Background Gradient/Image Placeholder */}
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 scale-105 animate-slow-zoom"
                    style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-ivory font-serif text-5xl md:text-7xl lg:text-9xl tracking-tight opacity-90">
                    EVORÉ
                </h2>
                <p className="text-stone font-light text-sm md:text-base tracking-[0.2em] uppercase animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
                    The Art of Presence
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ivory/20 animate-bounce">
                <span className="text-[10px] tracking-widest uppercase">Explore</span>
            </div>
        </section>
    );
}
