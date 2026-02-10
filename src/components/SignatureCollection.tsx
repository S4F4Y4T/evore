import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function SignatureCollection() {
    return (
        <section className="py-32 px-6 bg-obsidian">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-ivory font-serif text-3xl mb-20 tracking-wider">The Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </section>
    );
}
