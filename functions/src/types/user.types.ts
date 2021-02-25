export default interface User {
  firstName: string
  surname: string
  email: string
  role: Roles
  avatarURL: string
  isPending: boolean
  birthday?: number
  phone?: string
}
export enum Roles {
  ADMIN = 'admin',
  USER = 'user',
  OBSERVER = 'observer'
}
