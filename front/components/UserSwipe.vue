<template lang="">
    <div class="w-2/3">
        <div class="w-fit ">
            <Tinder ref="tinder" key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
                <div class="imgContainer" slot-scope="scope">
                    <img :src="require(`~/assets/images/users/picture/${scope.data.picture}`)" >
                </div>
            </Tinder>
            <div class="btns flex justify-around relative z-[160]">
                <img class="nope-pointer" src="~assets/images/x-button.png" @click="decide('nope')">
                <img class="like-pointer" src="~assets/images/checked.png" @click="decide('like')">
            </div>
        </div>
    </div>
</template>
<script>

export default {
     data: () => ({
        queue: [],
        offset: 0,
        userSource : [],
        img : "1.jpg"
    }),
    created() {
        this.mock()
    },
    methods: {
        mock(count = 5, append = true) {

            this.$axios.$get(`${process.env.API_URL}/users/swipe`,{
            headers : {
                    "Authorization" : this.$auth.$storage._state["_token.local"]
                }
            }).then(res =>{
                const list = [];
                for (let i = 0; i < count; i++) {
                            list.push(res[this.offset]);
                            this.offset++;
                }
                if (append) {
                    this.queue = this.queue.concat(list);
                } else {
                    this.queue.unshift(...list);
                }
            })
        },
        onSubmit(type, key, item) {
        // type: result，'like': swipe right, 'nope': swipe left, 'super': swipe up
        // key:  The keyName of the removed card
        // item: Child object in queue
        if (this.queue.length < 3) {
            this.mock()
        }
    },
    decide (choice) {
        console.log(this.$refs)

        this.$refs.tinder.decide(choice)
    }
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
    .imgContainer img{
        object-fit:cover;
        width:100%;
        height:100%;
    }
    .nope-pointer,
    .like-pointer {
    width: 64px;
    height: 64px;
    }
</style>