const category = ['Romansa', 'Kehidupan', 'Fantasi', 'Aksi', 'Petualangan', 'Kesedihan', 'Other Tag']

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
  category
}

