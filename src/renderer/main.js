import Vue from 'vue'
import axios from 'axios'
import iView from 'iview'
import nedb from 'nedb'
import 'iview/dist/styles/iview.css'


import App from './App'
import router from './router'
import store from './store'

Vue.use(iView)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

 
// 实例化连接对象（不带参数默认为内存数据库）
const db = new nedb({
  filename: './db/save.db',
  autoload: true
});
 
// 插入单项
db.insert({
  name: 'tom'
}, (err, ret) => {});
 
// 插入多项
db.insert(
  [
    { name: 'tom' },
    { name: 'jerry' }
  ]
, (err, ret) => {});
 
// 查询单项
db.findOne({
  name: 'tom'
}, (err, ret) => {});
 
// 查询多项
db.find({
    name: {
      $in: ['tom', 'jerry']
    }
  })
  .sort({
    _id: -1
  })
  .exec((err, ret) => {});
 
// 更新单项
db.update({
  _id: '1'
}, {
  $set: {
    name: 'kitty'
  }
}, (err, ret) => {});
 
// 更新多项
db.update({}, {
  $set: {
    name: 'kitty'
  }
}, {
  multi: true
}, (err, ret) => {});
 
// 删除单项
db.remove({
  _id: '1'
}, (err, ret) => {})
 
// 删除多项
db.remove({
  name: 'kitty'
}, {
  multi: true
}, (err, ret) => {});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')



//console.log(Vue.getPath('userData'))