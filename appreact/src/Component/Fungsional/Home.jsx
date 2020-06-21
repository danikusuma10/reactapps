import React from 'react'
import Blog from './Blog'
import Product from '../Class/Product';


const Home = () => {
     return <div>

          <h1> News </h1>

          <Blog

               tanggal="1 Juni 2020"
               judul="Internet Of Thing"
               summary="tentang jnahsuy sgdyajsgd sa hdas is"

          />
          <Blog
               tanggal="2 Juni 2020"
               judul="Blockchain"
               summary="tentang jnahsuy sgdyajsgd sa hdas is"
          />
          <Blog
               tanggal="3 Juni 2020"
               judul="Robotic"
               summary="tentang jnahsuy sgdyajsgd sa hdas is"
          />
          
          <Blog

               tanggal="8 Maret 2020"
               judul="Industrial 4.0"
               summary="edmasidjaoidhaoidjasjisajd sduhaiuhd"

          />

          <h1>BUY SOMR PRODUCTS</h1>
          <Product/>


     </div>
}


export default Home;