// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/How_it_works'
import Categories from './pages/Categories'
// import About from './Pages/About';
// import Products from './Pages/Products';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/howitworks" element={<HowItWorks />} />
           
       </Routes>
    </>
 );
};

export default App;