import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {storeMenuGroup} from '../modules/storeMenuGroup'
import {storeMenu} from '../modules/storeMenu'

Vue.use(Vuex)
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  modules: {
    menuGroup: storeMenuGroup,
    moduleMenu: storeMenu
  },
  state: {
    // 전체 메뉴 초기 get
    saveWheel: [],
    todayLunch: null,
    currentTxtColor: null,
  },
  mutations: {
    // 이건 일단 예제로 만들기
    updateCurrentSelect (state, message) {
      state.selected = message;
    },
    updateSaveWheel(state, message) { // save 정보 state update
      state.saveWheel = message
    },
    updateResult(state, message){
      state.todayLunch = message.menu;
      state.currentTxtColor = message.color;
    }
    
  },
  actions: {
  }
})

