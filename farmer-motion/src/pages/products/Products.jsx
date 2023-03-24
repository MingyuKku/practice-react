import { Outlet } from 'react-router-dom';
import ProductNav from './ProductNav';
import PageTransition from "../../components/PageTransition";

const Products = () => {
  return (
    <PageTransition>
      <div className="products">
        <div className="page_info">
          <ProductNav />
          <h1>products</h1>
          <Outlet />
        </div>
      </div>
    </PageTransition>
  )
}

export default Products