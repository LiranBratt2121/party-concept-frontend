/** @jsxImportSource @emotion/react */
'use client';

import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const BreadcrumbContainer = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
  
  .breadcrumb-path {
    font-size: 14px;
    color: #666;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
    a {
      color: #e91e63;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #ad1457;
        text-decoration: underline;
      }
    }
    
    span {
      margin: 0 8px;
      color: #999;
    }
    
    .current {
      color: #333;
      font-weight: 500;
    }
  }
`;

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbContainer>
      <div className="breadcrumb-path">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <Link href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="current">{item.label}</span>
            )}
            {index < items.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;