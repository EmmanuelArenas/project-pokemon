import { React } from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta">
      <Link to="/home" className="btnDark">
        Let's Go
      </Link>
    </div>
  );
};
export default CTA;
