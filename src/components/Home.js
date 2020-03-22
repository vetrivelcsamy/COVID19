/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInterceptor";
import Results from "../components/Results"

const Home = () => {
  const [coronavius, updatecoronavius] = useState([]);
  console.log(coronavius);
  useEffect(() => {
    async function getCorona() {
      try {
        const response = await axios.get("/locations");
        updatecoronavius(response.data.locations);
      } catch (error) {
        console.error(error);
      }
    }
    getCorona();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
       <Results coronavius={coronavius} />
    </div>
  );
};

export default Home;
