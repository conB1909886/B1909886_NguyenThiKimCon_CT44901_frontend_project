<template>
    <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
                class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
               
                <h5>Login</h5>
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input v-model="user.email" type="email" id="form3Example3" class="form-control form-control-lg"
                     />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-3">
                  <input v-model="user.password" type="password" id="form3Example4" class="form-control form-control-lg"
                    />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
      
                
                <div class="text-center text-lg-start mt-4 pt-2">
                  <button @click="handlerClickLogin()" type="button" class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem; background-color:brown">Login</button>
                 <a @click="handlerClickRegister()" style="cursor:pointer;"
                      class="link-danger">Register</a>
                </div>
      
              </form>
            </div>
          </div>
        </div>
       
      </section>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
    name:"LoginPage",
    data(){
      return {
        user: {
          email:"",
          password: "",
        }
      }
    },
    methods: {
      handlerClickRegister(){
      this.$router.push({name:"register"})
    },
      handlerClickLogin(){
        const data = {
          email: this.user.email,
          password: this.user.password
        }
        axios.post('http://localhost:3000/api/auth/login',data)
          .then(response=>{
            if(response.status == 200){
              this.setCookie('token',response.data.token, '3d')
              this.UPDATE_AUTH(true)
              this.$router.push({name:"home"})
            }
          })
          .catch(error=>{
            console.log(error)
          })
      },
      setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      },
      ...mapMutations(['UPDATE_AUTH'])
    
    }
  }
</script>

<style scoped>
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
</style>