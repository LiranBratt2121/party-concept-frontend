import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/product/ProductPage';
import { findProductById } from '@/utils/productUtils';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = findProductById(await (params).id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Party Concept`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.headImageUrl],
    },
  };
}

// Main page component
export default function Page({ params }: ProductPageProps) {
  const product = findProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}

// Generate static params for known products (optional - for static generation)
export function generateStaticParams() {
  // You can return all your product IDs here for static generation
  // Or return an empty array to generate pages on-demand
  return [];
}