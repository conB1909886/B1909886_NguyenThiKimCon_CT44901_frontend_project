<template>
    <section id="book-a-table" class="book-a-table my-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Create New Food</h3>
            <h2 class="mb-5">Create New Food</h2>
        </div>
        <div class="container aos-init aos-animate" data-aos="fade-up">
            <div class="section-title">
                
                <!-- <p>Book a Table</p> -->
            </div>
            <form  role="form" class="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="row">
                    <div class="col-lg-12 mt-3">
                        <label for="">Tên món ăn</label>
                        <input v-model="food.name" type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                    </div>
                    <div class="col-lg-12 mt-3">
                        <label for="">Hình ảnh</label>
                        <input  type="file"
                        @change="uploadFile"
                        ref="file"
                        class="form-control" id="exampleFormControlFile1">
                    </div> 
                    <div class="col-12-lg mt-3">
                        <label for="">Mô tả</label> 
                        <textarea v-model="food.description" class="form-control" name="message" rows="5"></textarea>
                    </div>
                    <div class="col-12-lg mt-3">
                        <label for="">Hướng dẫn</label> 
                        <textarea v-model="food.guide" class="form-control" name="message" rows="5"></textarea>
                    </div>
                </div>
                <!-- <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5"></textarea>
                    <div class="validate"></div>
                </div>
                <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                </div> -->
                <div class="text-center"><button @click="handlerClickCreatePost($event)" class="btn btn-primary" >Create Food</button></div>
            </form>
        </div>
      
    </section>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name:"PostFood",
    data(){
        return {
            food: {
                name:"",
                image: "",
                description: "",
                guide: ""
            }
        }
    },
    methods:{
        handlerClickCreatePost(e){
            e.preventDefault()
            const data = {
                name: this.food.name,
                image: this.food.image.name,
                description: this.food.description,
                guide: this.food.guide
            }

            axios.post('http://localhost:3000/api/upload', { file: this.food.image },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(response=>{
                    if(response.status == 200){
                        axios.post('http://localhost:3000/api/food',data)
                            .then(response=>{
                                if(response.status ==200){
                                    this.getListFood()
                                    this.food.name = ""
                                    this.food.description = ""
                                    this.food.guide = ""
                                    this.$router.push({name:"home"})
                                }
                            })
                            .catch(error=>{
                                console.log(error)
                            })
                    }
                })
        },
        uploadFile() {
            this.food.image = this.$refs.file.files[0];
        },
        ...mapActions(['getListFood'])
    }
}
</script>

<style scoped>
</style>