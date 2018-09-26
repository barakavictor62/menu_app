<template>
<div class="container-fluid">
    <router-view></router-view>
     <div class="container" style="margin-top:6vh;">
            <div class="row">
                <div class="col-md-4 items" v-for="item in items" :key="item.cake_id">
                    <div class="card h-100" >
                        <img :src="require(`@/assets/${item.cake_img}`)" class="card-img-top" />
                        <div class="card-body text-center">
                            <h3 class="card-title">{{item.cake_name}}</h3>
                            <p class="card-text font-weight-normal">{{item.cake_description}}</p>
                            <h4>Ksh. {{item.cake_price}}</h4>
                            <div class="input-group  col-md-8" style="margin:0 auto;">
                                <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Weight</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01" v-model="item.cake_weight">
                                <option selected>{{item.cake_weight}} kg</option>
                                <option value="1">1 kg</option>
                                <option value="2">2 kgs</option>
                                <option value="3">3 kgs</option>
                                </select>
                            </div>
                            <br>
                            <button type="button" class="add-to-cart btn btn-outline-primary" @click="pushToCart(item)">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Items',
    data(){
        return{
            loading: false,
            }
        },
    computed:{
        items(){
            return this.$store.getters.cakes_displayed
            },
        },
    created(){
          this.fetchData()
        },
    watch:{
        '$route':'fetchData'
        },
    methods:{
        pushToCart(cake){
            this.$store.dispatch('addToCart', cake)
            },
        fetchData(){
            axios({
                url:'http://localhost/cake_plaza_backend/backend/pull_all.php',
                method: 'post',
                data: { cake_category: this.$route.name },
                })
                .then((response) => {
                    this.$store.dispatch('getAllCakes', response.data)
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
        }
    }
</script>