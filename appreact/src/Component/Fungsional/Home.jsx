import React from 'react'
import Blog from './Blog'


const Home = ()=> {
    return <div>

<h1> News </h1>

       <Blog
            
            tanggal="1 Juni 2020"
            judul ="Internet Of Thing"
            summary ="tentang jnahsuy sgdyajsgd sa hdas is"
            
       />
        <Blog
            tanggal="2 Juni 2020"
            judul ="Blockchain"
            summary ="tentang jnahsuy sgdyajsgd sa hdas is"
       />
       <Blog
       tanggal="3 Juni 2020"
       judul ="Robotic"
       summary ="tentang jnahsuy sgdyajsgd sa hdas is"
         />
     <Blog
       tanggal="22 Juni 2020"
       judul ="Science"
       summary ="tentang jnahsuy sgdyajsgd sa hdas is"
         />

    </div>
}

export default Home;