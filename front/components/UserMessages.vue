<template >
    <div class="w-[80%] relative">
        <ul>
            <li v-for="data in messages" class="py-2.5" :class="{reverse : data.isMe}" :key="data.value">
                <div :class="{reverse : data.isMe}" class="flex items-center  w-[50%]">
                    <div class="w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]">
                        <div class="w-[50px] h-[50px] rounded-[100%] overflow-hidden">
                            <img v-if="data.isMe" class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${picture}`)" />
                            <img v-else class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${targetedUser.picture}`)" />
                        </div>
                    </div> 
                    <div :class="[data.isMe ? 'mr-[20px]'  : 'ml-[20px]']">
                        <p>{{data.value}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <div>
            <form @submit.prevent="postMessage">
                <input v-model="input" type="text">
                 <button>Envoyer</button>
            </form>            
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            input : "",
            messages : [],
            picture : this.$auth.$state.user.picture
        }
    },
    props: {
        targetedUser : {},
        match_id: {
            type: Number
        }
    },
    async mounted () {
    const messages = await this.$axios.$get(`${process.env.API_URL}/messages`,{
        headers : {
             Authorization : this.$auth.$storage._state["_token.local"],
             match_id : this.match_id
        }
    })
    messages.forEach(el => {
        this.messages = [...this.messages, {value : el.message, isMe : el.from === this.$auth.$state.user.id ? true : false}]
    });

    this.socket = this.$nuxtSocket({
            path: '/socket.io',
            transports: ['websocket'],
            reconnection : true,
            auth: {
                token: this.$auth.$storage._state["_token.local"]
            },
            query : {
                me : this.$auth.$state.user.id,

            }
        })
    this.socket.on('message', (data) =>{
        this.messages = [...this.messages, {value : data, isMe:false}]
        console.log(this.messages)
    })
    },
    methods: {
        postMessage () {
            const data = {
                user_id : this.targetedUser.id,
                message : this.input
            }

            const payload = {
                match_id : this.match_id,
                from : this.$auth.$state.user.id,
                message : this.input 
            }
            
            this.socket.emit('message', data);

            this.$axios.$post(`${process.env.API_URL}/messages`,payload,{
                headers: {
                    Authorization : this.$auth.$storage._state["_token.local"],
                }
            })

            this.messages = [...this.messages, {value : this.input, isMe : true}]
        },
    },
}
</script>
<style scoped>
    .reverse{
        display:flex;
        flex-direction: row-reverse;
    }
</style>