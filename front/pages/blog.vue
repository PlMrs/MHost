<template>
  <div>
      <!-- BANNER -->
      <div class="Sec1" :style="{ backgroundImage: `url(${imgbannerSite})`}">
          <h1>BLOG</h1>
      </div>
      <!-- Section1 -->
      <div class="Sec2">

    <div class="articleSec2">
      <div class="article">
        <img :src="require('~/assets/images/imgDrapEu.png')"/>
        <h4>Lorem ipsum</h4>
        <p>Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France. L’avenir et l’attractivité de la coiffure en dépendent.</p>
        <button><img :src="require('~/assets/images/pictoPlus.png')"/><NuxtLink to="/article">EN SAVOIR PLUS</NuxtLink></button>
      </div>
      <div class="article">
        <img :src="require('~/assets/images/imgDrapEu.png')"/>
        <h4>Lorem ipsum</h4>
        <p>Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France. L’avenir et l’attractivité de la coiffure en dépendent.</p>
        <button><img :src="require('~/assets/images/pictoPlus.png')"/>EN SAVOIR PLUS</button>
      </div>
      <div class="article">
        <img :src="require('~/assets/images/imgDrapEu.png')"/>
        <h4>Lorem ipsum</h4>
        <p>Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France. L’avenir et l’attractivité de la coiffure en dépendent.</p>
        <button><img :src="require('~/assets/images/pictoPlus.png')"/>EN SAVOIR PLUS</button>
      </div>
    </div>
    <div class="articleSec2">
      <div class="article">
        <img :src="require('~/assets/images/imgDrapEu.png')"/>
        <h4>Lorem ipsum</h4>
        <p>Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France. L’avenir et l’attractivité de la coiffure en dépendent.</p>
        <button><img :src="require('~/assets/images/pictoPlus.png')"/>EN SAVOIR PLUS</button>
      </div>
      <div class="article">
        <img :src="require('~/assets/images/imgDrapEu.png')"/>
        <h4>Lorem ipsum</h4>
        <p>Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France. L’avenir et l’attractivité de la coiffure en dépendent.</p>
        <button><img :src="require('~/assets/images/pictoPlus.png')"/>EN SAVOIR PLUS</button>
      </div>
      <div class="article">
        <img :src="require('~/assets/images/imgDrapEu.png')"/>
        <h4>Lorem ipsum</h4>
        <p>Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France. L’avenir et l’attractivité de la coiffure en dépendent.</p>
        <button><img :src="require('~/assets/images/pictoPlus.png')"/>EN SAVOIR PLUS</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import bannerSite from '../assets/images/bannerSiteMhost.png';

export default {
  data(){
    return {
      imgbannerSite : bannerSite ,
    }
  }
}
</script>

<style scoped>
/* SECTION 1 */
    .Sec1{
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        font-weight: bold;
        color: white;
    }
    .Sec1 h1{
        margin-top: 75px;
    }

    /* SECTION 2 */
  .Sec2{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 50px;
  }
  .articleSec2{
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article{
    width: 30%;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
  }
  .article h4{
    font-weight: 900;
    margin: 20px;
    text-transform: uppercase;
    font-size: 20px;
  }
  .article p{
    font-weight: 100;
    font-size: 16px;
  }
  .article button{
    font-family: 'Source Code Pro', monospace;
    border: solid 1px;
    border-color: black;
    border-radius: 5px;
    font-size: 16px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    margin-top: 20px;
  }
  .article button img{
    margin-right: 10px;
  }
</style>