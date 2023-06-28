import styled from "styled-components";

import { paragraphFont } from "../../../../style/styling/styling";

const AdvantagesWrapper = styled.div`
  margin-bottom: 145px;
`;
const AdvantagesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const AdvantagesListItem = styled.li`
  text-align: center;
`;
const AdvantagesImg = styled.img`
  margin: 0 auto;
  margin-bottom: 12px;
`;
const AdvantagesTitle = styled.h6`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #1b1b1b;
  margin-bottom: 2px;
`;
const AdvantagesText = styled.p`
  ${paragraphFont}
`;

export function Advantages({ imageArr }) {
  return (
    <AdvantagesWrapper>
      <AdvantagesList>
        {imageArr.map((elem) => {
          return (
            <AdvantagesListItem key={elem.id}>
              <AdvantagesImg src={elem.img} alt={elem.alt} />
              <AdvantagesTitle>{elem.title}</AdvantagesTitle>
              <AdvantagesText>{elem.text}</AdvantagesText>
            </AdvantagesListItem>
          );
        })}
      </AdvantagesList>
    </AdvantagesWrapper>
  );
}
