/**
 * Created by yjf on 2017/6/6.
 */
import Vuex from 'vuex'
import imgA from './imgs/s1.jpg'
import imgB from './imgs/s2.jpg'
import headPic from './imgs/head-pic.jpeg'

const createStore = () => {
  return new Vuex.Store({
    state: {
      moods: [{
        time: '2017-06-12 13:08:09',
        img: imgA,
        title: '趁我们还年轻',
        content: '趁我们都还年轻,多走几步路，多欣赏下沿途的风景，不要急于抵达目的地而错过了流年里温暖的人和物；趁我们都还年轻，多说些浪漫的话语，多做些幼稚的事情，不要嫌人笑话错过了生命中最美好的片段和场合；趁我们都还年轻，把距离缩短，把时间延长。趁我们都还年轻，多做些我们想要做的任何事...'
      }, {
        time: '2017-05-30 11:08:09',
        img: imgB,
        title: '趁我们还年轻',
        content: '趁我们都还年轻,多走几步路，多欣赏下沿途的风景，不要急于抵达目的地而错过了流年里温暖的人和物；趁我们都还年轻，多说些浪漫的话语，多做些幼稚的事情，不要嫌人笑话错过了生命中最美好的片段和场合；趁我们都还年轻，把距离缩短，把时间延长。趁我们都还年轻，多做些我们想要做的任何事...'
      }],
      info: {
        img: headPic,
        name: 'lethe',
        tel: '1871603958',
        email: '1443646652@qq.com',
        birthday: '1995-10-10'
      },
      journal: [{
        title: '花寻',
        time: '2014-8-23',
        content: '冬天早晨，天气刚刚好。自己一个人独自在山中行走，太阳是多么温馨，多么暖意！懒懒散散地在走，忽然，一片花花绿绿的小野花在吸引我的注意，也是是内心深处的怜悯吧，走过去看，我不知道是否幼稚的心，这些花儿，自己却想采摘！但是，忽然之间，觉得这花们，也太弱小了！我还是站起来，继续往不知道的方向走去！走着走着，这就到了9点多的时刻了！阳光有点过热的感觉，心也随这阳光一样，心有点按耐不住的感觉！我一边走，一边四处张扬，好像在寻找什么？心情随时变化着，就是每次都是失落感！不远处，那熟悉的颜色，好像在那黑暗中闪出一点点的光芒，在吸引着我快步朝那个方向走去！近了，近了，快到了！顿时，我惊讶了，心情变得如此的欣喜，我在注视，在注视着那颜色，想触摸，怕伤害到它！但是我怎么会这样屈服呢？我把脸颊将它的距离贴近，轻轻地闻着它本身的味道，那味道，在色诱我，让我幻想偏偏。脑海里全是它在微风中如此高贵的气质，令人神魂颠倒！心，想独自拥有它，开始不受意识控制了，手，也不停地伸向它，伸到那微弱的颈部，用了力气，想将它私有！啊，手瞬间被什么东西刺了一下，心也跟着痛起来！缩回手，向后小退一部，看着手中流着的血，再看看它，原来，它火红火红的它，就是带刺的玫瑰！看着自己手中的血，再看着那玫瑰，我的举动同时伤害了两个人，是我的自私，让两个生命如此受灾难！那的确，它的盛开，只为了懂它的人盛开的，自己却什么也不是！我双手握着，止住血，慢慢地从它身旁挪开了，头不时地往回望，望它的颜色。突然间，心里却默默地祝福它，希望它找到会看懂，会欣赏它的人的到来，我只是过客罢了！我收拾了心情，再继续往前走，但是心情总是很低落，或许因为我得不到它的因素罢了！路，还很遥远，但是，时间却是11点了！太阳开始变得不安分起来，自己的心情也开始躁动了！自己加快了行走的步伐，想消除自己那躁动的心情！不知不觉，自己却来到一个池塘旁边，池塘边上矗立着那金黄色的菊花，本来我不是挺喜欢菊花的！但是之前在玫瑰花前的败迹，让我的魔爪伸向了它！开始，那菊花在微风的帮助下，四处摆动，好像在拒绝我采摘似的！但是，我不放弃，继续着！慢慢的，风停了，菊花也被我摘到了！我把它握在手心，轻轻地抚摸着，闭上眼睛，深深地吸着那有点陶醉的花香！突然间，我睁开眼睛，手不停地将菊花的花瓣一片一片地摘去，让那花瓣在微风中吹走，在我手里不留任何痕迹！我很难想象，我居然那么残忍的！或许出于报复罢了！也许，被我伤害的菊花，我不懂它的内心！或者，它在看着我，在哭泣，在倒地！我却如此铁心，就这样走了，头也不回！也许，那菊花在呐喊我！我也沉思着我为何如此的狠心，好好的一朵花，如此地落地此般的下场！我开始在懊悔，恨我自己，我发誓，下一次绝对不会了！就这样到了响午，太阳开始毒辣，毒辣着大地，好像恨不得立刻将大地烤焦！微风也开始带着烦恼，不断地在我脸颊碰撞！我也变得如此的精神颠倒，我发狂似的去寻找一棵树下！最后我坐在一棵不大的小杨树下，在大口大口地吸气，恨不得自己立刻将体内的热量吐出来！风突然大了，我感觉有点凉快的！不过，不远处的池塘中的荷花吸引我的注意力！我在看着欣赏着！荷花，在如此纯洁，出淤泥而不染。它的洁白的花瓣，粉红色的花蕊，在那微风中不断地散发出那清幽的花香，那令人陶醉！闻着闻着，自己却又想独自霸占它！但是一想到菊花那，心立刻变得如此的深沉，最后，自己决定在远处观看着，默默地欣赏着，虽然不属于自己，但是自己却可以目睹它的风采，我这也值了！我知道了这路1还有大半天走，前面的花还等我去欣赏，去驻足！'
      }, {
        title: '什么时候',
        time: '2015-03-18',
        content: '什么时候，犹记得纯真的少年无比恣意潇洒；什么时候，从无知的少年到两个孩子的父亲；什么时候，与他一起肩并肩玩游戏乐此不疲；什么时候，为撑起整个家日日操劳夜不能寐；什么时候，岁月在她脸上留下了无情的痕迹；什么时候，两鬓的白发告知我们他不再年轻；什么时候，能够停下那沉重的步伐稍作歇息？父亲节快到了。以前从未对父母亲说过什么煽情的话语，今天借此节日道一声：父亲，我爱您，这些年您辛苦了！为了能够让两个孩子长大成人，你们付出了无数的艰辛，在此无法一一说清。只想说：这么多年了，你们已不再年轻，有些事能放下的就放下吧，孩子已经长大成人，现在是他们的天地，请他们自由飞翔吧。树欲静而风不止，子欲养而亲不待，希望自己能够对他们好点，有时间多打打电话慰问一声，常回家走动走动与父母唠唠家常，倾听父母的心声，有机会的话带他们出去看看，看看外面广阔的天地，放松心情！'
      }, {
        title: '静坐听雨',
        time: '2017-01-01',
        content: ' 就喜欢这样在一首音乐，一段文字里沉浮……连续了几天阴雨，气温一下又骤降了许多，一个不小心极易犯寒……晨起推窗，风夹着丝丝凉意，已经没了前几天的热度。静坐一隅，打开一本书，想找点灵感，半天过后，视线还停留在原处。播放器里那首《落凡尘》一直在循环的播放，潮起潮落……缘起缘灭……情如梦去无踪……这世间，有些缘，来时如风，去时如烟，无痕无迹，却也正常。独品这浅浅的清欢，偶感一丝温婉。在这时光过往的缝隙里，总会有一些馨香的回忆，一些唯美的温暖在心底里回放……存有一颗淡定从容的心，默看窗外风月，与岁月无染。留几个无关痛痒的小字，细品慢酌也安然。'
      }
      ]
    },
    mutations: {
      addMood (state, moods) {
        state.moods.unshift(moods)
      },
      deleteMood (state, index) {
        state.moods.splice(index, 1)
      },
      addJournal (state, journal) {
        state.journal.unshift(journal)
      },
      deleteJournal (state, index) {
        state.journal.splice(index, 1)
      }
    }
  })
}
export default createStore
