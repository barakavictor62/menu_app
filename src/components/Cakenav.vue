<template>
<nav class="py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link :to="{ name: 'cakes' }" class="py-2 d-none d-md-inline-block">Birthday Cakes</router-link>
        <router-link :to="{ name: 'cakes_wedding'}" class="py-2 d-none d-md-inline-block">Wedding Cakes</router-link>
        <router-link :to="{ name: 'pastries' }" class="py-2 d-none d-md-inline-block">Pastries</router-link>
        <router-link :to="{ name: 'pizza' }" class="py-2 d-none d-md-inline-block">Pizza</router-link>
        <router-link :to="{ name: 'pastries' }" class="py-2 d-none d-md-inline-block">Beef</router-link>
        <router-link :to="{ name: 'pizza' }" class="py-2 d-none d-md-inline-block">Chicken</router-link>
        <router-link :to="{ name: 'pastries' }" class="py-2 d-none d-md-inline-block">Fish</router-link>
        <router-link :to="{ name: 'pizza' }" class="py-2 d-none d-md-inline-block">Soup</router-link>
        <router-link :to="{ name: 'pizza' }" class="py-2 d-none d-md-inline-block">Potatoes/Snacks</router-link>
        <router-link :to="{ name: 'pizza' }" class="py-2 d-none d-md-inline-block">Burgers</router-link>
        <router-link :to="{ name: 'pizza' }" class="py-2 d-none d-md-inline-block">Drinks</router-link>

      </div>
    </nav>
</template>
<script>
export default{
    name:"Cakenav",
}
</script>
<style scoped>
</style>
