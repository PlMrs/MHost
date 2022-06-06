<template lang="">
    <div>
        <h1>List Users</h1>
        <ul>
            <li class="flex flex-col items-center my-8" v-for="user in users" :key="user.id">
                <div class="ml-[20px] mr-[10px] w-[80px] h-[80px] rounded-[100%] flex justify-center items-center border border-[#213B83]">
                    <div class="w-[70px] h-[70px] rounded-[100%] overflow-hidden">
                        <img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${user.picture}`)" />
                    </div>
                </div> 
                <p>{{user.name}} {{user.surname}}</p>
                <p>Id: {{user.id}}</p>
                <p>E-mail : {{user.email}}</p>
                <p>{{need(user)}}</p>
                <p>{{user.role === "A" ? "Administrateur" : "Client"}}</p>
                <p>{{user.verified === true ? "Vérifié" : "Non-vérifié" }}</p>
                <p>Description : {{user.description}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            users: []
        }
    },
    async mounted(){
        const res = await this.$axios.$get('/users',{
            headers:{
                Authorization : this.$auth.$storage._state["_token.local"]
            }
        })
        console.log(res)

        if(res){
            this.users = res
        }
    },
    methods:{
        need(user){
            if(user.needs === "H"){
                return "Veut héberger"
            }
            else if (user.needs === "T"){
                return "Veut voyager"
            }
            else{
                return "Veut discuter"
            }
        },
    }
}
</script>
<style lang="">
    
</style>