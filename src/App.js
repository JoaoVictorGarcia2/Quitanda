import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SobreNos from './pages/Sobre'; 
import Produtos from './pages/Produtos'; 
import Contato from './pages/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]); 
  
  const incrementItem = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  
  const decrementItem = (productId) => {
    setCartItems(cartItems
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  };
  

  return (
    <Router>
      <div className="App" style={styles.app}>
        <Header
        cartItems={cartItems}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
      />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
  },
};

export default App;
