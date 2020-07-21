import React from 'react'
import Blog from './../../Class/Blog';
import { UncontrolledCarousel } from 'reactstrap';

//Carousel
const items = [
  {
    src: 'https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-header-1440x400.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://www.americaspromise.org/sites/default/files/d8/styles/hero_image/public/2017-01/Closing%20the%20High%20School%20Graduation%20Gap%20for%20Low-Income%20Students.jpg?itok=ytPnu7TK',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'http://widiatmika.sch.id/uploads/image/foto-cover/web-uk-kecil-size-01.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

//

export default function Home() {
    return (

      <div>
      <UncontrolledCarousel items={items} />
          
        <h1>Halaman Home</h1>
        <Blog
            Link ="https://placeimg.com/640/480/people"
            Tanggal="16 juni 2020"
            Judul="PENGUMUMAN JADAWAL TEST"
            Summary="Uufhs uusdfhosdif; odsfhsdfjsid ifisodfjisd jfsidfjiosdjf  difhiosdhfjosdif u fihsdifssdfusd"
        />
        <Blog
        Link ="https://placeimg.com/640/480/nature"
            Tanggal="17 juni 2020"
            Judul="PENGUMMAN DAFTAR SISWA"
            Summary="Ahfiusdhf sdhfisdufipao shfi lsdu f oisfosif psoisdf iosdf opsdf psdofusiofujisdf up foisfpsd"
        />
        <Blog
        Link ="https://placeimg.com/640/480/arch"
            Tanggal="18 juni 2020"
            Judul="PENGUMUMAN HASIL RAPAT"
            Summary="H ifjidsuf os iushfskdkf h fiosdfu ispod f idsufsdfu ps siduv9sduv  soidusdouv sod dsdupsodisp "
        />
        <Blog
        Link ="https://placeimg.com/640/480/tech/grayscale"
            Tanggal="18 juni 2020"
            Judul="PENGANTAR TIDUR"
            Summary="pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya"
        />

        </div>
    )
}
