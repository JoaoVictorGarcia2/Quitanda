import React, { useState } from 'react';
import Logo from './img/logo.png';
import CartIcon from './img/carrinho-de-compras.png';
import { Link } from 'react-router-dom';

const Header = ({ cartItems, incrementItem, decrementItem }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img style={styles.logoimg} src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link style={styles.navLink} to="/">Home</Link></li>
          <li style={styles.navItem}><Link style={styles.navLink} to="/produtos">Produtos</Link></li>
          <li style={styles.navItem}><Link style={styles.navLink} to="/contato">Contato</Link></li>
          <li style={styles.navItem}><Link style={styles.navLink} to="/sobre">Sobre nós</Link></li>
          <li
            style={styles.cartItem}
            onMouseEnter={() => setIsCartVisible(true)}
            onMouseLeave={() => setIsCartVisible(false)}
          >
            <img src={CartIcon} alt="Carrinho" style={styles.cartIcon} />
            {isCartVisible && (
              <div
                style={styles.cartDropdown}
                onMouseEnter={() => setIsCartVisible(true)} 
                onMouseLeave={() => setIsCartVisible(false)} 
              >
                <h4>Carrinho</h4>
                <ul style={styles.cartList}>
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <li key={index}>
                        {item.name} - R$ {(item.price * item.quantity).toFixed(2)}
                        <div style={styles.quantityControls}>
                          <button onClick={() => decrementItem(item.id)} style={styles.quantityButton}>-</button>
                          {item.quantity}
                          <button onClick={() => incrementItem(item.id)} style={styles.quantityButton}>+</button>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>O carrinho está vazio</li>
                  )}
                </ul>
                <div style={styles.cartTotal}>
                  Total: R$ {calculateTotal()}
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#e63946',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    height: '80px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoimg: {
    width: '85px',
    height: '85px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '50px',
  },
  navItem: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  cartItem: {
    position: 'relative',
    cursor: 'pointer',
  },
  cartIcon: {
    width: '40px',
    height: '40px',
  },
  cartDropdown: {
    position: 'absolute',
    top: '50px',
    right: 0,
    backgroundColor: '#fff',
    color: '#333',
    padding: '10px',
    border: '1px solid #ddd',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
    width: '200px',
  },
  cartList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  cartTotal: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  quantityControls: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60px',
  },
  quantityButton: {
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
  }
};

export default Header;
