import React from 'react';
import bananaImage from './img/banana.png';
import abacaxiImage from './img/abacaxi.png';
import macaImage from './img/maca.png';
import melanciaImage from './img/melancia.png';
import goiabaImage from './img/goiaba.png';

const productsData = [
  { id: 1, name: 'Banana Prata', price: 4.5, stock: 345.2, image: bananaImage },
  { id: 2, name: 'Abacaxi', price: 4.5, stock: 100.0, image: abacaxiImage },
  { id: 3, name: 'Maçã', price: 4.5, stock: 50.0, image: macaImage },
  { id: 4, name: 'Melancia', price: 4.5, stock: 75.0, image: melanciaImage },
  { id: 5, name: 'Goiaba', price: 4.5, stock: 75.0, image: goiabaImage },
];

const HomePage = ({ cartItems, setCartItems }) => {

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Produtos Disponíveis</h1>
      <div style={styles.productsGrid}>
        {productsData.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3>{product.name}</h3>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            <p>Estoque: {product.stock} kg</p>
            <button onClick={() => addToCart(product)} style={styles.button}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  productsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    width: '200px',
    marginBottom: '20px',
  },
  productImage: {
    width: '150px', 
    height: '150px', 
    objectFit: 'cover', 
    borderRadius: '8px', 
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default HomePage;
