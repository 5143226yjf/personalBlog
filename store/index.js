/**
 * Created by yjf on 2017/6/6.
 */
import Vuex from 'vuex'
import imgA from './imgs/s1.jpg'
import imgB from './imgs/s2.jpg'

const createStore = () => {
  return new Vuex.Store({
    state: {
      moods: [{
        img: imgA,
        title: '趁我们还年轻',
        content: '趁我们都还年轻,多走几步路，多欣赏下沿途的风景，不要急于抵达目的地而错过了流年里温暖的人和物；趁我们都还年轻，多说些浪漫的话语，多做些幼稚的事情，不要嫌人笑话错过了生命中最美好的片段和场合；趁我们都还年轻，把距离缩短，把时间延长。趁我们都还年轻，多做些我们想要做的任何事...'
      }, {
        img: imgB,
        title: '趁我们还年轻',
        content: '趁我们都还年轻,多走几步路，多欣赏下沿途的风景，不要急于抵达目的地而错过了流年里温暖的人和物；趁我们都还年轻，多说些浪漫的话语，多做些幼稚的事情，不要嫌人笑话错过了生命中最美好的片段和场合；趁我们都还年轻，把距离缩短，把时间延长。趁我们都还年轻，多做些我们想要做的任何事...'
      }]
    },
    mutations: {
      addMood (state, moods) {
        state.moods.unshift(moods)
      },
      deleteMood (state, index) {
        state.moods.splice(index, 1)
      }
    }
  })
}
export default createStore
