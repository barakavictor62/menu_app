<template>
    <div class="container-fluid">
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3" style="margin:0 auto;">
                        <h4>Here you can find delicious Cakes</h4>
                        <h2>Cake Plaza</h2>
                        <p>Get The Best Tasting Cakes in Plaza At the Most Amazing Prizes!!!</p>
                        <div class="primary-button">
                            <router-link :to="{ name: 'cakes' }" class="scroll-link"><strong>Order Right Now</strong></router-link>
                            <!--<a href="#" class="scroll-link" data-id="book-table" >Order Right Now</a>-->
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
                            <img src="../assets/img/Blueberries.jpg" alt="">
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
                            <img src="../assets/img/set.jpg" alt="">
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
                            <img src="../assets/img/cook_breakfast.png" alt="Breakfast">
                            <h4>BreakFast Cakes</h4>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <a href="menu.html">
                            <img src="../assets/img/Birthday.png" alt="Lunch">
                            <h4>Birthday Cakes</h4>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <a href="menu.html">
                            <img src="../assets/img/Anniversary.png" alt="Dinner">
                            <h4>Anniversary Cakes</h4>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <a href="menu.html">
                            <img src="../assets/img/wedding.png" alt="Desserts">
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
                </div>
                <div class="row">
                    <div class="card-group col-md-9 " style="margin:0 auto;">
                        <div class="card" style="border:none;">
                            <img src="../assets/img/cupcake_img.jpg" class="card-img-top" alt="">
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
                            <img src="../assets/img/MudSlide.jpeg" alt="">
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
                            <img src="../assets/img/vanilaTower.jpg" alt="">
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
                            <img src="../assets/img/cartoonCake.jpg" alt="">
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
                            <img src="../assets/img/blog_post_01.jpg" alt="">
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
                            <img src="../assets/img/blog_post_02.jpg" alt="">
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
                            <img src="../assets/img/blog_post_03.jpg" alt="">
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
                            <img src="../assets/img/blog_post_04.jpg" alt="">
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
                            <li><a href="#"><i class="fas fa-rss"></i></a></li>
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
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
	padding: 180px 0px;
	background-image: url(../assets/img/Group6.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	text-align: center;
}

.banner h4 {
	margin-top: 0px;
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	font-size: 15px;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.banner h2 {
	font-family: 'Spectral', serif;
	font-size: 44px;
	font-weight: 600;
	color: #fff;
	text-transform: uppercase;
}

.banner p {
	color: #fff;
	font-size: 14px;
}

.banner .primary-button {
	margin-top: 30px;
}
.primary-button a {
    display: inline-block;
    background-color: #ea7322;
    color: #fff;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 12px 20px;
    border-radius: 3px;
    text-decoration: none;
    letter-spacing: 0.5px;
}
.primary-white-button a {
    display: inline-block;
    background-color: #fff;
    color: #ea7322;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    padding: 12px 20px;
    border-radius: 3px;
    text-decoration: none;
    letter-spacing: 0.5px;
}

section.services {
	padding-bottom: 100px;
}

.services .service-item  a {
	text-decoration: none;
}

.services .service-item {
	text-align: center;
}

.services .service-item img {
	max-width: 100%;
	overflow: hidden;
	border: 10px solid #eaf0ff;
	border-radius: 50%;
}

.services .service-item h4 {
	margin-top: 20px;
	font-size: 22px;
	color: #f2745f;
	font-family: 'Spectral', serif;
	font-weight: 600;
	margin-bottom: 0px;
}


section#book-table {
	padding: 80px 0px;
	background-image: url(../assets/img/book-bg.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	text-align: center;
}

#book-table .heading h2 {
	margin-top: 0px;
	margin-bottom: 70px;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #fff;
}

section#book-table .left-image img {
	width: 100%;
	overflow: hidden;
}


section.cook-delecious {
	padding: 100px 0px;
}

.cook-delecious .first-image {
	margin-right: -30px;
	margin-top: 18%;
}

.cook-delecious .first-image img {
	width: 100%;
	overflow: hidden;
}

.cook-delecious .second-image {
	margin-left: -30px;
	margin-top: 18%;
}

.cook-delecious .second-image img {
	width: 100%;
	overflow: hidden;
}

.cook-delecious .cook-content {
	background-color: #ea7322;
	text-align: center;
	padding: 30px;
}

.cook-delecious .cook-content h4 {
	margin-top: 0px;
	margin-bottom: 20px;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #fff;
}

.cook-content .contact-content {
	background-color: #f0ad4e;
	padding: 20px 30px;
}

.cook-content .contact-content span {
	font-size: 11px;
	text-transform: uppercase;
	color: #fff;
	letter-spacing: 1px;
	border: none;
	width: auto;
	height: auto;
	margin-top: 0px;
	margin-bottom: 0px;
}

.cook-content .contact-content h6 {
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 700;
	color: #fff;
	letter-spacing: 0.5px;
}

.cook-content span {
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: 11px;
	text-transform: uppercase;
	color: #fff;
	letter-spacing: 1px;
	border: 1px solid #da6856;
	width: 25px;
	height: 25px;
	display: inline-block;
	line-height: 25px;
	border-radius: 50%;
}



/*.right-info {
	height: 282px;
	background-color: #fff;
	margin-left: -30px;
	padding: 30px;
}*/

