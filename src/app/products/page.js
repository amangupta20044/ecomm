import ProductCard from "@/components/ProductCard";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;