import {reqNews,reqNewsContent} from '../tools'


export default {
  async getNews ({commit}){
    const result = await reqNews()
    commit('receive_news',{news:result})
  },
  async getNewsContent ({commit,state}){
    const {newsId} = state
    const result = await reqNewsContent(newsId)
    commit('receive_news_content',{newsContent:result})
  },
  setId ({commit,state,id}){
    commit('setNewId',{newId:state.newId})
  }
}
