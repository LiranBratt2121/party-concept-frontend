"use client";

import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { featuredProducts } from '@/lib/data';
import * as S from './ProductPage.styles';
import { getRelatedProducts } from '@/utils/productUtils';
import Carousel from '../Shared/Carousel/Carousel';
import Breadcrumb from '../common/BreadCrumps';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);

  // Generate multiple images (simulate gallery)
  const images = [product.headImageUrl, ...product.additionalImageUrls ?? []];

  // Get related products from the same category
  const relatedProducts = getRelatedProducts(product);

  const handleAddToCart = () => {
    // Implement your cart logic here
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  const handleWishlistToggle = () => {
    setIsWishlist(!isWishlist);
    // Implement your wishlist logic here
    console.log(`${isWishlist ? 'Removed from' : 'Added to'} wishlist: ${product.name}`);
  };

  return (
    <S.Container>
        <Breadcrumb
          items={[
            { label: 'עמוד הבית', href: '/' },
            { label: product.category.name, href: `/product/${encodeURIComponent(product.category.name)}` },
            { label: product.name }
          ]}
        />
      <S.ProductGrid>
        {/* Product Images */}
        <S.ImageSection>
          <S.MainImage>
            <img src={images[selectedImage]} alt={product.name} />
          </S.MainImage>
          <S.ThumbnailGrid>
            {images.map((img, idx) => (
              <S.Thumbnail
                key={idx}
                active={selectedImage === idx}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={img} alt="" />
              </S.Thumbnail>
            ))}
          </S.ThumbnailGrid>
        </S.ImageSection>

        {/* Product Info */}
        <S.ProductInfo>
          <S.ProductHeader>
            <h1>{product.name}</h1>
            <S.ProductMeta>
              <span>קטגוריה: {product.category.name}</span>
              <span>•</span>
              <span>קוד מוצר: {product.id}</span>
            </S.ProductMeta>
          </S.ProductHeader>

          <S.PriceSection>
            <S.Price>₪{product.priceShekel}</S.Price>
            <S.PriceNote>מחיר כולל מע"ם • משלוח חינם מעל ₪150</S.PriceNote>
          </S.PriceSection>

          <S.DescriptionBox>
            <h3>תיאור המוצר</h3>
            <p>{product.description}</p>
          </S.DescriptionBox>

          <S.ActionSection>
            <S.QuantitySelector>
              <label>כמות:</label>
              <S.QuantityControls>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </S.QuantityControls>
            </S.QuantitySelector>

            <S.ButtonGroup>
              <S.AddToCartButton onClick={handleAddToCart}>
                <ShoppingCart size={20} />
                הוסף לעגלה
              </S.AddToCartButton>
              <S.WishlistButton
                active={isWishlist}
                onClick={handleWishlistToggle}
              >
                <Heart size={20} fill={isWishlist ? "currentColor" : "none"} />
              </S.WishlistButton>
            </S.ButtonGroup>
          </S.ActionSection>

          <S.ContactSection>
            <h3>יש לך שאלות על המוצר?</h3>
            <p>
              <a href="tel:054-790-0070">📞 054-790-0070</a> | <a href="mailto:info@partyconcept.co.il">📧 info@partyconcept.co.il</a>
            </p>
          </S.ContactSection>
        </S.ProductInfo>
      </S.ProductGrid>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <S.RelatedProducts>
          <h2>מוצרים קשורים</h2>
          <S.ProductGrid4>
            <Carousel>
              {relatedProducts.map((relProduct) => (
                <S.ProductCard key={relProduct.id}>
                  <img src={relProduct.headImageUrl} alt={relProduct.name} />
                  <div className="content">
                    <h3>{relProduct.name}</h3>
                    <div className="price">₪{relProduct.priceShekel}</div>
                  </div>
                </S.ProductCard>
              ))}
            </Carousel>
          </S.ProductGrid4>
        </S.RelatedProducts>
      )
      }
    </S.Container >
  );
};

export default ProductPage;