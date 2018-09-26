
$(document).ready(function(){  
    //the common vuex store for keeping track of the global state
    const store = new Vuex.Store({
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
    Vue.component('Home',{
        name:'Home',
        template:`
        <div class="container-fluid">
            <section class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3" style="margin:0 auto;">
                            <h4>Here you can find delicious Cakes</h4>
                            <h2>Cake Plaza</h2>
                            <p>Get The Best Tasting Cakes in Plaza At the Most Amazing Prizes!!!</p>
                            <div class="primary-button">
                                <a href="#" class="scroll-link" data-id="book-table" >Order Right Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cook-delecious">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-1">
                        <div class="first-image">
                            <img src="img/Blueberries.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cook-content">
                            <h4>We bake the best delicious cakes</h4>
                            <div class="contact-content">
                                <span>You can call us on:</span>
                                <h6>0732 816 558 <br> or <br> 0715 822 036</h6>
                            </div>
                            <span>or</span>
                            <div class="primary-white-button">
                                <a href="#" class="scroll-link" data-id="book-table">Order And Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="second-image">
                            <img src="img/set.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="services">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="service-item">
                        <a href="menu.html">
                        <img src="img/cook_breakfast.png" alt="Breakfast">
                        <h4>BreakFast Cakes</h4>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="service-item">
                        <a href="menu.html">
                        <img src="img/Birthday.png" alt="Lunch">
                        <h4>Birthday Cakes</h4>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="service-item">
                        <a href="menu.html">
                        <img src="img/Anniversary.png" alt="Dinner">
                        <h4>Anniversary Cakes</h4>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="service-item">
                        <a href="menu.html">
                        <img src="img/wedding.png" alt="Desserts">
                        <h4>Wedding Cakes</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="book-table">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="heading">
                        <h2>Book Your Cake Now</h2>
                    </div>
                </div>
                <div class="row">
                <div class="card-group col-md-9 " style="margin:0 auto;">
                <div class="card" style="border:none;">
                        <img src="img/cupcake_img.jpg" class="card-img-top" alt="">
                </div>
                <div class="card right-info" style="border:none;">
                    <div class="card-body">
                        <h4>Reservation</h4>
                        <form id="form-submit" action="" method="get">
                            <div class="row">
                                <div class="col-md-6">
                                    <fieldset>
                                        <select  required name='day' onchange='this.form.()'>
                                            <option value="">Cake Type</option>
                                            <option value="Monday">Birthday Cake</option>
                                            <option value="Tuesday">Wedding Cake</option>
                                            <option value="Wednesday">Anniversary Cake</option>
                                            <option value="Thursday">Pastries</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-md-6">
                                    <fieldset>
                                        <select  required name='hour' onchange='this.form.()'>
                                            <option value="">Select hour</option>
                                            <option value="10-00">10:00</option>
                                            <option value="12-00">12:00</option>
                                            <option value="14-00">14:00</option>
                                            <option value="16-00">16:00</option>
                                            <option value="18-00">18:00</option>
                                            <option value="20-00">20:00</option>
                                            <option value="22-00">22:00</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-md-6">
                                    <fieldset>
                                        <input name="name" type="name" class="form-control" id="name" placeholder="Full name" required="">
                                    </fieldset> 
                                </div>
                                <div class="col-md-6">
                                    <fieldset>
                                        <input name="phone" type="phone" class="form-control" id="phone" placeholder="Phone number" required="">
                                    </fieldset>
                                </div>
                                <div class="col-md-6">
                                    <fieldset>
                                        <select  required class="person" name='persons' onchange='this.form.()'>
                                            <option value="">Cake Size</option>
                                            <option value="1-Person">1/2 kg Cake</option>
                                            <option value="2-Persons">1 kg Cake</option>
                                            <option value="3-Persons">1.2 kg Cake</option>
                                            <option value="4-Persons">2 kg Cake</option>
                                            <option value="5-Persons">2.5 kg Cake</option>
                                            <option value="6-Persons">3 kg Cake</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-md-6">
                                    <fieldset>
                                        <a href="menu.html"><button type="submit" id="form-submit" class="btn">Book Cake</button></a>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

    <section class="get-app">
        <div class="container">
            <div class="row">
                <div class="col-md-12 heading">
                    <h2>Get application for your phone</h2>
                </div>
                <div class="col-md-12 primary-white-button">
                    <a href="#">Download now</a>
                </div>
            </div>
        </div>
    </section>

    <section class="featured-food">
        <div class="container">
            <div class="row ">
                <div class="heading" style="margin:0 auto;">
                    <h2>Weekly Featured Cake</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="food-item">
                        <h2>Random New Cakes</h2>
                        <img src="img/MudSlide.jpeg" alt="">
                        <div class="price">Ksh 1200</div>
                        <div class="text-content">
                            <h4>1.5 kg Mudslide Cake</h4>
                            <p>Try the new muddy chocolate sweet mint flavored cake..;) </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="food-item">
                        <h2>Wedding Cakes</h2>
                        <img src="img/vanilaTower.jpg" alt="">
                        <div class="price">Ksh. 25000</div>
                        <div class="text-content">
                            <h4>Tower Vanilla Flavoured Cake.</h4>
                            <p>Surprise your guest with our new yummy flavoured vanilla flavoured cake.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="food-item">
                        <h2>Birthday Cakes</h2>
                        <img src="img/cartoonCake.jpg" alt="">
                        <div class="price">Ksh. 3500</div>
                        <div class="text-content">
                            <h4>Cartoon Themed Cake</h4>
                            <p>Get your baby a cartoon themed cake for their special day...YUM!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="our-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="heading">
                        <h2>Our blog post</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_01.jpg" alt="">
                        <div class="date">26 July 2018</div>
                        <div class="right-content">
                            <h4>How to Make Cheese Cake</h4>
                            <span>Cakes/ Admin</span>
                            <p>How to make the jiggly japanese Cheese cake with all this home based items...</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_02.jpg" alt="">
                        <div class="date">21 July 2018</div>
                        <div class="right-content">
                            <h4>Healthy Cakes without sugar?</h4>
                            <span>Health / Admin</span>
                            <p>Here are some healthy options cakes for all you trying to avoid cake but can't...</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_03.jpg" alt="">
                        <div class="date">28 June 2018</div>
                        <div class="right-content">
                            <h4>Best Cakes by Pinterest</h4>
                            <span>Rating / Admin</span>
                            <p>Everyday New cakes..but what really makes cakes good. Today we present the top best 20...</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_04.jpg" alt="">
                        <div class="date">24 June 2018</div>
                        <div class="right-content">
                            <h4>Mum's Natural Bakes and Treats</h4>
                            <span>Cakes / Chef</span>
                            <p>Today we present Mums best natural cakes and treats for your "Chamas"...</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="sign-up">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="heading">
                        <h2>Signup for our newsletters</h2>
                    </div>
                </div>
            </div>
            <form id="contact" action="" method="get" style="margin:0 auto;">
                <div class="row col-md-6" style="margin:0 auto;">
                    <div class="col-md-9 col-md-offset-8">
                        <fieldset>
                            <input name="email" type="text" class="form-control" id="email" placeholder="Enter your email here..." required="">
                        </fieldset>
                    </div>
                    <div class="col-md-2">
                        <fieldset>
                            <button type="submit" id="form-submit" class="btn">Send Message</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <p>Copyright &copy; 2018 Cake Plaza</p>
            </div>
            <div class="col-md-4">
                <ul class="social-icons">
                    <li><a rel="nofollow" href="http://www.facebook.com/templatemo" target="_parent"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fab fa-rss"></i></a></li>
                    <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <p>Designed by <a rel="nofollow" href="#" target="_parent"><em>Celia Yano</em></a></p>
            </div>
        </div>
    </div>
</footer>
        </div>
    `
    })

    Vue.component('Menu',{
        name:'Menu',
        template:`
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
                                            <a  href="#"><img src="databaseImages/anniversary.jpg" alt="Breakfast"></a>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                    <router-link :to="{ name: 'pastries' }" class="nav-link"><h2>Pastries</h2></router-link>
                                        <!--<a href="pastries.html"><h2>Pastries</h2></a>-->
                                        <div id="owl-breakfast" class="owl-carousel owl-theme">
                                            <div class="item col-md-12">
                                                <div class="food-item">
                                                    <img src="databaseImages/croissant.jpg" alt="">
                                                    <div class="price">Ksh. 200</div>
                                                    <div class="text-content">
                                                        <h4>Croissant</h4>
                                                        <p>Try the croissant with warm milk or a good cup of morning Coffee.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item col-md-12">
                                                <div class="food-item">
                                                    <img src="databaseImages/cinamon.jpg" alt="">
                                                    <div class="price">Ksh. 100</div>
                                                    <div class="text-content">
                                                        <h4>Cinnamon Rolls</h4>
                                                        <p>Try the Cinnamon Rolls with warm milk or a good cup of morning Coffee.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item col-md-12">
                                                <div class="food-item">
                                                    <img src="databaseImages/buns.jpeg" alt="">
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
        `
    })

    Vue.component('items-component', {
        name:'items-component',
        template: `
        <div class="container" style="margin-top:6vh;">
            <div class="row">
                <div class="col-md-4 items" v-for="item in items">
                    <div class="card h-100" >
                        <img :src="item.cake_img" class="card-img-top" />
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
      `,
      data(){
          return{
              loading: false,
            }
        },
        computed:{
            items(){
                return store.getters.cakes_displayed
            }

        },
      created(){
          this.fetchData()
      },
      watch:{
          '$route':'fetchData'
      },
      methods:{
          pushToCart(cake){
              store.dispatch("addToCart", cake)
          },
          fetchData(){
            axios({
                url:"http://localhost/side-shopping-cart/side-shopping-cart/backend/pull_all.php",
                method: 'post',
                data: { cake_category: this.$route.name },
            })
            .then(function (response) {
                store.dispatch("getAllCakes", response.data)
                this.whichItems()
            })
            .catch(function (error) {
                console.log(error);
            });
          },
        }
    });

    Vue.component('pizza',{
        name:'pizza',
        template:`<div>
        <h1>this is the pizza component</h1>
        <div v-for="pastry in pastries">
        {{pastry.name}}
        </div>
        </div>`,
        computed:{
            pastries(){
                return store.getters.pastries
            }
        },
        created(){
            this.fetchPastries()
        },
        methods:{
            fetchPastries(){
                axios({
                    url:"http://localhost/side-shopping-cart/side-shopping-cart/backend/pull_all.php",
                    method: 'post',
                    data: { cake_category: this.$route.name },
                })
                .then(function (response) {
                    store.dispatch("getAllPastries", response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }

        }
    })

    Vue.component('shopping-cart-component', {
        name:'shopping-cart-component',
        template: `
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
                            <tr v-for="chosen in cart_items" >
                                <td>
                                    <img :src="chosen.cake_img" class="img-thumbnail" height="200" width="200" />
                                </td>
                                <td>{{chosen.cake_name}}</td>
                                <td>
                                    <input v-model="chosen.cake_quantity" class="form-control form-control-sm" type="number" min="1" aria-label="quantity" aria-describedby="item-quantity" />
                                </td>
                                <td>
                                    <input v-model="chosen.cake_weight" class="form-control form-control-sm" type="number" min="1" max="30" aria-label="quantity" aria-describedby="item-quantity" />  
                                </td>
                                <td>
                                    Ksh.{{chosen.cake_price }}
                                </td>
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
        </div>`,
      computed: {
        cart_items(){
            return store.getters.cart
        },
        subTotal(){
            var subtotal = 0;
            this.cart_items.forEach(item => {
              item_price = item.cake_price;
              subtotal += (parseInt(item_price));
            });
            return subtotal;
        }
      },
      methods:{
        removeFromCart(cake){
            store.dispatch('removeFromCart', cake)
        }
    }
    });

    
    Vue.component('billing-address-component',{
        name:'billing-address-component',
        template:`
        <div class="container"> 
        <div class="row">
            <div class="col-md-5 order-md-2 mb-4">

                <router-view></router-view>

            </div>
            <div class="col-md-7 order-md-1">
                <h4 class="mb-3">Billing address</h4>
                <form class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com">
                        <div class="invalid-feedback">
                             Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="phone-number">Phone Number </label>
                        <input type="text" class="form-control" id="phone-number" placeholder="+254 700 0000">
                    </div>
                    <hr class="mb-4">

                    <h4 class="mb-3">Payment</h4>
                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="Mpesa" name="paymentMethod" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="Mpesa">Mpesa</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                            <label class="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="debit">Debit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="paypal">PayPal</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input type="text" class="form-control" id="cc-name" placeholder="" required>
                            <small class="text-muted">Full name as displayed on card</small>
                            <div class="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" class="form-control" id="cc-number" placeholder="" required>
                            <div class="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                            <div class="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                            <div class="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                    <br>
                </form>
            </div>
        </div>
        </div>
        </div>
        </div>
        `,
        computed:{
            items_chosen(){
                return store.getters.cart
            } , 
        },
    })

    const routes = [
        { 
            path: '/', 
            name:'home',
            component:Vue.component('Home'),
            props:true
        },
        { 
            path: '/menu', 
            name:'menu',
            component:Vue.component('Menu'),
            props:true
        },
        { 
            path: '/got_to_checkout', 
            component:Vue.component('billing-address-component'),
            children: [{
                path:'/',
                component: Vue.component('shopping-cart-component')
            }],
            props:true 
            },
        { 
            path: '/birthday', 
            name:'cakes',
            component:Vue.component('items-component'),
            props:true
        },
        { 
            path: '/wedding_cakes', 
            name:'cakes_wedding',
            component:Vue.component('items-component'),
            props:true
        },
        { 
            path: '/pastries', 
            name:'pastries',
            component:Vue.component('items-component'),
            props:true
        },
        {
            path:'/pizza',
            name:'pizza',
            component: Vue.component('pizza'),
            props: true
        }
      ];

    const router = new VueRouter({
        routes,
        scrollBehavior(to, from,savedPosition){
            return {x: 0,y: 0 }
        }
      })

    const app = new Vue({
        router,
        data :{

        },
        created(){

        },
        computed: {
            items_chosen(){
                return store.getters.cart
            },

          },
        methods:{
        }
    }).$mount("#app");
});