<template>
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-info">
                            <h3>Restaurantly</h3>
                            <p>
                                A108 Adam Street <br>
                                NY 535022, USA<br><br>
                                <strong>Phone:</strong> +1 5589 55488 55<br>
                                <strong>Email:</strong> info@example.com<br>
                            </p>
                            <div class="social-links mt-3">
                                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                © Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name:"CallToActionApp",
    methods:{
        handlerClickLogout(){
            this.delete_cookie('token')
            this.UPDATE_AUTH(false)
            this.$router.push({name: "login"})
        },
        delete_cookie(name) {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
        ...mapMutations(['UPDATE_AUTH'])
    }
}
</script>

<style scoped>
#footer {
    background: black;
    padding: 0 0 30px 0;
    color: #fff;
    font-size: 14px;
  }
  
  #footer .footer-top {
    background: #0c0b09;
    border-top: 1px solid #37332a;
    border-bottom: 1px solid #28251f;
    padding: 60px 0 30px 0;
  }
  
  #footer .footer-top .footer-info {
    margin-bottom: 30px;
  }
  
  #footer .footer-top .footer-info h3 {
    font-size: 24px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 300;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
  }
  
  #footer .footer-top .footer-info p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Playfair Display", serif;
    color: #fff;
  }
  
  #footer .footer-top .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #28251f;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }
  
  #footer .footer-top .social-links a:hover {
    background: #cda45e;
    color: #fff;
    text-decoration: none;
  }
  
  #footer .footer-top h4 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    position: relative;
    padding-bottom: 12px;
  }
  
  #footer .footer-top .footer-links {
    margin-bottom: 30px;
  }
  
  #footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  #footer .footer-top .footer-links ul i {
    padding-right: 2px;
    color: #cda45e;
    font-size: 18px;
    line-height: 1;
  }
  
  #footer .footer-top .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  
  #footer .footer-top .footer-links ul li:first-child {
    padding-top: 0;
  }
  
  #footer .footer-top .footer-links ul a {
    color: #fff;
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
  }
  
  #footer .footer-top .footer-links ul a:hover {
    color: #cda45e;
  }
  
  #footer .footer-top .footer-newsletter form {
    margin-top: 30px;
    background: #28251f;
    padding: 6px 10px;
    position: relative;
    border-radius: 50px;
    border: 1px solid #454035;
  }
  
  #footer .footer-top .footer-newsletter form input[type=email] {
    border: 0;
    padding: 4px;
    width: calc(100% - 110px);
    background: #28251f;
    color: white;
  }
  
  #footer .footer-top .footer-newsletter form input[type=submit] {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border: 0;
    background: none;
    font-size: 16px;
    padding: 0 20px 2px 20px;
    background: #cda45e;
    color: #fff;
    transition: 0.3s;
    border-radius: 50px;
  }
  
  #footer .footer-top .footer-newsletter form input[type=submit]:hover {
    background: #d3af71;
  }
  
  #footer .copyright {
    text-align: center;
    padding-top: 30px;
  }
  
  #footer .credits {
    padding-top: 10px;
    text-align: center;
    font-size: 13px;
    color: #fff;
  }
</style>