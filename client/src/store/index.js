import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state: {
    url: "http://localhost:3000/",
    allPosts: [],
  },
  getters: {
    sendAllPosts(state){
      return state.allPosts
    }
  },
  mutations: {
    // ALL POSTS PUSHİNG allPosts
    editPosts(state, data) {
      state.allPosts = data
    },
  },
  actions: {
    // GET ALL POSTS
    getPosts({ state, commit }) {
      axios
        .get(state.url)
        .then(function(response) { 
          commit("editPosts", response.data)
        })
        .catch(function(error) {
          throw error;
        });
    },
  },
  modules: {},
});
