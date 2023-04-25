<template>
    <div class="">
        
        <CalloutApp />
        <slot/>
        <CallToActionApp />
        <FooterApp />
    </div>
 
</template>

<script>

import CalloutApp from '@/components/Callout.vue'
import CallToActionApp from '@/components/CallToAction.vue'
import FooterApp from '@/components/Footer.vue'
export default {
    name:"mainLayout",
    components:{
        CalloutApp,
        CallToActionApp,
        FooterApp
    }
}
</script>

<style>

</style>