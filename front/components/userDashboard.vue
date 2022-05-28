<template lang="">
    <div class="flex bg-[#f8f8f8]">
        <UserSidebar :users="users" :isMessage="isMessage" @open-message="changeShowed('message',$event)" @open-swipe="changeShowed('swipe')" />
        <UserSwipe v-if="showed === 'swipe' " @user-swiped="getUsersSwiped()" />
        <UserMessages v-if="showed === 'message'" :targetedUser ="user" :key="user.id" />  
    </div>
</template>
<script>
export default {
    data: () => ({
        users: [],
        showed: "swipe",
        isMessage : false,
        user : null
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
        changeShowed(type, user){
            this.showed = type
            type === "message" ? this.isMessage = true : this.isMessage = false

            this.user = user
        }
    }
}
</script>