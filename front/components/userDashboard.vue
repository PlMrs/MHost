<template lang="">
    <div style="height: calc(100vh - 92px);" class="flex bg-[#f8f8f8] overflow-hidden">
        <UserSidebar :users="users" @open-message="openMessages('message',$event)" @open-swipe="openSwipe()" />
        <UserSwipe v-if="showed === 'swipe' " @user-swiped="getUsersMatched()" />
        <UserMessages v-if="showed === 'message'" :targetedUser ="user" :match_id="match_id" :key="user.id" />  
        <UserSettings v-if="showed === 'settings'" />
    </div>
</template>
<script>

export default {
    data: () => ({
        users: [],
        user : null,
        match_id : null
    }),
    created(){
        this.getUsersMatched()
    },
    computed: {
        showed () {
            return this.$store.state.showed
        }
    },
    methods: {
        async getUsersMatched(){
            this.users = await this.$axios.$get(`${process.env.API_URL}/users/match`, {
                headers : {
                    "Authorization" : this.$auth.$storage._state["_token.local"]
                }
            })  
        },
        async openMessages(type, user){

            this.match_id = await this.$axios.$get(`${process.env.API_URL}/swipe/id-with-users`,{
                headers:{
                    Authorization : this.$auth.$storage._state["_token.local"],
                    user_2 : user.id
                }
            })

            this.$store.commit('change', type)
            this.user = user
        },
        openSwipe(){
            this.$store.commit('change', 'swipe')
        }
    }
}
</script>