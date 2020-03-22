import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInterceptor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Result from "./Result";

const Home = () => {
  let { id } = useParams();
  const [coronadatas, updatecoronadatas] = useState([]);
  console.log(coronadatas);
  useEffect(() => {
    axios
      .get(`/locations/${id}`)
      .then(res => {
        updatecoronadatas(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
		  <h1>{coronadatas.country}</h1>
		  < Result coronadatas={coronadatas} />
    </div>
  );
};

export default Home;
