import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import CarDisplay from './Components/CarDisplay/CarDisplay';
import Benefits from './Components/Benefits/Benefits';
import CarView from './Components/CarView/CarView';
import LoginSignup from './Components/LoginSignup/Login';
import Cart from './Pages/cart'; // Import the Cart page
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('All');
  const [showLogin, setShowLogin] = useState(false);

  const location = useLocation(); // Get current route

  const isCarViewPage = location.pathname.startsWith('/CarView'); // Check if it's the CarView page
  const isCartPage = location.pathname === '/Cart'; // Check if it's the Cart page

  return (
    <>
      {showLogin && <LoginSignup setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} /> {/* Always show Navbar */}
      <div className="App">
        {/* Only show these components if not on the Cart or CarView page */}
        {!isCarViewPage && !isCartPage && (
          <>
            <Hero />
            <Explore category={category} setCategory={setCategory} />
            <CarDisplay category={category} />
            <Benefits />
          </>
        )}

        <Routes>
          <Route path="/CarView/:id" element={<CarView />} />
          <Route path="/Cart" element={<Cart />} /> 
        </Routes>
      </div>
      <Footer /> {/* Always show Footer */}
    </>
  );
}

export default App;