.right-info h4 {
	margin-top: 0px;
	font-family: 'Spectral', serif;
	font-size: 28px;
}

.right-info select {
	border-right: none;
	border-left: none;
	border-top: none;
	width: 100%;
	outline: none;
	border-bottom: 1px solid #eee;	
	font-size: 14px;
	color: #9a9a9a;
	padding-left: 10px;
	height: 40px;
}

.right-info input {
	margin-top: 30px;
	margin-bottom: 30px;
	box-shadow: none;
	outline: none;
	border-right: none;
	border-left: none;
	border-top: none;
	border-bottom: 1px solid #eee;
	font-size: 14px;
	color: #9a9a9a;
}

.right-info button {
	width: 100%;
	display: inline-block;
	background-color: #ea7322;
	color: #fff!important;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	padding: 12px 20px;
	border-radius: 3px;
	text-decoration: none;
	letter-spacing: 0.5px;
}

.right-info button {
	margin-top: 30px;
}

.right-info select {
	margin-top: 30px;
}
.right-info select.person {
	margin-top: 0px;
}
.right-info button {
	margin-top: 30px;
}
section#book-table .left-image img {
	width: 100%;
	overflow: hidden;
}

section.get-app {
	background-color: #ea7322;
	text-align: center;
	padding: 60px 0px;
}

.get-app .heading h2 {
	margin-top: 0px;
	margin-bottom: 30px;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #fff;
}


section.featured-food {
	padding: 100px 0px;
}

.featured-food .heading h2 {
	text-align: center;
	margin-top: 0px;
	margin-bottom: 80px;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #121212;
}

.featured-food .food-item {
	background-color: #f2f6ff;
	padding: 30px;
}

.food-item h2 {
	margin-top: 0px;
	margin-bottom: 30px;
	padding-bottom: 8px;
	font-family: 'Spectral', serif;
	font-size: 28px;
	width: 100%;
	border-bottom: 1px solid #d9dde5;
	color: #121212;
}

.food-item img {
	width: 100%;
	overflow: hidden;
	position: relative;
}

.food-item .price {
	font-size: 17px;
	color: #ea7322;
	font-weight: 500;
	letter-spacing: 0.5px;
	padding: 8px 14px;
	position: absolute;
	right: 45px;
	margin-top: -40px;
	background-color: rgba(250, 250, 250, 0.9);
}

.food-item .text-content {
	background-color: #fff;
	padding: 20px 20px 10px 20px;
}

.food-item h4 {
	margin-top: 0px;
	font-family: 'Spectral', serif;
	font-size: 18px;
	color: #121212;
}




section.our-blog {
	background-color: #f2f6ff;
	padding: 100px 0px 70px 0px;
}

.our-blog .heading h2 {
	text-align: center;
	margin-top: 0px;
	margin-bottom: 80px;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #121212;
}

.blog-post img {
	width: 50%;
	overflow: hidden;
}

.blog-post {
	margin-bottom: 30px;
	display: inline-block;
}

.blog-post .right-content {
	background-color: #fff;
	width: 50%;
	float: right;
	padding: 20px;
}

.blog-post .right-content h4 {
	margin-top: 0px;
	margin-bottom: 0px;
	padding-bottom: 8px;
	font-family: 'Spectral', serif;
	font-size: 21px;
	color: #121212;
}

.blog-post .right-content span {
	font-size: 13px;
	color: #7a7a7a;
	display: inline-block;
	margin-bottom: 18px;
}

.blog-post .right-content .text-button a {
	font-size: 13px;
	font-weight: 500;
	color: #ea7322;
	text-decoration: none;
	text-transform: uppercase;
	margin-top: 12px;
	display: inline-block;
}

.blog-post .date {
	font-size: 17px;
	color: #ea7322;
	font-weight: 500;
	letter-spacing: 0.5px;
	padding: 8px 14px;
	position: absolute;
	left: 15px;
	top: 0px;
	background-color: rgba(250, 250, 250, 0.9);
}

section.sign-up {
	padding: 80px 0px;
	background-image: url(../assets/img/signup-bg.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	text-align: center;
}


.sign-up .heading h2 {
	text-align: center;
	margin-top: 0px;
	margin-bottom: 40px;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #fff;
}

.sign-up button {
	margin-left: -30px;
	display: inline-block;
	background-color: transparent;
	color: #fff!important;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	padding: 12px 20px;
	border-radius: 3px;
	text-decoration: none;
	letter-spacing: 0.5px;
	border: 1px solid #fff;
}

.sign-up input {
	margin-right: -30px;
	height: 44px;
	border: 3px;
	background-color: rgba(250, 250, 250, 0.9);
	color: #5a5a5a!important;
	box-shadow: none!important;
	outline: none!important;
}


footer {
	background-color: #363e50;
	line-height: 130px;
	text-align: center;
}

footer p {
	line-height: 120px;
	color: #fff;
	margin-top: 5px;
}

footer p em {
	font-style: normal;
	color: #ea7322;
	font-weight: 500;
}

footer ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

footer ul li {
	display: inline-block;
	margin: 0px 5px;
}

footer ul li i {
	width: 36px;
	height: 36px;
	display: inline-block;
	text-align: center;
	line-height: 36px!important;
	background-color: #fff;
	border-radius: 50%;
	color: #363e50;
	transition: all 0.5s;
}

footer ul li i:hover {
	background-color: #ea7322;
}
</style>
