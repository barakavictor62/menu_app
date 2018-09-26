<template>
 <div class="container-fluid">
            <section class="page-heading">
                <div class="container" style="padding-top: 80px;">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>Our Cakes</h1>
                            <p>Enjoy our scrumptious Cakes at affordable prices.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="breakfast-menu" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1" style="margin:0 auto;">
                            <div class="breakfast-menu-content">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="left-image">
                                            <a  href="#"><img src="../assets/databaseImages/anniversary.jpg" alt="Breakfast"></a>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                    <router-link :to="{ name: 'pastries' }" class="nav-link"><h2>Pastries</h2></router-link>
                                        <!--<a href="pastries.html"><h2>Pastries</h2></a>-->
                                        <div id="owl-breakfast" class="owl-carousel owl-theme">
                                            <div class="item col-md-12">
                                                <div class="food-item">
                                                    <img src="../assets/databaseImages/croissant.jpg" alt="">
                                                    <div class="price">Ksh. 200</div>
                                                    <div class="text-content">
                                                        <h4>Croissant</h4>
                                                        <p>Try the croissant with warm milk or a good cup of morning Coffee.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item col-md-12">
                                                <div class="food-item">
                                                    <img src="../assets/databaseImages/cinamon.jpg" alt="">
                                                    <div class="price">Ksh. 100</div>
                                                    <div class="text-content">
                                                        <h4>Cinnamon Rolls</h4>
                                                        <p>Try the Cinnamon Rolls with warm milk or a good cup of morning Coffee.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item col-md-12">
                                                <div class="food-item">
                                                    <img src="../assets/databaseImages/buns.jpeg" alt="">
                                                    <div class="price">Ksh. 50</div>
                                                    <div class="text-content">
                                                        <h4>Buns</h4>
                                                        <p>Try the freshly baked buns with warm milk or a good cup of morning Coffee.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Menu',
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
section.page-heading {
    padding: 80px 0px;
    background-image: url(../assets/img/heading-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    text-align: center;
}
.page-heading h1 {
    margin-top: 0px;
    margin-bottom: 20px;
    font-family: 'Spectral', serif;
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
}
.page-heading p {
    color: #fff;
    font-size: 14px;
    padding: 0px 25%;
    margin-bottom: 0px;
}
section.breakfast-menu {
	margin-top: 100px;
}

section.breakfast-menu .price {
	right: 15px;
}

.breakfast-menu-content {
	background-color: #f2f6ff;
	padding: 30px 0px 30px 30px;
}

.breakfast-menu-content .left-image img {
	width: 100%;
	overflow: hidden;
}

.breakfast-menu-content .left-image {
	margin: -30px 0px -30px -30px;
}

.breakfast-menu-content #owl-breakfast {
	margin-left: -15px;
}

.breakfast-menu-content h2 {
	margin-top: 0px;
	margin-bottom: 30px;
	padding-bottom: 8px;
	font-family: 'Spectral', serif;
	font-size: 28px;
	width: 94.5%;
	border-bottom: 1px solid #d9dde5;
	color: #121212;
}
</style>
