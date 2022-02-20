import { useContext } from "react";
import MyContext from "../context/MyContext";

const Header = () => {
  const { headerText} = useContext(MyContext);
  return (
    <header>
      <h1>{headerText}</h1>  
    </header>
  );
};

export default Header;