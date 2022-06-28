<template lang="">
    <div class="w-[20%] sidebar bg-white h-full">
        <div class="flex flex-row items-center justify-center bg-[#f8f8f8]">
            <div :class="{active : showed === 'message'}" class="w-1/2 flex items-center justify-center"><img class="w-10 my-6" :src="require('~/assets/images/chat.png')" /></div>
            <div @click="openSwipe()" :class="{active : showed !== 'message'}" class="w-1/2 flex items-center justify-center cursor-pointer"><img class="w-10 my-6" :src="require('~/assets/images/swipe.png')" /></div>
        </div>
        <div class="sidebar-shadow h-full">

            <p>{{`${getNumberofMatch} rencontres`}}</p>

            <input type="text" />

            <ul>
                <li v-for="user in users" :key="user.id" @click="openMessage(user)" class="flex justify-evenly items-center my-3 cursor-pointer">
                    <div class="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[#213B83]">
                        <div class="w-[50px] h-[50px] rounded-full overflow-hidden"><img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${user.picture}`)" /></div>
                    </div>
                    <p>{{`${user.description ? user.description.substring(0, 20) : ''}...`}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        users : {
            type: Array
        }
    },
    methods: {
        openMessage(user){
            this.$emit("open-message",user)
        },
        openSwipe(){
            this.$emit("open-swipe")
        }
    },
    computed: {
        getNumberofMatch(){
            return this.users.length
        },
        showed () {
            return this.$store.state.showed
        }
    }
}
</script>
<style scoped>
    .sidebar{
        height: calc(100vh - 100px);
    }
    .sidebar-shadow{
        box-shadow:5px 0px 10px -4px #e2e2e2;
    }
    .active{
        background-color: white;
         box-shadow: 5px 0px 10px -4px #e2e2e2;
    }
</style>