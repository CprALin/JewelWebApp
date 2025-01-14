import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AppNavigation({ children }) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; 
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return <div>{children}</div>;
}

AppNavigation.propTypes = {
    children : PropTypes.any.isRequired
}