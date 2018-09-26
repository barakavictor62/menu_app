<template>
<div class="card">
            <div class="card-body">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your cart</span>
                    <span class="badge badge-secondary badge-pill">{{cart_items.length}}</span>
                </h4>
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Price</th>
                                <th></th>
                            </tr>
                        </thead >
                        <tbody >
                            <tr v-for="chosen in cart_items" :key="chosen.cake_id" >
                                <td>
                                    <img :src="require(`@/assets/${chosen.cake_img}`)" class="img-thumbnail" height="200" width="200" />
                                </td>
                                <td>{{chosen.cake_name}}</td>
                                <td>
                                    <input v-model="chosen.cake_quantity" class="form-control form-control-sm" type="number" min="1" aria-label="quantity" aria-describedby="item-quantity" />
                                </td>
                                <td>
                                    <input v-model="chosen.cake_weight" class="form-control form-control-sm" type="number" min="1" max="30" aria-label="quantity" aria-describedby="item-quantity" />  
                                </td>
                                <td>Ksh.{{chosen.cake_price}}</td>
                                <td>
                                    <i class="fa fa-trash-alt float-right" style="cursor: pointer;" @click="removeFromCart(chosen)"></i>
                                </td>
                            </tr>
                            <!--<tr>
                                <td colspan="4">Total</td>
                                <td>Ksh.{{subTotal}}</td>
                                <td></td>
                            </tr>-->
                        </tbody>
                    </table>
                </div>
                <ul class="list-group mb-3">
                    <!--<li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span class="text-success">-$5</span>
                    </li>-->
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total (KSH)</span>
                        <strong>Ksh.{{subTotal}}</strong>
                    </li>
                </ul>
            </div>
        </div>
</template>
<script>
export default {
    name: 'Cart',
    computed: {
    cart_items(){
        return this.$store.getters.cart
        },
    subTotal(){
        var subtotal = 0;
        this.cart_items.forEach(item => {
            var item_price = item.cake_price;
            subtotal += (parseInt(item_price));
        });
        return subtotal;
        }
    },
    methods:{
        removeFromCart(cake){
            this.$store.dispatch('removeFromCart', cake)
            }
        }
}
</script>
<style scoped>

</style>


