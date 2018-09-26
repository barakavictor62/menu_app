<template>
  <div id="app">
     <nav class="navbar navbar-expand-md navbar-mynav shadow sticky-top">
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                <img src="./assets/Celia/Celia/Logo.png" height="30" alt="">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> 
                        <router-link :to="{ name: 'home' }" class="nav-link"><strong>Home</strong></router-link>
                    </li>
                    <!--<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle"  id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><strong>Products</strong></a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <router-link :to="{ name: 'cakes' }" class="dropdown-item">Birthday Cakes</router-link>
                            <router-link :to="{ name: 'cakes_wedding'}" class="dropdown-item">Wedding Cakes</router-link>
                            <router-link :to="{ name: 'pastries' }" class="dropdown-item">Pastries</router-link>
                            <router-link :to="{ name: 'pizza' }" class="dropdown-item">Pizza</router-link>
                        </div>
                    </li>-->
                    <li class="nav-item"> 
                        <router-link :to="{ name: 'cakes', params: { table: 'cakes' } }" class="nav-link"><strong>Our Menu</strong></router-link>
                    </li>
                    <li class="nav-item"> 
                            <router-link :to="{ name: 'blog' }" class="nav-link"><strong>Blog</strong></router-link>
                        </li>
                    <li class="nav-item"> 
                            <router-link :to="{ name: 'contact' }" class="nav-link"><strong>Contact</strong></router-link>
                    </li>
                    <li class="nav-item">
                            <router-link to="/got_to_checkout" class="nav-link" ><i class="fa fa-shopping-cart"></i> 
                                <span class="badge badge-light">{{items_chosen.length}}</span></router-link>
                    </li>
                </ul>
            </div>
        </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    items_chosen(){
      return this.$store.getters.cart
      },
    },
}
</script>

<style>

</style>
