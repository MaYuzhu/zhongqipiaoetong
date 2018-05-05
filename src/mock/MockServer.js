import Mock from 'mockjs'

import mockData from './data.json'

Mock.mock('/news',{code:0,data:mockData.news})
