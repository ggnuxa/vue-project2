import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navMenu: [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Contact' },
      {
        customClass: 'button-menu',
        dataActivates: 'slide-out',
        iconName: 'menu'
      }
    ]
  }
});
