import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchData, Header, Footer } from "./ui";
import {
  MainPage,
  Catalog,
  ItemPage,
  CompleateOrder,
  NotFoundPage,
} from "./pages";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  dispatch(fetchData());

  useEffect(() => window.scrollTo(0, 0), [pathname]);

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

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
