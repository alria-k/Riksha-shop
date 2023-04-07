import { Container } from "../index";
import { Nav } from "./";
export function Header() {
  return (
    <div className="header">
      <Container>
        <div className="header__inner">
          <img className="logo-img" src="./src/assets/img/logo.svg" alt="" />
          <Nav />
        </div>
      </Container>
    </div>
  );
}
