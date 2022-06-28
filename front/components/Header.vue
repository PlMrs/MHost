<template lang="fr">
    <header class="sticky w-full p-4 bg-white z-10">
        <nav v-if="$auth.loggedIn">
            <ul class="flex flex-row justify-between">
                <li class="flex items-center"><NuxtLink to="/"><img class="w-[200px]" :src="require('~/assets/images/logo.png')" /></NuxtLink></li>
                <li class="w-[40%] flex items-center"><div class="w-full flex justify-between bg-[#002b80] rounded-full text-white">
                        <div :class="{actual : this.$auth.user.needs === 'H'}" class="py-[5px] w-1/3 text-2xl flex items-center rounded-full justify-center"><p>J'héberge</p></div>
                        <div :class="{actual : this.$auth.user.needs === 'T'}" class="py-[5px] w-1/3 text-2xl flex items-center rounded-full justify-center"><p>Je voyage</p></div>
                        <div :class="{actual : this.$auth.user.needs === 'D'}" class="py-[5px] w-1/3 text-2xl flex items-center rounded-full justify-center"><p>Je discute</p></div>
                    </div>
                </li>
                <li class="flex items-center"><div class="w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]" @click="changeActive()">
                        <div class="w-[50px] h-[50px] rounded-[100%] overflow-hidden">
                            <img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${this.$auth.$state.user.picture}`)" />
                        </div>
                    </div>
                    <div :class="{active : isActive}" class="relative hidden">
                        <ul class="absolute right-full top-[33px] bg-white p-[20px]">
                            <li>
                                <p @click="moveTo('dashboard')" class="cursor-pointer">Dashboard</p>
                            </li>
                            <li>
                                <p @click="moveTo('settings')" class="cursor-pointer">Paramètres</p>
                            </li>
                            <li class="cursor-pointer">
                                <p @click="$auth.logout()">Déconnexion</p>
                            </li>
                        </ul>
                    </div> 
                </li>
            </ul>
        </nav>
        <nav v-else class="flex">
            <NuxtLink to="/" class="w-[40%] flex items-center justify-center"><img class="max-w-[190px]" :src="require('~/assets/images/logo.png')"></NuxtLink>
            <ul class="flex flex-row justify-evenly items-center w-[60%]">
                <li><NuxtLink to="/">Accueil</NuxtLink></li>
                <li><NuxtLink to="/blog">blog</NuxtLink></li>
                <li><NuxtLink to="/">Qui-sommes-nous?</NuxtLink></li>
                <li><NuxtLink to="login"><div class="flex items-center bg-[#F6C700] text-white p-3 rounded-lg"><img class="w-7 mr-3" :src="require('~/assets/images/connexion.png')">SE CONNECTER</div></NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
  data: () => ({
        isActive: false
  }),
  methods : {
     changeActive(){
         this.isActive = !this.isActive
     },
     moveTo(where){
         if(where === "settings"){
            this.$store.commit('change', 'settings')
            this.$router.push('/dashboard')
         }
         if(where === "dashboard"){
            this.$store.commit('change', 'swipe')
            this.$router.push('/dashboard')
         }
     }
  }
})
</script>
<style scoped>
    .actual{
        background-color: #F6C700;
        color: #002b80;
    }
    .active{
        display:block !important;
    }
</style>