import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchData, Header, Footer } from "./ui";
import { MainPage, Catalog, ItemPage, CompleateOrder } from "./pages";

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

        <Route path="/order-confirmation" element={<CompleateOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
