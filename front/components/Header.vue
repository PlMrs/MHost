<template lang="fr">
    <header class="sticky w-full p-4 bg-white">
        <nav v-if="$auth.loggedIn">
            <ul class="flex flex-row justify-between">
                <li><NuxtLink to="/"><img class="w-[200px]" :src="require('~/assets/images/logo.png')" /></NuxtLink></li>
                <li class="w-[40%]"><div class="flex justify-between bg-[#002b80] rounded-full text-white">
                        <div :class="{actual : host}" class="py-[5px] w-1/3 text-2xl flex items-center rounded-full justify-center"><p>J'Héberge</p></div>
                        <div :class="{actual : travel}" class="py-[5px] w-1/3 text-2xl flex items-center rounded-full justify-center"><p>Je voyage</p></div>
                        <div :class="{actual : discute}" class="py-[5px] w-1/3 text-2xl flex items-center rounded-full justify-center"><p>Je discute</p></div>
                    </div>
                </li>
                <li><div class="w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]" @click="changeActive()">
                        <div class="w-[50px] h-[50px] rounded-[100%] overflow-hidden">
                            <img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${this.$auth.$state.user.picture}`)" />
                        </div>
                    </div>
                    <div :class="{active : isActive}" class="relative hidden">
                        <ul class="absolute left-[-60px] bg-white p-[20px]">
                            <li>
                                <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                            </li>
                            <li class="cursor-pointer">
                                <p @click="$auth.logout()">Déconnexion</p>
                            </li>
                        </ul>
                    </div> 
                </li>
            </ul>
        </nav>
        <nav v-else>
            <ul class="flex flex-row justify-evenly">
                <li><NuxtLink to="/">Accueil</NuxtLink></li>
                <li><NuxtLink to="login">Connexion</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
  data: () => ({
        discute: null,
        host:null,
        travel:null,
        isActive: false
  }),
  methods : {
     changeActive(){
         this.isActive = !this.isActive
     }
  },
  created() {
      if(this.$auth.$state.user?.needs && this.$auth.$state.user?.needs === "D"){
          this.discute = true
      }
      if(this.$auth.$state.user?.needs && this.$auth.$state.user?.needs === "T"){
          this.travel = true
      }
      if(this.$auth.$state.user?.needs && this.$auth.$state.user?.needs === "H"){
          this.host = true
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