import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "../Search/index.jsx";

import "./index.css";

const Ocklock = ({ searchCity }) => {
  const [datename, setDateName] = useState(new Date());

  const monthName = datename.toLocaleString("default", { month: "long" });
  const todayName = datename.toLocaleString("en-us", { weekday: "long" });

  const time = () => {
    setDateName(new Date());
  };

  useEffect(() => {
    setInterval(() => {
      time();
    }, 1000);
  }, []);

  return (
    <div className="d-flex justify-content-between p-5">
      <div className="left ">
        {datename.toString().length < 10 ? (
          <h1>
            {datename.toLocaleTimeString().slice(0, 8)}
            <span>{`${datename.toLocaleTimeString().slice(-2)}`}</span>
          </h1>
        ) : (
          <h1>
            {`0${datename.toLocaleTimeString().slice(0, 8)}`}
            <span>{`${datename.toLocaleTimeString().slice(-2)}`}</span>
          </h1>
        )}
        <h3>
          {`${todayName}, ${
            new Date().getMonth() + 1
          } ${monthName} ${new Date().getFullYear()}`}
        </h3>
      </div>
      <div className="right d-flex align-items-end flex-column">
        <Search searchCity={searchCity} />
        <p>Uzbekistan</p>
      </div>
    </div>
  );
};

export default Ocklock;
