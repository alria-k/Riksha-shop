import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { MainPage, Catalog, ItemPage, fetchData, Header, Footer } from "./ui";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchData());

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
        <Route path="/:category/:id" element={<ItemPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
