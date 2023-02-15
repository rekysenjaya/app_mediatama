import imgFantasi from '../assets/fantasi.png'
import imgAksi from '../assets/aksi.png'
import imgKeluarga from '../assets/keluarga.png'
import imgMisteri from '../assets/misteri.png'
import imgRomansa from '../assets/romansa.png'
import imgSastra from '../assets/sastra.png'

const category = ['Romansa', 'Kehidupan', 'Fantasi', 'Aksi', 'Petualangan', 'Kesedihan', 'Other Tag']
const categoryFull = [
  { name: 'Romansa', img: imgRomansa },
  { name: 'Fantasi', img: imgFantasi },
  { name: 'Misteri', img: imgMisteri },
  { name: 'Sastra', img: imgSastra },
  { name: 'Aksi', img: imgAksi },
  { name: 'Keluarga', img: imgKeluarga }
]
const giftList = [1, 2, 3, 4, 5, 6, 7]

const getRndInteger = (min, max) => {
  return Number(Math.random() * (max - min) + min).toFixed(1);
}

const createObjectToParams = (data) => {
  let params = ''
  if (Object.keys(data).length) {
    let count = 0
    Object.entries(data).forEach(v => {
      if (v[1]) {
        params += !count ? '?' : '&'
        params += `${v[0]}=${encodeURIComponent(v[1])}`
        count += 1
      }
    });
  }
  return params
}

export default {
  URL_API: `https://www.googleapis.com/`,
  createObjectToParams,
  category,
  categoryFull,
  giftList,
  getRndInteger,
}

