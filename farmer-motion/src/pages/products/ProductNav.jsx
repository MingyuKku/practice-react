import { Link } from 'react-router-dom';

const ProductNav = () => {
  return (
    <div className='product-nav'>
      <Link to="/products/product-1">프로덕트1</Link>
      <Link to="/products/product-2">프로덕트2</Link>
      <Link to="/products/product-3">프로덕트3</Link>
    </div>
  )
}

export default ProductNav