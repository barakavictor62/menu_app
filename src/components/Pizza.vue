<template>
<div>
    <h1>this is the pizza component</h1>
    <div v-for="pastry in pastries" :key="pastry.cake_id">
        {{pastry.name}}
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Pizza',
    computed:{
            pastries(){
                return this.$store.getters.pastries
            }
        },
    created(){
        this.fetchPastries()
    },
    methods:{
        fetchPastries(){
            axios({
                url:'http://localhost/cake_plaza_backend/backend/pull_all.php',
                method: 'post',
                data: { cake_category: this.$route.name },
            })
            .then((response) => {
                this.$store.dispatch('getAllPastries', response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    }
}
</script>
<style scoped>
</style>
