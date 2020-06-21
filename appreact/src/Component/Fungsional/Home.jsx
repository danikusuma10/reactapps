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

          <h2>BUY SOMR PRODUCTS</h2>
          <Product
               nama="SAPI HUTAN 2020"
               stock="89"
               harga="12000.000"
          />
          <Product
               nama="MACAN KUMBANG"
               stock="40"
               harga="422000.000"
          />
          <Product
               nama="KUCING ANGGORA"
               stock="22"
               harga="52000.000"
          />
          <Product
               nama="ULAR BERBISA 2020"
               stock="12"
               harga="22000.000"
          />



     </div>
}


export default Home;