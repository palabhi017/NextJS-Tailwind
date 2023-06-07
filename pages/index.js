import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [weather,SetWeather]= useState({})
  const [city,SetCity]= useState("")
  const [loading,SetLoading]= useState(false)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${process.env.NEXT_PUBLIC_KEY}`
  
  let getdata = async()=>{
    try {
      let res = await axios.get(url)
      let data = res.data
      SetWeather(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <>
   <h1>hello</h1>
   <h2>fetching data</h2>
   
 
   <button onClick={getdata}>get</button>
   </>
  )
}
