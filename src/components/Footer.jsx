import { useContext } from "react";
import MyContext from "../context/MyContext";

const Footer = () => {

    const { footerText } = useContext(MyContext);

    return <footer>
        {footerText}
        <i><p>*All images are from flash images*</p></i>
    </footer>;
};

export default Footer;