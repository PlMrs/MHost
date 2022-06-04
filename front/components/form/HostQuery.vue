<template>
    <div class="bg-white p-[30px] shadow shadow-gray-800 rounded-[10px]">
         <img @click="closeHost" class="absolute top-2 right-2 w-5 cursor-pointer" :src="require('~/assets/images/close.png')" />
        <div v-show="!isPosted">
            <p class="font-bold text-center text-lg">Faire une demande d'hote</p>
            <form class="flex flex-col" @submit.prevent="postDemand">
                <label for="planning" class="my-2 font-medium">De quand à quand?</label>
                <v-date-picker v-model="dates" :attributes="alreadyDates" :disabled-dates="disabledDates" is-range @dayclick="showDate"/>
                <button>Envoyer</button>
            </form>
        </div> 
        <div v-show="isPosted">
            <p>Votre demande à bien été prise en compte</p>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            dates: {
                start : "",
                end : ""
            },
            alreadyDates : [],
            disabledDates: [],
            isPosted : false
        }
    },
    props : {
        targetedUser: {},
    },
    async mounted(){
        const plannings = await this.$axios.$get('/planning',{
            headers:{
                "user_1" : this.$auth.user.id,
                "user_2" : this.targetedUser.id
            }
        })

        if(plannings){
            plannings.forEach(planning => {
                this.alreadyDates.push({
                    highlight: {
                        start: {color: 'red', fillMode: 'solid' },
                        base: {color: 'red', fillMode: 'light' },
                        end: {color: 'red', fillMode: 'solid' },
                    },
                    dates: { start: new Date(planning.start), end: new Date(planning.end) },
                })
                this.disabledDates.push({start: planning.start, end: planning.end})
            });
        }
    },
    methods: {
        closeHost(){
            this.$emit('close-host')
        },
        showDate(){
            console.log(this.dates)
        },
        async postDemand(){
            const body = {
                by : this.$auth.user.id,
                with: this.targetedUser.id,
                start: this.dates.start,
                end : this.dates.end
            }

            const res = await this.$axios.$post('/planning',body,{
                headers:{
                    Authorization : this.$auth.$storage._state["_token.local"]
                }
            })

            if(res === 201){
                this.isPosted = !this.isPosted
            }
        }
    }
}
</script>