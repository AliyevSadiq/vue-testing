import { createStore } from 'vuex'
import article from "./article";
import category from "./category";
import auth from "./auth";
import error from "./error";
import validation from "./validation";
import success from "./success";
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    article,
    category,
    auth,
    error,
    validation,
    success
  }
})
