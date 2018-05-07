import {reqNews} from '../tools'

export default {
  async getNews ({commit}){
    const result = await reqNews()
    commit('receive_news',{news:result})
  }
}
