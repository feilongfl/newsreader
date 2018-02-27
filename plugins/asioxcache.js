import Vue from 'vue'
import axios from 'axios'

export const flGetJson = async (store, url) => {
  let data = store.state.cache.get(url)
  if (data) {
    console.log('read from lru cache', url)
    return {items: JSON.parse(data)}
  }
  console.log('no lru cache', url)
  const res = await axios.get(url)
  data = res.data
  store.state.cache.set(url, JSON.stringify(data))
  return {items: data}
}

Vue.prototype.$http = flGetJson
