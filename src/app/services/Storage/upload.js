import { storageReference } from '../Storage'

function upload(fileName, path) {
  let s = storageReference().child('photo_2020-10-12_12-51-17.jpg')
  s.put(fileName)
  s.getDownloadURL().then((url) => {
    //get url from storage
    console.log(url)
  })
}

export default upload
//path ? `${path}${fileName}` : fileName
