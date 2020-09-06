import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Module childA
const childA = {
  state: {
    score: 0
  },
  getters: {
    score (state) {
      return state.score
    }
  },
  mutations: {
    increment (state, step) {
      state.score += step
    }
  },
  actions: {
    incrementScore: ({ commit }, delay) => {
      setTimeout(() => {
        commit('increment', 3)
      }, delay)
    }
  }
}

// Module childB
const childB = {
  state: {
    result: 3
  },
  getters: {
    result (state) {
      return state.result
    }
  },
  mutations: {
    increase (state, step) {
      state.result += step
    }
  },
  actions: {
    increaseResult: ({ commit }, delay) => {
      setTimeout(() => {
        commit('increase', 6)
      }, delay)
    }
  }
}

export default new Vuex.Store({
  state: { 
    // state Là nơi lưu trữ tất cả dữ liệu của dự án
    posts:  [
        {
            id: "1",
            name: "5 Reasons To Stan The Iconic Sunmi",
            img: "https://6.viki.io/image/c841a668a5df457699f408de7b9a3448.jpeg?s=900x600&e=t 900w",
            created_at: "2020-07-12",
            view: 20,
        },
        {
            id: "2",
            name: "Beautiful Female Stars With Captivating Visuals Who Hail From Daegu",
            img: "https://6.viki.io/image/df8743ed820a4167814134992df264ed.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 25,
        },
        {
            id: "3",
            name: "AOA’s Jimin Posts Apology Following Mina’s Allegations About Bullying + Mina Responds",
            img: "https://6.viki.io/image/52193fe664c04d94a9a92f87f1d616bb.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 30,
        },
        {
            id: "4",
            name: "Minzy, Jamie, And EXID’s Solji Talk About Malicious Comments And More + Sandara Park Cries Over Minzy’s Message To Her",
            img: "https://6.viki.io/image/2cb7979eba8345708ef23c59303543d4.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 50,
        },
        {
            id: "5",
            name: "July Girl Group Brand Reputation Rankings Announced",
            img: "https://6.viki.io/image/30b5a5c8383d4a2f98ffb0a248fb82cf.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 60,
        },
        {
            id: "6",
            name: "Rose: How you like that?",
            img: "https://i.pinimg.com/564x/7c/d2/d8/7cd2d82448abb29a8776adca34606e2a.jpg",
            created_at: "2020-07-12",
            view: 10,
        },
        {
            id: "7",
            name: "Joy beauty at MAMA 2019",
            img: "https://i.pinimg.com/564x/07/7c/ea/077cea589313e3ce0c18cae3778f1ae2.jpg",
            created_at: "2020-07-12",
            view: 13,
        },
        {
            id: "8",
            name: "Irene with Glass iconic",
            img: "https://i.pinimg.com/564x/ea/95/23/ea9523345230967ea014a08c4682a2b6.jpg",
            created_at: "2020-07-12",
            view: 2,
        },
        {
            id: "9",
            name: "Solar at MAMA 2019. She is greatest!!!",
            img: "https://i.pinimg.com/564x/e9/ff/ca/e9ffca1297b66e4900b103cf2ef820af.jpg",
            created_at: "2020-07-12",
            view: 1,
        },
        {
            id: "10",
            name: "Gaon Reveals Accumulated Digital And Album Charts For 1st Half Of 2020",
            img: "https://6.viki.io/image/ced7769319294571bf532a20d5d80ebb.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 300,
        },
        {
            id: "11",
            name: "Watch: “Hospital Playlist” Shows How Jo Jung Suk Pushed For Jeon Mi Do’s Casting, After Being Amazed By Her On Stage",
            img: "https://6.viki.io/image/70ff96251c7244c08cebfb9d3e01727f.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 2000,
        },
        {
            id: "12",
            name: "BLACKPINK, TWICE, SEVENTEEN, IU, Suga, And Baekhyun Top Gaon Monthly And Weekly Charts",
            img: "https://6.viki.io/image/d1fa086e16854312a2900d5d6cbb59fa.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 50,
        },
        {
            id: "13",
            name: "TWICE Maintains Lead With “MORE & MORE”; Soompi’s K-Pop Music Chart 2020, July Week 1",
            img: "https://6.viki.io/image/3b2bc20a1ac84d01a212a789ba0b7b61.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 5000,
        },
        {
            id: "14",
            name: "SEVENTEEN And BLOO Achieve Double Crowns On Gaon Weekly Charts",
            img: "https://6.viki.io/image/5e45992d132a44f89744c419ab5a9c23.jpeg?s=900x600&e=t",
            created_at: "2020-07-12",
            view: 1,
        },
    ],
    count: 13,
  },
  getters: {
      // Trong một ứng dụng lớn, nơi có nhiều component truy xuất trạng thái của store thông qua this.$store.state.score, 
      // bạn quyết định thay đổi tên của score. 
      // Có nghĩa là bạn phải thay đổi tên của biến trong mỗi component sử dụng nó.
      // Do đó nên dùng các getter để lấy dữ liệu
      count (state) {
          return state.count;
      },
      posts (state) {
          return state.posts;
      }
  },
  mutations: { 
    // Chỉ có thể thay đổi giá trị của các state bằng mutations
    increment(state, step = 1) {
        state.count += step;
    }
  },
  actions: { 
    // Action chỉ là một hàm để thực hiện một mutation. 
    // Nó sẽ gián tiếp thay đổi state, điều này cho phép xử lý của các hoạt động bất đồng bộ.
    incrementScore: ({ commit }, message) => {
      alert(message);
      commit('increment', 3)
    }
  },
  modules: {
    // Vuex cho phép chúng ta chia nhỏ những đối tượng store thành các mô-đun riêng biệt. 
    // Mỗi mô-đun có thể có state, mutation, action, getter và những mô-đun cấp dưới cúa riêng nó. 
    // Sau khi ta tạo ra những mô-đun cần thiết, chúng ta đăng ký chúng trong store.
    childA: childA, // 2 cách khai báo các module vào modules
    childB: childB,
  }
})
