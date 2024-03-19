/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Breadcrums = ({ breadcrums }) => {
    return <div className="Breadcrums flex items-center">{breadcrums.map((breadcrums ,index)=>(
        <span key={index}>
            {index > 0 && <span className="seperator mx-2"></span>}
            {breadcrums.link ? (<Link to={breadcrums.link}>{breadcrums.label}</Link>) : (<span>{breadcrums.label}</span>)}
      </span>
  ))}</div>;
};

export default Breadcrums;
