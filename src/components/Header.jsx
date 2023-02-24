import Container from "react-bootstrap/Container";
import images from "../assets/nba-logo.png";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <Container>
      <Image src={images} alt="nba" width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
    </Container>
  );
};

export default Header;
