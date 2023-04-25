<template>
    <div class="container aos-init aos-animate my-5" data-aos="fade-up">
        <div v-if="food" class="row">
            <div class="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <div class="about-img">
                    <img class="img-fluid" :src="'http://localhost:3000/images/'+food.image" alt="">
                </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>{{ food.name }}</h3>
                <p class="fst-italic">
                    {{ food.description }}
                </p>
                <!-- <ul>
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul> -->
                <p>
                    {{ food.guide }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "DetailPage",
    data(){
      return{
        food:null,
      }
    },
    created(){
      const id = this.$route.params.id
      axios.get('http://localhost:3000/api/food/'+id)
        .then(response=>{
          this.food = response.data
          
        })
        .catch(error=>{
          console.log(error)
        })
    },
    updated(){

    }
}
</script>

<style scoped>
.about {
    background: url("@/assets/assets/img/bg-masthead.jpg") center center;
    background-size: cover;
    position: relative;
    padding: 80px 0;
  }
  
  .about:before {
    content: "";
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .about .about-img {
    position: relative;
    transition: 0.5s;
  }
  
  .about .about-img img {
    max-width: 100%;
    border: 4px solid rgba(255, 255, 255, 0.2);
    position: relative;
  }
  
  .about .about-img::before {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 60px;
    height: 60px;
    z-index: 1;
    content: "";
    border-left: 5px solid #cda45e;
    border-top: 5px solid #cda45e;
    transition: 0.5s;
  }
  
  .about .about-img::after {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
    z-index: 2;
    content: "";
    border-right: 5px solid #cda45e;
    border-bottom: 5px solid #cda45e;
    transition: 0.5s;
  }
  
  .about .about-img:hover {
    transform: scale(1.03);
  }
  
  .about .about-img:hover::before {
    left: 10px;
    top: 10px;
  }
  
  .about .about-img:hover::after {
    right: 10px;
    bottom: 10px;
  }
  
  .about .content h3 {
    font-weight: 600;
    font-size: 26px;
  }
  
  .about .content ul {
    list-style: none;
    padding: 0;
  }
  
  .about .content ul li {
    padding-bottom: 10px;
  }
  
  .about .content ul i {
    font-size: 20px;
    padding-right: 4px;
    color: #cda45e;
  }
  
  .about .content p:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 1024px) {
    .about {
      background-attachment: fixed;
    }
  }
</style>