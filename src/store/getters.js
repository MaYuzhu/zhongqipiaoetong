
export default {
  newsId (state) {

    return state.newsId = parseInt(sessionStorage.getItem('newsId')) //从sessionStorage中读取状态

  }
}
