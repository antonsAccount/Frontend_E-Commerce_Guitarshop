import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Instrument, Cart, CartItem } from "./components/types";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [data, setData] = useState([]);

  const getData = async (): Promise<void> => {
    try {
      const res = await fetch("http://localhost:5000/instruments");
      const data = await res.json();
      setData(data.data);
      console.log(data);
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar /* token={"testToken"} */ />
      <Routes>
        <Route path="/" element={<Home token={"test"} data={data} />} />
        <Route path="/shop" element={<Shop data={data} />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
