
export default {
  ['receive_news'](state,{news}){
    state.news = news
  },
  ['receive_news_content'](state,{newsContent}){
    state.newsContent = newsContent
  },
  ['setNewId'](state,id){
    state.newsId = id
  },
}
