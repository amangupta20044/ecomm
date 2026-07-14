import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="flex h-60 items-center justify-center bg-muted p-5">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain transition-transform hover:scale-105"
          />
        </div>
      </Link>

      <CardContent className="space-y-3 p-4">
        <p className="text-sm font-medium text-primary capitalize">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-lg font-semibold">
          {product.title}
        </h2>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price}
          </span>

          <span className="font-medium text-yellow-500">
            ⭐ {product.rating.rate}
          </span>
        </div>

        <Button className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;