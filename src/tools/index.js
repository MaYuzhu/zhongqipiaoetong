import ajax from './ajax'

export const reqNews = () => ajax('/api/news/web/news/allList')
