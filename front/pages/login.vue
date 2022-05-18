<template>
<div class="w-screen h-screen flex items-center justify-center">
    <div class="shadow-lg rounded-lg p-5">
        <h1 class="font-bold text-lg">Connexion</h1>
        <div> 
            <Connexion @error="errorHandler" v-if="!show" />
            <Inscription @error="errorHandler" v-if="show" />
        </div>  
        <p @click="toggle" v-if="!show">S'inscrire ?</p>
        <p @click="toggle" v-if="show">Se connecter</p>
        <p v-if="showError">{{errorValue}}</p>
    </div>
</div>
</template>


<script>
import Connexion from "~/components/login/Connexion.vue"
import Inscription from "~/components/login/Inscription.vue";
    export default {
    template: "default",
    name: "ConnexionPage",
    data() {
        return {
            show : false,
            showError: false,
            errorValue: null,
        }
    },
    methods:{
        toggle() {
            this.show = !this.show;
        },
        errorHandler(value){
            this.showError = true;
            this.errorValue = value;
        }
    },
    components: { Connexion, Inscription }
}
</script>
