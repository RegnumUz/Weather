import React, { useEffect, useState } from "react";
import axios from "axios";


const Warning = () => {

    // api.openweathermap.org/data/2.5/forecast?lat={tashkent}&appid=a398ee6b5067a8da326ccfedbc52a61a

  return (
    <div className="Warning">
      <h2> No location found </h2>
      <p>Try informing city/town and state/country</p>
      <p> Ex: São Carlos, São Paulo</p>
      <p> Ex: Tokyo, Japan </p>
    </div>
  );
};

export default Warning;
