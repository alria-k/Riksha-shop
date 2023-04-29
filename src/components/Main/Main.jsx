import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage, Catalog, ItemPage } from "../index";
import { dataFetch } from "../index";

import "./Main.scss";

export function Main() {
  let resource = dataFetch();

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<MainPage data={resource} />} />
        <Route path="/about" element={<MainPage data={resource} />} />
        <Route
          path="/delivery-payment"
          element={<MainPage data={resource} />}
        />
        <Route path="/contacts" element={<MainPage data={resource} />} />
        <Route path="/bonuses" element={<MainPage data={resource} />} />
        <Route path="/vacancy" element={<MainPage data={resource} />} />
        <Route path="/:category" element={<Catalog data={resource} />} />
        <Route path="/:category/:item" element={<ItemPage data={resource} />} />
      </Routes>
    </main>
  );
}
