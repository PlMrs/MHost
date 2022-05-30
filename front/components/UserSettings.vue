<template lang="">
    <div class="w-[80%] flex items-center flex-col">
        <h1>Paramètres</h1>
        <div class="flex items-center justify-center flex-col">
            <div class="w-[200px] h-[200px] rounded-[100%] flex justify-center items-center border border-[#213B83]"><div class="w-[180px] h-[180px] rounded-[100%] overflow-hidden"><img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${this.$auth.$state.user.picture}`)" /></div></div>
            <div class="flex items-center relative justify-center my-3.5">
                <p class="text-3xl font-bold">{{this.$auth.$state.user.name}} {{this.$auth.$state.user.surname}}</p>
                <button class="absolute right-[-33px]" @click="showNS"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
                <div :class="{block : isNSOpen}" ref="name_surname" class="bg-white absolute z-10 p-2.5 rounded-[5px] w-full">
                    <form class="flex flex-col items-center" @submit.prevent="patchNameSurname">
                        <input class="my-3.5" type="text" v-model="name" placeholder="Nom" />
                        <input class="my-3.5" type="text" v-model="surname" placeholder="Prénom" />
                        <button>Modifier</button>
                    </form>
                </div>
            </div>
            <div class="flex items-center relative justify-center my-3.5">
                <p>{{this.$auth.$state.user.email}}</p>
                <button class="absolute right-[-33px]"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
            </div>
           <div class="flex items-center relative justify-center my-3.5"> 
               <p>Changer mon mot de passe</p>
               <button class="absolute right-[-33px]"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
           </div>
            <div class="flex items-center relative justify-center my-3.5">
                <p>Je veux {{needs}}</p>
                <button class="absolute right-[-33px]"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isNSOpen : false,
            name:null,
            surname:null,
        }
    },
    mounted () {
        this.name = this.$auth.$state.user.name,
        this.surname = this.$auth.$state.user.surname
    },
    computed : {
        needs (){
            if(this.$auth.$state.user.needs === "T"){
                return "voyager"
            }
            else if(this.$auth.$state.user.needs === "H"){
                return "héberger"
            }
            else{
                return "discuter my-3.5"
            }
        }
    },
    methods : {
        patchNameSurname(){
            console.log(this.name,this.surname)
        },
        showNS(){
            this.isNSOpen = true
        }
    }
}
</script>
<style scoped>
    
</style>