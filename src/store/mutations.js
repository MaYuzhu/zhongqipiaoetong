
export default {
  ['receive_news'](state,{news}){
    state.news = news
  },
  ['receive_news_content'](state,{newsContent}){
    state.newsContent = newsContent
  },
  ['setNewId'](state,id){
    sessionStorage.setItem("newsId", id)  //添加到sessionStorage
    state.newsId = id
  },
  ['upload_picture'](state,{picture}){
    state.picture = picture
  },

}
