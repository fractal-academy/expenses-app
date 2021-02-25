import * as functions from './functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

export const deleteUser = functions.deleteUser
export const reminder = functions.reminder
export const sendMail = functions.sendMail
