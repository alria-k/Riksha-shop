import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MainPage, Catalog, ItemPage } from "./ui";
import { Header, Footer } from "./ui";

import { fetchData } from "./ui";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/about" element={<MainPage />} />

        <Route path="/delivery-payment" element={<MainPage />} />

        <Route path="/contacts" element={<MainPage />} />

        <Route path="/bonuses" element={<MainPage />} />

        <Route path="/vacancy" element={<MainPage />} />

        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/:item" element={<ItemPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
