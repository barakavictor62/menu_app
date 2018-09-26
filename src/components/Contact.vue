<template>
<div class="container-fluid">
    <section class="page-heading">
        <div class="container" style="padding-top: 80px;">
            <div class="row">
                <div class="col-md-12">
                    <h1>Contact Us</h1>
                    <p>Have Any Questions, Don't Be Afraid To Contact Us.</p>
                    <div class="primary-button">
                        <a href="#us" >Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="parallax-section" style="padding-top: 150px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="heading">Cake Gallery</h1>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="../assets/img/pink.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h3>Fresh Cakes</h3>
                            <p class="card-text">
                                <span>chocolate/ vanilla/ strawberry and many flavours </span>
                            </p>
                        </div>
                    </div>
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="../assets/img/bread.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h3>Fresh Bread</h3>
                            <p class="card-text">
                                <span>white/ brown</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="../assets/img/wedd.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h3>Wedding Cakes</h3>
                            <p class="card-text">
                                <span>Vanilla/ Fruit/ Chocolate and many more flavours</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="../assets/img/home.jpeg" alt="Card image cap">
                        <div class="card-body">
                            <h3>Reception</h3>
                            <p class="card-text">
                                <span>Fresh display of food.</span>
                            </p>
                        </div>
                    </div>
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="../assets/img/Scones.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h3>Pastries</h3>
                            <p class="card-text">
                                <span>Fresh cookies/ manadazi/ Scones</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr>  
        </div>
    </section>



    <section class="contact-us"  id="us" >
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="section-heading">
                        <h2>Message</h2>
                    </div>
                    <form id="contact" action="" method="post">
                        <div class="row">
                            <div class="col-md-5">
                                <fieldset>
                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required="">
                                </fieldset>
                                <fieldset>
                                    <input name="email" type="text" class="form-control" id="email" placeholder="Your email..." required="">
                                </fieldset>
                                <fieldset>
                                    <input name="phone" type="text" class="form-control" id="phone" placeholder="Your phone..." required="">
                                </fieldset>
                            </div>
                            <div class="col-md-7">
                                <fieldset>
                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                </fieldset>
                                <fieldset>
                                    <button type="submit" id="form-submit" class="btn">Send Message</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <div class="section-heading contact-info">
                        <h2>About Us</h2>
                        <p><em>We Have a 24/7 response rate. We are at:</em><br> <br><em>Mugo Kabiru Rd, Nairobi City<br> Hours: </em><br>
                            Thursday 8AM–8PM <br>
                            Friday	8AM–8PM <br>
                            Saturday 8AM–8PM  <br>
                            Sunday 8AM–8PM  <br>
                            Monday 8AM–8PM  <br>
                            Tuesday	8AM–8PM  <br>
                            Wednesday 8AM–8PM  <br>

                           <em> Phone: 0715 822036 or 0732 816 558 </em> </p>


                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="map">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="map">
        <!-- How to change your own map point which is verrrrrryyyy important
            1. Go to Google Maps
            2. Click on your location point
            3. Click "Share" and choose "Embed map" tab
            4. Copy only URL and paste it within the src="" field below
        -->
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.2892677164!2d36.71777298668109!3d-1.3006889284858811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109bf75783a1%3A0x8435ee2938483816!2sCake+Plaza!5e0!3m2!1sen!2ske!4v1535647650814" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    </section>
</div>
</template>
<script>
export default {
    name: 'Contact'
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
.contact-us .section-heading h2 {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 60px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #121212;
}
section.contact-us {
	margin-top: 100px;
	margin-bottom: 60px;
}

.contact-us .section-heading h2 {
	text-align: left;
	margin-top: 0px;
	margin-bottom: 60px;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: #121212;
}

.contact-us p {
	margin-top: -5px;
}

.contact-us em {
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	color: #aaa;
}

.contact-us input {
  border-radius: 3px;
  padding-left: 15px;
  font-size: 13px;
  color: #4a4a4a;
  background-color: #f4f4f4;
  outline: none!important;
  border: none;
  box-shadow: none;
  line-height: 44px;
  height: 44px;
  width: 100%;
  margin-bottom: 30px;
}

.contact-us textarea {
  border-radius: 3px;
  padding-left: 15px;
  padding-top: 10px;
  font-size: 13px;
  color: #4a4a4a;
  background-color: #f4f4f4;
  outline: none;
  border: none;
  box-shadow: none;
  height: 122px;
  max-height: 220px;
  width: 100%;
  margin-bottom: 25px;
}

.contact-us button {
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

section.map {
	margin-bottom: 150px;
}

section.map #map {
	height: 450px;
}

</style>
