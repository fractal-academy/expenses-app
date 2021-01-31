import { storageReference } from '../Storage'

async function upload(file, path) {
  let ref = storageReference(path ? `${path}${file.name}` : file.name)
  await ref.put(file)
  return ref
}
export default upload
