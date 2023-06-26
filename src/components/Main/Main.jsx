import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { MainPage, Catalog, ItemPage } from "../index";

const MainWrapper = styled.main`
  margin-bottom: 187px;
`;

export function Main() {
  return (
    <MainWrapper>
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
    </MainWrapper>
  );
}
