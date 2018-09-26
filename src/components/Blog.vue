<template>
<div class="container-fluid">
<section class="page-heading">
        <div class="container" style="padding-top: 80px;">
            <div class="row">
                <div class="col-md-12">
                    <h1>Our Blog</h1>
                    <p>Enjoy our new and current news on Cakes and Treats...(Now With Recipes!)</p>
                </div>
            </div>
        </div>
    </section>
    <section class="blog-page">
        <div class="container" style="">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="blog-item">
                        <img src="../assets/databaseImages/cheesecake.jpeg" alt="">
                        <div class="date">26 July 2018</div>
                        <div class="down-content">
                            <h4>How to Make Cheese Cake</h4>
                            <span>Cakes / Admin</span>
                            <p>How to make the jiggly japanese Cheese cake with all this home based items and a good 180 degrees oven. Chef Nampa takes you step by step on this amazing modern cheese cake journey.</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-md-offset-2">
                    <div class="blog-item">
                        <img src="../assets/databaseImages/healthier.jpeg" alt="">
                        <div class="date">21 July 2018</div>
                        <div class="down-content">
                            <h4>Healthy Cakes without sugar?</h4>
                            <span>Health / Admin</span>
                            <p>Here are some healthy options cakes for all you trying to avoid cake but can't seem to stop eating or even just craving them. Try the following amazing Healthy cakes to beat that weight or that craving that doesn't seem to go away. </p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-md-offset-2">
                    <div class="blog-item">
                        <img src="../assets/databaseImages/blackBerrywedding1.jpg" alt="">
                        <div class="date">28 June 2018</div>
                        <div class="down-content">
                            <h4>Best Cakes by Pinterest</h4>
                            <span>Rating / Admin</span>
                            <p>Everyday New cakes..but what really makes cakes good. Today we present the top best 20 cakes as rated by the famous chefs on Pinterest(Some Even Include Recipes :0!!)</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-md-offset-2">
                    <div class="blog-item">
                        <img src="../assets/databaseImages/mandazi.jpg" alt="">
                        <div class="date">24 June 2018</div>
                        <div class="down-content">
                            <h4>Mum's Natural Bakes and Treats</h4>
                            <span>Cakes / Chef</span>
                            <p>Today we present Mums best natural cakes and treats for your "Chamas". This is all for you who forgot to make mandazis' and those plain cakes you made for your mums' on their Chama days.</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-md-offset-2">
                    <ul class="page-number">
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">&gt;&gt;</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
    name: 'Blog'
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
section.blog-page {
	margin-top: 100px;
}

section.blog-page .page-number {
	padding: 0;
	margin-top: 30px;
	margin-bottom: 100px;
	list-style: none;
	text-align: center;
	width: 100%;
}

section.blog-page .page-number li {
	display: inline-block;
	margin: 0 3px;
}

section.blog-page .page-number li.active a {
	background-color: #ea7322;
	color: #fff;
}

section.blog-page .page-number li a {
	transition: all 0.5s;
	width: 40px;
	height: 40px;
	line-height: 40px;
	display: inline-block;
	text-align: center;
	background-color: #f2f6ff;
	font-size: 15px;
	color: #343434;
	font-weight: 700;
	text-decoration: none;
}

section.blog-page .page-number li a:hover {
	background-color: #ea7322;
	color: #fff;
}

.blog-item img {
	width: 100%;
	overflow: hidden;
}

.blog-item {
	margin-bottom: 30px;
}

.blog-item .down-content {
	background-color: #f2f6ff;
	padding: 20px 30px;
}

.blog-item .down-content h4 {
	margin-top: 0px;
	margin-bottom: 0px;
	padding-bottom: 8px;
	font-family: 'Spectral', serif;
	font-size: 21px;
	color: #121212;
}

.blog-item .down-content span {
	font-size: 13px;
	color: #7a7a7a;
	display: inline-block;
	margin-bottom: 18px;
}

.blog-item .down-content .text-button a {
	font-size: 13px;
	font-weight: 500;
	color: #ea7322;
	text-decoration: none;
	text-transform: uppercase;
	margin-top: 12px;
	display: inline-block;
}

.blog-item .date {
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
.col-md-8{
    margin: 0 auto !important;
}
</style>
