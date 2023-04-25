<template>
    <section class="content-section" id="portfolio">
        <div class="container px-4 px-lg-5">
            <div class="content-section-heading text-center">
                <h3 class="text-secondary mb-0">List Food</h3>
                <h2 class="mb-5">List Food</h2>
            </div>
            <div class="row gx-0">
                <div  v-for="food in list_food" :key="food._id" class="col-lg-6">
                    <a class="portfolio-item">
                        <div class="caption">
                            <div class="caption-content">
                                <div class="h2">{{ food.name }}</div>
                                <p class="mb-0 text">{{ food.description }}</p>
                                <button @click="handlerDelete(food._id)" class="btn btn-sm btn-danger mr-5">Delete</button>
                                <button style="margin-left:50px;" @click="handlerClickDetailFood(food._id)" class=" btn btn-sm btn-success">Detail</button>
                            </div>
                        </div>
                        <img  class="img-fluid" :src="'http://localhost:3000/images/'+food.image" alt="..." />
                    </a>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
import store from '@/store'
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name:"HomePage",
    computed:{
        list_image(){
            return store.state.list_image
        },
        list_food(){
            return store.state.list_food
        }
    },
    methods:{
        // handlerDelete(id){
            // axios.delete('http://localhost:3000/api/image/'+id)
            //     .then(response=>{
            //         if(response.status == 200 ){
            //             this.getListImage()
            //         }
            //     })
        // },
        ...mapActions(['getListFood']),
        handlerDelete(id){
            axios.delete('http://localhost:3000/api/food/'+id)
                .then(response=>{
                    if(response.status == 200){
                        this.getListFood()
                    }
                })

        },
       
        handlerClickDetailFood(id){
            this.$router.push({name: "detailpage",params: {id: id}})
        }
    }
}
</script>

<style scoped>
.text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
 }
</style>