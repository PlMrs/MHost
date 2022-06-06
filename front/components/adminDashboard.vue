<template lang="">
    <div class="flex flex-row">
        <AdminSidebar class="w-[20%]" @show="show($event)" />
        <AdminListUsers v-show="showed === 'ListUsers'"  />
        <AdminValidUser v-show="showed === 'ValidUser'" />
        <AdminHostDemand v-show="showed === 'HostDemand'" />
    </div>
</template>
<script>
export default {
    data(){
        return {
            showed : "ListUsers"
        }
    },
    methods: {
        show(el){
            this.showed = el
        }
    }
}
</script>
<style lang="">
    
</style>