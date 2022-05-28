<template lang="">
    <div class="flex bg-[#f8f8f8]">
        <UserSidebar :users="users" :isMessage="isMessage" @open-message="openMessages('message',$event)" @open-swipe="openSwipe()" />
        <UserSwipe v-if="showed === 'swipe' " @user-swiped="getUsersSwiped()" />
        <UserMessages v-if="showed === 'message'" :targetedUser ="user" :match_id="match_id" :key="user.id" />  
    </div>
</template>
<script>
export default {
    data: () => ({
        users: [],
        showed: "swipe",
        isMessage : false,
        user : null,
        match_id : null
    }),
    created(){
        this.getUsersSwiped()
    },
    methods: {
        async getUsersSwiped(){
            this.users = await this.$axios.$get(`${process.env.API_URL}/users/match`, {
                headers : {
                    "Authorization" : this.$auth.$storage._state["_token.local"],
                    "user_id" : this.$auth.$state.user.id
                }
            })  
        },
        async openMessages(type, user){

            this.match_id = await this.$axios.$get(`${process.env.API_URL}/swipe/id-with-users`,{
                headers:{
                    Authorization : this.$auth.$storage._state["_token.local"],
                    user_1 : this.$auth.$state.user.id,
                    user_2 : user.id
                }
            })

            this.showed = type
            type === "message" ? this.isMessage = true : this.isMessage = false

            this.user = user
        },
        openSwipe(){
            this.showed = "swipe"
        }
    }
}
</script>