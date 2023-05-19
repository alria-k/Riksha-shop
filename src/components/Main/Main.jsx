import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage, Catalog, ItemPage } from "../index";
import "./Main.scss";

export function Main() {
  return (
    <main className="main">
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
    </main>
  );
}
