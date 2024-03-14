import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import AnalysisPage from './components/Analysis/AnalysisPage';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import NewOrder from './components/OrderSystem/NewOrder';
import OrderDetails from './components/OrderSystem/OrderDetails';
import CheckedOrders from './components/OrderSystem/CheckedOrders';
import CheckedOrdersDetails from './components/OrderSystem/CheckedOrdersDetails';
import DoneOrders from './components/OrderSystem/DoneOrders';
import DoneOrdersDetails from './components/OrderSystem/DoneOrdersDetails';
import RejectedOrders from './components/OrderSystem/RejectedOrders';
import RejectedOrdersDetails from './components/OrderSystem/RejectedOrdersDetails';
import AddFilter from './components/Filter/AddFilter';
import Coupon from './components/Coupon/Coupon';
import DiscountBrand from './components/Brands/DiscountBrand';
function App() {
  return (
    <div className='App'>

      <Navbar />
      <Routes>
        <Route index path="/" element={<OrderDetails />} />
        <Route path="/product" element={<Products />} />
        <Route path="/order/new" element={<NewOrder />} />
        <Route path="/order/new/details/:orderId" element={<OrderDetails />} />
        <Route path="/order/checked" element={<CheckedOrders />} />
        <Route path="/order/checked/details" element={<CheckedOrdersDetails />} />
        <Route path="/order/done" element={<DoneOrders />} />
        <Route path="/order/done/details" element={<DoneOrdersDetails />} />
        <Route path="/order/rejected" element={<RejectedOrders />} />
        <Route path="/order/rejected/details" element={<RejectedOrdersDetails />} />
        <Route path="/filter" element={<AddFilter />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/discountbrand" element={<DiscountBrand />} />
      </Routes>
    </div>
  );
}

export default App;
