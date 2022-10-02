import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { api } from "./components/service/axios/axios";
import { GlobalStyle } from "./components/styles/global";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api
      .get("/products")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function addToCart(id) {
    const product = products.find((prod) => prod.id === id.id);

    if (!product.count) {
      product.count = 1;
    }

    if (currentSale.find((prod) => prod.id === product.id)) {
      const newList = currentSale.map((prod) => {
        if (prod.id === product.id) {
          prod.count += 1;
          return prod;
        } else {
          return prod;
        }
      });

      setCartTotal(cartTotalPrice(newList));
      setCurrentSale(newList);
    } else {
      setCartTotal(cartTotalPrice(currentSale, product.price));
      setCurrentSale([...currentSale, product]);
    }
  }

  function removeFromCart(product) {
    if (product.count > 1) {
      const newList = currentSale.map((prod) => {
        if (prod.id === product.id) {
          prod.count -= 1;
          return prod;
        } else {
          return prod;
        }
      });

      setCartTotal(cartTotalPrice(newList));
      setCurrentSale(newList);
    } else {
      const newList = currentSale.filter((prod) => prod.id !== product.id);

      setCartTotal(cartTotalPrice(newList));
      setCurrentSale(newList);
    }
  }

  function cartTotalPrice(list, product = 0) {
    const newTotal = (
      product + list.reduce((acc, prod) => acc + prod.price * prod.count, 0)
    ).toFixed(2);

    return newTotal;
  }

  function cleanCart() {
    setCurrentSale(currentSale.map((prod) => (prod.count = 1)));
    setCurrentSale([]);
    setCartTotal(0);
  }

  return (
    <>
      <GlobalStyle />
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
      ></Header>

      <Container>
        {filteredProducts.length > 0 ? (
          <ProductList
            products={filteredProducts}
            addToCart={addToCart}
          ></ProductList>
        ) : (
          <ProductList products={products} addToCart={addToCart}></ProductList>
        )}

        <Cart
          currentSale={currentSale}
          cleanCart={cleanCart}
          removeFromCart={removeFromCart}
          cartTotal={cartTotal}
        ></Cart>
      </Container>
    </>
  );
}

export default App;
