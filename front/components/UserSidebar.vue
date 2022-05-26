<template lang="">
    <div class="w-[20%] sidebar bg-white h-full">
        <div class="flex flex-row items-center justify-center bg-[#f8f8f8]">
            <div class="w-1/2 flex items-center justify-center"><img class="w-10 my-6" :src="require('~/assets/images/chat.png')" /></div>
            <div class="w-1/2 flex items-center justify-center active"><img class="w-10 my-6" :src="require('~/assets/images/swipe.png')" /></div>
        </div>
        <div class="sidebar-shadow h-full">
            <p>15 rencontres</p>

            <input type="text" />

            <ul>
                <li class="flex justify-evenly items-center my-3"><div class="w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]"><div class="w-[50px] h-[50px] rounded-[100%] overflow-hidden"><img class="w-full h-full object-cover" :src="require('~/assets/images/users/picture/6.jpg')" /></div></div><p>Lorem Ipsum dolor sit amet</p></li>
                <li  class="flex justify-evenly items-center my-3"><div class="w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]"><div class="w-[50px] h-[50px] rounded-[100%] overflow-hidden"><img class="w-full h-full object-cover" :src="require('~/assets/images/users/picture/6.jpg')" /></div></div><p>Lorem Ipsum dolor sit amet</p></li>
                <li  class="flex justify-evenly items-center my-3"><div class="w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]"><div class="w-[50px] h-[50px] rounded-[100%] overflow-hidden"><img class="w-full h-full object-cover" :src="require('~/assets/images/users/picture/6.jpg')" /></div></div><p>Lorem Ipsum dolor sit amet</p></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .sidebar{
        height: calc(100vh - 100px);
    }
    .sidebar-shadow{
        box-shadow:5px 0px 10px -4px #e2e2e2;
    }
    .active{
        background-color: white;
         box-shadow: 5px 0px 10px -4px #e2e2e2;
    }
</style>