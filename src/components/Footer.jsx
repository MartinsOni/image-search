import { useContext } from "react";
import MyContext from "../context/MyContext";

const Footer = () => {

    const { footerText } = useContext(MyContext);

    return <footer>
        {footerText}
    </footer>;
};

export default Footer;