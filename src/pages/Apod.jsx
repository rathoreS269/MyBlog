import React, { useState, useEffect } from "react";
import {ApodFooter,ApodMain,ApodSideBar } from "../components/index"

function Apod() {
    const[data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);
  
    const handleToggleModal = () => {
      setShowModal(!showModal);
    };
  
    useEffect(() => {
      async function fetchAPIData() {
        const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
        const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`; 
  
        const today = (new Date()).toDateString()
        const localKey = `NASA-${today}`
        if (localStorage.getItem(localKey)) {
          const apiData = JSON.parse(localStorage.getItem(localKey))
          setData(apiData)
          return
        }
        localStorage.clear()
  
  
        try {
          const res = await fetch(url);
          const apiData = await res.json();
           localStorage.setItem(localKey, JSON.stringify(apiData))
           setData(apiData)
        } catch (error) {
          console.log(error.message);
        }
      }
      fetchAPIData();
    }, []);
  
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          {data ? (
            <ApodMain  data= {data}/>
          ) : (
            <div className="flex items-center justify-center flex-1">
              <i className="fa-solid fa-gear opacity-20 text-3xl"></i>
            </div>
          )}
          {showModal && <ApodSideBar  data={data} handleToggleModal={handleToggleModal} />}
        </div>
        {data && <ApodFooter showModal={showModal} handleToggleModal={handleToggleModal} data={data} />}
      </div>
    );
  }
  
  export default Apod;