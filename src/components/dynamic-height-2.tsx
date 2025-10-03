import { useVirtualizer } from '@tanstack/react-virtual';
import { useState, useEffect, useRef } from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type ProductCardProps = {
  product: Product;
  isExpanded: boolean;
  onToggleExpanded: () => void;
};

export default function DynamicHeight2(): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const scrollElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=200');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const toggleExpanded = (productId: number): void => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const virtualizer = useVirtualizer({
    count: products.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => 10,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div ref={scrollElementRef} className='flex-1 overflow-auto border border-gray-200 px-2'>
      <div className='relative' style={{ height: `${virtualizer.getTotalSize()}px` }}>
        <div
          className='absolute top-0 left-0 w-full'
          style={{ transform: `translateY(${virtualItems?.[0]?.start || 0}px)` }}
        >
          {virtualItems.map((virtualItem) => {
            const product = products[virtualItem.index];

            return (
              <div
                key={virtualItem.key}
                data-index={virtualItem.index}
                ref={virtualizer.measureElement}
                className='my-5'
              >
                <ProductCard
                  key={virtualItem.index}
                  product={product}
                  isExpanded={expandedItems.has(product.id)}
                  onToggleExpanded={() => toggleExpanded(product.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ProductCard = ({
  product,
  isExpanded,
  onToggleExpanded,
}: ProductCardProps): React.JSX.Element => {
  return (
    <div className='rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full bg-white'>
      <div className='p-4 cursor-pointer' onClick={onToggleExpanded}>
        <h2 className='text-lg font-semibold text-gray-900 mb-2 line-clamp-2'>{product.title}</h2>
        <p className='text-gray-600 text-sm line-clamp-3 truncate'>{product.description}</p>
      </div>

      {isExpanded && (
        <div className='px-4 pb-4 border-t border-gray-100'>
          <div className='pt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-3'>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='w-full h-max object-cover rounded-lg'
              />
              <div className='flex gap-2 overflow-x-auto'>
                {product.images.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className='w-16 h-16 object-cover rounded border border-gray-200 flex-shrink-0'
                  />
                ))}
              </div>
            </div>

            <div className='space-y-3'>
              <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold text-green-600'>${product.price}</span>
                <span className='text-sm text-gray-500'>Stock: {product.stock}</span>
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-yellow-500'>★</span>
                <span className='text-sm text-gray-600'>{product.rating}</span>
                <span className='text-sm text-gray-400'>•</span>
                <span className='text-sm text-gray-500'>{product.brand}</span>
              </div>

              <div className='text-sm text-gray-600'>
                <p>
                  <span className='font-medium'>Category:</span> {product.category}
                </p>
                <p>
                  <span className='font-medium'>Discount:</span> {product.discountPercentage}%
                </p>
              </div>

              <div className='text-sm text-gray-600'>
                <p className='font-medium'>Full Description:</p>
                <p className='mt-1'>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
