import Vue from 'vue'

export default {
  ['receive_news'](state,{news}){
    state.news = news
  }
}
