<template>
  <div>
    <div class="w-full h-screen student-img-container" :style="{ backgroundImage: `url(${studentImg})`}">
      <div class="background-black w-full h-screen flex items-center justify-center">
        <h1 class="text-white font-bold text-5xl">Bienvenue sur MHOST</h1>
      </div>
    </div>
  </div>
</template>

<script>
import student from '../assets/images/student.jpg';

export default {
  data(){
    return {
      studentImg : student
    }
  }
}
</script>

<style scoped>
  .student-img-container{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .background-black{
    background-color:rgba(0,0,0,0.5)
  }
</style>