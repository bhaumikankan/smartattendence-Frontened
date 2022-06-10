import Head from 'next/head'
import Image from 'next/image'
import { useEffect,useState } from 'react'
import * as geometry from 'spherical-geometry-js';



export default function Home() {
  const[distance,setDistance] =useState(0);
  const[l,seL]=useState(0);
  const[l2,seL2]=useState(0);
  useEffect(()=>{
    navigator.geolocation.watchPosition(function(position) {
      console.log(position.coords.latitude,position.coords.longitude);
      seL(position.coords.latitude)
      seL2(position.coords.longitude)
      //getDistance(27.0093299,88.2169027,position.coords.latitude,position.coords.longitude);
      var x=geometry.computeDistanceBetween(new geometry.LatLng(27.0093299,88.2169027),new geometry.LatLng(position.coords.latitude,position.coords.longitude));
      setDistance(x);
      
    });
  })

  
  return (
    <div >
      <h1>{distance} meters</h1>
      <p>latitude= {l}</p>
      <p>longitude= {l2}</p>
    </div>
  )
}
