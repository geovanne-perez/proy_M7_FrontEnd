import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Landing';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import ProductsList from '../pages/products/ProductsList';
// import Checkout from '../pages/Checkout';
// import ProductDetail from '../pages/products/ProductDetail';
// import Profile from '../pages/Profile';

function PrivateRoute() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/404" element={<NotFound />} />
            {/* <Route path="/checkout" element={<Checkout />} />*/}
            {/* <Route path="/detail-product/:id" element={<ProductDetail />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}


            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/404" />} /> 
        </Routes>
    );
}

export default PrivateRoute;