<template lang="">
    <div class="w-[80%] flex justify-center items-center">
        <div class="w-fit" v-show="!isSwipeEmpty">
            <Tinder ref="tinder" key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
                <div class="imgContainer relative" slot-scope="scope">
                    <img :src="require(`~/assets/images/users/picture/${scope.data.picture}`)" >
                    <div class="absolute w-full bg-white bottom-0 pb-[50px] pt-3 pl-4 pr-4 ">
                        <div class="overflow-hidden">
                            <p class="text-sky-800  text-lg"><span class="font-bold">{{scope.data.name}}</span> {{scope.data.surname}}</p>
                            <p class="max-h-0 transition-all duration-300" :class="{show : isDescShow}" ref="description">{{scope.data.description}}</p>
                        </div>
                    </div>
                    <div class="w-full absolute bottom-0 flex justify-center">
                        <img class="w-[20px] transition-all duration-300" :class="{turn_arrow : isDescShow}" :src="require(`~/assets/images/swipe-arrow.png`)" @click="toggleDesc()">
                    </div>
                </div>
            </Tinder>
            <div class="btns flex justify-around relative z-[160] mt-[35px]">
                <img class="nope-pointer" src="~assets/images/x-button.png" @click="decide('nope')">
                <img class="like-pointer" src="~assets/images/checked.png" @click="decide('like')">
            </div>
        </div>
        <div v-show="isSwipeEmpty">
            <p>Il n'y a plus d'utilisateurs disponible :(</p>
        </div>
    </div>
</template>
<script>

export default {
     data: () => ({
        queue: [],
        offset: 0,
        userSource : [],
        img : "1.jpg",
        isSwipeEmpty : false,
        isDescShow : false
    }),
    created() {
        this.mock()
    },
    methods: {
        async mock(count = 5, append = true) {
            const res = await this.$axios.$get('/users/swipe',{
                headers : {
                        "Authorization" : this.$auth.$storage._state["_token.local"],
                        "needs" : this.$auth.$state.user.needs
                },
            })

            const list = [];

            for (let i = 0; i < count; i++) {
                if(res[this.offset] === undefined){
                    break
                }
                list.push(res[this.offset]);
                this.offset++;
            }
            if (append) {
                this.queue = this.queue.concat(list);
            } else {
                this.queue.unshift(...list);
            }
            if(this.queue.length === 0){
                this.isSwipeEmpty = true
            }
        },
        async onSubmit(type, key, item) {
        // type: result，'like': swipe right, 'nope': swipe left, 'super': swipe up
        // key:  The keyName of the removed card
        // item: Child object in queue

        const swipeData = {
            "user_1" : this.$auth.$state.user.id,
            "user_2" : type.key
        }

        if(type.type === "like"){

            const res = await this.$axios.$post('/swipe',swipeData,{
                headers : {
                    "Authorization" : this.$auth.$storage._state["_token.local"],
                    "Content-Type" : "application/json"
                }
            })

            this.$emit('user-swiped')
        }

        if (this.queue.length < 3) {
            this.mock()
        }
        if(this.queue.length === 0){
            this.isSwipeEmpty = true
        }


    },
    decide (choice) {
        this.$refs.tinder.decide(choice)
    },
    toggleDesc(){
        this.isDescShow = !this.isDescShow
    },
  }
}
</script>
<style scoped>
    .vue-tinder {
        width: 335px;
        height: 447px;   
        position: relative; 
    }
    .imgContainer {
        width:100%;
        height:100%;
        background-size:cover
    }
    .imgContainer > img{
        object-fit:cover;
        width:100%;
        height:100%;
    }
    .nope-pointer,
    .like-pointer {
    width: 64px;
    height: 64px;
    }
    .show{
        max-height:1000px !important;
    }
    .turn_arrow{
        transform: rotate(180deg);
    }
</style>