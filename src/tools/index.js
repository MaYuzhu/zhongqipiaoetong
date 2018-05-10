import ajax from './ajax'

export const reqNews = () => ajax('/api/web/news/allList')
export const reqNewsContent = (id) => ajax('/api/web/news/getNewsById?'+'id='+ id)

