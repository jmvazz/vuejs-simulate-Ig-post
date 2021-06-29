import { createStore } from "vuex"

export default createStore({
    state: {
        copy: ""
    },
    mutations: {
        setCopy(state, payload){
            state.copy = payload
        }
    },
    actions: {

    },
    modules: {

    }
})