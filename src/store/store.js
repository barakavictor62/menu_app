import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        cakes_displayed:[],
        master_cart:[],
        pastries_displayed:[],
    },
    mutations:{
        add_to_cart(state, cake){
            var found = false;
            state.master_cart.forEach(item => {
                if (item.cake_name === cake.name && item.cake_weight === cake.cake_weight) {
                    found = true;
                    item.cake_quantity += 1;
                }
            });
            if (found === false) {
                cake.cake_quantity =1;
                state.master_cart.push(Vue.util.extend({}, cake));
            }
        },
        get_cakes_to_display(state, payload){
            state.cakes_displayed = payload
        },
        get_pastries_to_display(state, payload){
            state.pastries_displayed = payload
        },
        remove_from_cart(state, cake){
            state.master_cart.splice(state.master_cart.indexOf(cake), 1);
        }

    },
    actions:{
        addToCart(context, cake){
            context.commit('add_to_cart', cake)
        },
       getAllCakes(context, cakes){
            context.commit('get_cakes_to_display', cakes)
        },
        removeFromCart(context,cake){
            context.commit("remove_from_cart", cake);
        },
        getAllPastries(context, cakes){
            context.commit('get_pastries_to_display', cakes)
        },

    },
    getters:{
        cakes_displayed(state){
            return state.cakes_displayed
        },
        cart(state){
            return state.master_cart
        },
        pastries(state){
            return state.pastries_displayed
        }

    }
})