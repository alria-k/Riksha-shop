import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage, ItemPage } from "../index";
import { dataFetch } from "../index";

import "./Main.scss";

export function Main() {
  let resource = dataFetch();

  return (
    <main className="main">
      <Routes>
        <Route path="/" index element={<MainPage data={resource} />} />
        <Route path="/about" index element={<MainPage data={resource} />} />
        <Route
          path="/delivery-payment"
          index
          element={<MainPage data={resource} />}
        />
        <Route path="/contacts" index element={<MainPage data={resource} />} />
        <Route path="/bonuses" index element={<MainPage data={resource} />} />
        <Route path="/vacancy" index element={<MainPage data={resource} />} />
        <Route path="/:category" element={<ItemPage data={resource} />} />
      </Routes>
    </main>
  );
}
