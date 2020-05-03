import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    products: [{
      id: 1,
      title: 'Product 1',
      description: 'サンプルです。モックです。商品の紹介文をいれます！！！',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'サンプルです。モックです。商品の紹介文をいれます！！！',
      price: 35,
      ratings: 5,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'サンプルです。モックです。商品の紹介文をいれます！！！',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    }
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }
  },
  getters: {
    productsAdded: (state) => {
      return state.products.filter((el) => {
        return el.isAddedToCart
      })
    },
    productsAddedToFavourite: (state) => {
      return state.products.filter((el) => {
        return el.isFavourite
      })
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    },
    isUserLoggedIn: (state) => {
      return state.userInfo.isLoggedIn
    },
    isUserSignedUp: (state) => {
      return state.userInfo.isSignedUp
    },
    getUserName: (state) => {
      return state.userInfo.name
    },
    isLoginModalOpen: (state) => {
      return state.systemInfo.openLoginModal
    },
    isSignupModalOpen: (state) => {
      return state.systemInfo.openSignupModal
    },
    isCheckoutModalOpen: (state) => {
      return state.systemInfo.openCheckoutModal
    },
    quantity: (state) => {
      return state.products.quantity
    },
    getStateDataSet: (state) => state.items
  },
  mutations: {
    mutateDataSet(state, payload) {
      state.items = payload;
    },
    addToCart: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isAddedToCart = true
        }
      })
    },
    setAddedBtn: (state, data) => {
      state.products.forEach((el) => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status
        }
      })
    },
    removeFromCart: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isAddedToCart = false
        }
      })
    },
    removeProductsFromFavourite: (state) => {
      state.products.filter((el) => {
        el.isFavourite = false
      })
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched
    },
    setUserName: (state, name) => {
      state.userInfo.name = name
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show
    },
    addToFavourite: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isFavourite = true
        }
      })
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach((el) => {
        if (id === el.id) {
          el.isFavourite = false
        }
      })
    },
    quantity: (state, data) => {
      state.products.forEach((el) => {
        if (data.id === el.id) {
          el.quantity = data.quantity
        }
      })
    },
    SET_USER(state, authUser) {
      state.authUser = authUser
    }
  },
  actions: {
    commitDataSet(store) {
      const headers_config = {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
      return axios.get('http://13.231.104.134/items', headers_config)
        .then(response => {
          store.commit('mutateDataSet', response.data)
        })
        .catch((reason) => {
          console.log(reason.message)
        })
    }
  },
  modules: {}
})