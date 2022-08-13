import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({name}) => {
    switch(name){
      case "Circle" : return <FaRegCircle className="icon" />;
      case "Cross" : return <FaTimes className="icon" />;
      default : return <FaPen className="icon" />; 
    }  
};

export default Icon;