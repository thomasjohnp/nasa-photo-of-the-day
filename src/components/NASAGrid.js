import React, { useState, useEffect } from "react";
import NASACard from "./NASACard";
import axios from "axios";
import styled from "styled-components";

export default function NASAGrid() {
  const [NASA, setNASA] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=KFTkza1dP8AmAYcfnP1ce7fCwpiCqWykJc6kIlRM")
      .then(response => {
        console.log(response);
        setNASA(response.data);
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }, []);
  return (
    <>
 
      <NASACard
        imgDate={NASA.date}
        imgExplanation={NASA.explanation}
        imgURL={NASA.url}  
        imgHDURL={NASA.hdurl}
        imgTitle={NASA.title}
        imgCopyright={NASA.copyright}
      />
 
    </>
  );
}
