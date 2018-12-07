import Api from '@/services/Api'

export default {
  getEntries() {
    return Api().get('/guestbook')
  },
  addEntry(entry) {
    return Api().post('/guestbook', entry)
  }
}