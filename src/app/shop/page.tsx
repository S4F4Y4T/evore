import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Shop() {
    return (
        <main className="min-h-screen bg-obsidian pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center space-y-4">
                    <h1 className="text-ivory font-serif text-4xl tracking-wide">The Collection</h1>
                    <div className="flex justify-center gap-8 text-xs tracking-widest uppercase text-stone mt-8">
                        <button className="text-ivory border-b border-ivory pb-1">All Scents</button>
                        <button className="hover:text-ivory transition-colors">Woody</button>
                        <button className="hover:text-ivory transition-colors">Floral</button>
                        <button className="hover:text-ivory transition-colors">Fresh</button>
                        <button className="hover:text-ivory transition-colors">Oriental</button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((product) => (
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

            </div>
        </main>
    );
}
