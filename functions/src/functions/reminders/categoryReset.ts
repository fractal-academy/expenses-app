import * as functions from 'firebase-functions'

export default functions.pubsub
  .schedule('0 5 1 * *')
  .timeZone('Europe/Kiev')
  .onRun(
    async (): Promise<null> => {
      return null
    }
  )
