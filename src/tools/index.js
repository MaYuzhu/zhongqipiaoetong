import ajax from './ajax'

export const reqNews = () => ajax('/api/news/web/news/allList')
export const reqNewsContent = (id) => ajax('/api/news/web/news/findById?'+'id='+ id)
