import React from 'react'
import FilterSidebar from '../components/filterSidebar/FilterSidebar'
import ProductCard from '../components/productCard/ProductCard'

 // ========== HomePage ========== // 
 function HomePage() {
  return (
   <>
      <div className='flex gap-2.5'>
        <FilterSidebar />
        <div className='flex flex-wrap gap-2.5'>
          <ProductCard />
        </div>
      </div>
   
   </>
  )
 }

 export default HomePage