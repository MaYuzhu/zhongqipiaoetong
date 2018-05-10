import {reqNews,
        reqNewsContent,
        uploadPicture

        } from '../tools'


export default {
  async getNews ({commit}){
    const result = await reqNews()
    commit('receive_news',{news:result})
  },
  async getNewsContent ({commit,state}){
    const newsId = parseInt(sessionStorage.getItem('newsId'))
    const result = await reqNewsContent(newsId)
    commit('receive_news_content',{newsContent:result})
  },

}
