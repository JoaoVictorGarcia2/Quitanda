import React, { useState } from 'react';
import macaVerde from './img/macaverde.png';
import abacaxiImage from './img/abacaxi.png';
import macaImage from './img/maca.png';
import melanciaImage from './img/melancia.png';
import Abacate from './img/abacate.png';
import Laranja from './img/laranja.png';
import LaranjaP from './img/laranjapalma.png';
import Morango from './img/morango.png';
import Limao from './img/limao.png';
import Uva from './img/uva.png';
import heartIcon from './img/coracao (1).png';  
import heartIconFilled from './img/coracao.png'; 

const productsData = [
  { id: 1, name: 'Maça verde', price: 4.5, stock: 345.2, image: macaVerde, description: 'Maçã verde suculenta e crocante.' },
  { id: 2, name: 'Abacaxi', price: 4.5, stock: 100.0, image: abacaxiImage, description: 'Abacaxi doce e refrescante.' },
  { id: 3, name: 'Maçã', price: 4.5, stock: 50.0, image: macaImage, description: 'Maçã fresca de qualidade.' },
  { id: 6, name: 'Abacate', price: 4.5, stock: 345.2, image: Abacate, description: 'Abacate cremoso e nutritivo.' },
  { id: 7, name: 'Morango', price: 4.5, stock: 100.0, image: Morango, description: 'Morango doce e suculento.' },
  { id: 8, name: 'Limao', price: 4.5, stock: 50.0, image: Limao, description: 'Limão fresco para sucos.' },
  { id: 9, name: 'Laranja Palma', price: 4.5, stock: 75.0, image: LaranjaP, description: 'Laranja doce e suculenta.' },
  { id: 10, name: 'Laranja', price: 4.5, stock: "ESGOTADO", image: Laranja, description: 'Laranja fresquinha.' },
  { id: 4, name: 'Melancia', price: 4.5, stock: "ESGOTADO", image: melanciaImage, description: 'Melancia doce e refrescante.' },
  { id: 5, name: 'Uva', price: 4.5, stock: "ESGOTADO", image: Uva, description: 'Uvas frescas e doces.' },
];

const HomePage = ({ cartItems, setCartItems }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

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
            <div style={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />
              <img
                src={favorites.includes(product.id) ? heartIconFilled : heartIcon}
                alt="Favorite"
                style={styles.heartIcon}
                onClick={() => toggleFavorite(product.id)}
              />
            </div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <div style={styles.priceWrapper}>
              <p
                style={{
                  ...styles.price,
                  color: product.stock === "ESGOTADO" ? 'gray' : 'black', // Atualizando a cor do preço
                }}
              >
                Preço: R$ {product.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => product.stock !== "ESGOTADO" && addToCart(product)}
              style={{
                ...styles.button,
                backgroundColor: product.stock === "ESGOTADO" ? '#ccc' : '#e63946',
                cursor: product.stock === "ESGOTADO" ? 'not-allowed' : 'pointer',
              }}
              disabled={product.stock === "ESGOTADO"}
            >
              Adicionar ao Carrinho
            </button>
            <p
              style={{
                ...styles.stock,
                color: product.stock === "ESGOTADO" ? 'red' : 'green',
              }}
            >
              Estoque: {product.stock === "ESGOTADO" ? product.stock : `${product.stock} kg`}
            </p>
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
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  heartIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
  productName: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  productDescription: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  priceWrapper: {
    backgroundColor: '#f0f0f0',
    padding: '5px',
    borderRadius: '4px',
  },
  price: {
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    marginTop: '10px',
  },
  stock: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
};

export default HomePage;
