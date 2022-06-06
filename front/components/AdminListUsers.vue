<template lang="">
    <div class="flex flex-col justify-center items-center">
        <h1>List Users</h1>
        <ul class="w-[70%]">
            <li class="flex flex-col items-center my-8" v-for="user in users" :key="user.id">
                <div class="ml-[20px] mr-[10px] w-[80px] h-[80px] rounded-[100%] flex justify-center items-center border border-[#213B83]">
                    <div class="w-[70px] h-[70px] rounded-[100%] overflow-hidden">
                        <img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${user.picture}`)" />
                    </div>
                </div> 
                <p class="text-[#213B83]"><span class="font-bold">{{user.name}}</span> {{user.surname}} - {{user.role === "A" ? "Administrateur" : "Client"}}</p>
                <p>Id: {{user.id}}</p>
                <p>E-mail : {{user.email}}</p>
                <p>{{need(user)}}</p>
                <p>{{user.verified === true ? "Vérifié" : "Non-vérifié" }}</p>
                <p>Description : {{user.description}}</p>
                <form @submit.prevent="deleteUser(user)">
                    <input class="border rounded-md p-2" v-model="user.input" type="text" placeholder="taper supprimer">
                    <button type="submit" class="text-[#DE0000] font-bold rounded-[5px] shadow p-2">Supprimer</button>
                </form>
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

        if(res){
            res.forEach(el => {
                el = {...el, input: ''}
                this.users.push(el)
            });
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
        async deleteUser(user){
            if(user.input === 'supprimer'){
                let payload = user
                delete payload.input
                const res = await this.$axios.$delete('/users',{
                    headers:{
                        "Content-Type" : 'application/json',
                        "Authorization" : this.$auth.$storage._state["_token.local"]
                    },
                    data: payload
                })
                if(res=== 200){
                    this.users = this.users.filter(e => e.id != user.id )
                }
            }
        }
    }
}
</script>