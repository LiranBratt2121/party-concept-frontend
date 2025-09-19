import React, { useState } from 'react'
import { CategoriesSelectorWrapper, SearchInput, CategoryList, CategoryItem } from './CatagorySelector.styles'

const CatagoriesSelector = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    'בלונים',
    'קישוטים לחגים',
    'כלי הגשה',
    'צעצועים',
    'מתנות',
    'עוגות ומתוקים',
    'תחפושות'
  ];

  const filteredCategories = categories.filter(category =>
    category.includes(searchTerm)
  );

  return (
    <CategoriesSelectorWrapper>
      <SearchInput
        type="text"
        placeholder="חיפוש קטגוריות..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CategoryList>
        {filteredCategories.map((category, index) => (
          <CategoryItem key={index}>
            {category}
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoriesSelectorWrapper>
  )
}

export default CatagoriesSelector;