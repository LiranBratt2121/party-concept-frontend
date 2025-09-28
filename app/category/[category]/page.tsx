import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { findCategoryByName, getAllCategories, getProductsByCategory } from '@/utils/categoryUtils';
import CategoryPage from '@/components/catagory/CatagoryPage';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    // Await the params object first
    const { category } = await params;
    console.log('Raw category param in metadata:', category);
    
    const decodedCategory = decodeURIComponent(category);
    console.log('Decoded category in metadata:', decodedCategory);
    
    const categoryData = findCategoryByName(decodedCategory);
    console.log('Category found in metadata:', !!categoryData);

    if (!categoryData) {
        return {
            title: 'Category Not Found - Party Concept',
            description: 'The requested category was not found.',
        };
    }

    return {
        title: `${decodedCategory} - Party Concept`,
        description: `עיין בכל המוצרים בקטגוריית ${decodedCategory} בפארטי קונספט.`,
        openGraph: {
            title: decodedCategory,
            description: `כל המוצרים והאביזרים למסיבה בקטגוריית ${decodedCategory}.`,
            images: [categoryData.imageUrl],
        },
    };
}

export default async function Page({ params }: CategoryPageProps) {
    // Await the params object first
    const { category } = await params;
    console.log('Raw category param in page:', category);
    
    const decodedCategory = decodeURIComponent(category);
    console.log('Decoded category in page:', decodedCategory);
    
    const categoryData = findCategoryByName(decodedCategory);
    console.log('Category found in page:', !!categoryData);
    
    if (!categoryData) {
        console.log('Category not found - calling notFound()');
        notFound();
    }
    
    const products = getProductsByCategory(decodedCategory);
    console.log('Products found:', products?.length || 0);

    return <CategoryPage category={categoryData} products={products} />;
}

export async function generateStaticParams() {
    console.log('Generating static params for categories...');
    const categories = getAllCategories();
    
    const params = categories.map((cat) => {
        const encoded = encodeURIComponent(cat.name);
        console.log(`Static param: "${cat.name}" -> "${encoded}"`);
        return {
            category: encoded,
        };
    });
    
    console.log('Total static params generated:', params.length);
    return params;
}