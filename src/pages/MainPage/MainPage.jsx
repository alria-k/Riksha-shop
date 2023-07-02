import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import {
  Advantages,
  SliderMain,
  NewItems,
  Sale,
  Categories,
  About,
  SocialMedia,
} from "./index";
import { Container } from "../index";

const MainWrapper = styled.main`
  margin-bottom: 187px;
`;

export function MainPage() {
  const [goods, setGoods] = useState([]);
  const [sale, setSale] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/src/db/items.json"),
      axios.get("/src/db/sale.json"),
    ]).then((dataArray) => {
      setGoods(dataArray[0].data);
      setSale(dataArray[1].data);
    });
  }, []);

  return (
    <MainWrapper>
      <Container>
        <SliderMain />
        <Advantages />
        <NewItems goodsData={goods[0]} />
        <Sale saleData={sale[0]} />
        <Categories goodsData={goods[0]} saleData={sale[0]} />
      </Container>
      <About />
      <Container>
        <SocialMedia />
      </Container>
    </MainWrapper>
  );
}
