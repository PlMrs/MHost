<template lang="">
    <div>
        <h1>Valid Users</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                 <div class="ml-[20px] mr-[10px] w-[80px] h-[80px] rounded-[100%] flex justify-center items-center border border-[#213B83]">
                    <div class="w-[70px] h-[70px] rounded-[100%] overflow-hidden">
                        <img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${user.picture}`)" />
                    </div>
                </div>
                <p>{{user.name}} {{user.surname}}</p>
                <p>{{user.email}}</p> 
                <p v-html="getLink(user, 'carte_id')"></p>
                <p v-html="getLink(user, 'certificatScolaire')"></p>
                  <form @submit.prevent="validateUser(user)">
                    <input class="border rounded-md p-2" v-model="user.input" type="text" placeholder="taper validé">
                    <button type="submit" class="text-[#07DF00] font-bold rounded-[5px] shadow p-2">Valider</button>
                </form>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            users:  [],
            defaultUsers: [],
        }
    },
    async mounted (){
        const res = await this.$axios.$get('/users/verifications',{
            headers: {
                Authorization : this.$auth.$storage._state["_token.local"]
            }
        })
        if(res){
            res.forEach(el => {
                if(el.id === this.$auth.user.id){
                    return
                }
                el = {...el, input: ''}
                this.users.push(el)
                this.defaultUsers.push(el)
            });
        }
    },
    methods : {
        getLink(user, type){
            const filename =  type === 'carte_id' ? user.carte_id : user.certificatScolaire
            const text = type === 'carte_id' ? "Carte d'identité" : "Certificat scolaire"
            return `<a href="${process.env.API_URL}/users/files?bearer=${this.$auth.$storage._state["_token.local"].split(' ')[1]}&user_id=${user.id}&filename=${filename}">${text}</a>`
        },
        async validateUser(user){
            if(user.input === "validé"){
                const res = await this.$axios.$patch(`/users/verified/${user.id}`,{verified : true},{
                    headers : this.$auth.$storage._state["_token.local"]
                })
                if(res && res.affected === 1){
                    this.users = this.users.filter(e => e.id != user.id)
                    this.defaultUsers = this.defaultUsers.filter(e => e.id != user.id)
                }
            }
        }
    }
}
</script>
<style lang="">
    
</style>