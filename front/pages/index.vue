<template>
<div>
<!-- Section 1 -->
  <div class="contentSec1" :style="{ backgroundImage: `url(${imgbanner})`}">
    <div class="rightBann">
    </div>
    <div class="leftBann" :style="{ backgroundImage: `url(${leftImg})`}">
      <div class="txtBann">
        <h1>voyager <span>rencontrer</span> échanger</h1>
        <button><img :src="require('~/assets/images/pictoDécouvrirEu.png')"/> Découvrir l'europe</button>
      </div>
    </div>
  </div>
  <!-- Section 2 -->
 <div class="Sec2">
    <div class="contentSec2">
       <div class="txtSec2">
         <h2>Qui <span>sommes</span> nous ?</h2>
         <p>Mhost est une une application de rencontres et d'échanges entre étudiants à l'échelle Européenne.
Notre équipe a pour but de favoriser ses échanges et de créer la meilleure expérience pour vous.</p>
         <button>qui-sommes-nous ?</button>
       </div>
       <div class="imgSec2">
         <img :src="require('~/assets/images/imgDrapEu.png')"/>
      </div>
   </div>
  </div>
  <!-- Section 3 -->
  <div class="Sec3">
    <div class="titleSec3">
      <div>
        <img :src="require('~/assets/images/fleche2.png')"/>
      </div>
      <div>
        <h2><NuxtLink to="/blog">LES DERNIERS ARTICLES</NuxtLink></h2>
      </div>
      <div>
        <img :src="require('~/assets/images/fleche2.png')"/>
      </div>
    </div>
    <div class="articleSec3">
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
  </div>
  <!-- Section 4 -->
  <div class="Sec4">
    <div class="titleSec4">
      <h4>VOTRE <span>AVIS</span> COMPTE POUR NOUS</h4>
    </div>
    <div class="contentSec4">
      <div class="avis">
        <img :src="require('~/assets/images/imgPhoto.png')"/>
        <img class="imgAvis" :src="require('~/assets/images/pictoEtoiles.png')"/>
        <p>
          “ Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France.”
        </p>
      </div>
      <div class="avis">
        <img :src="require('~/assets/images/imgPhoto.png')"/>
        <img class="imgAvis" :src="require('~/assets/images/pictoEtoiles.png')"/>
        <p>
          “ Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France.”
        </p>
      </div>
      <div class="avis">
        <img :src="require('~/assets/images/imgPhoto.png')"/>
        <img class="imgAvis" :src="require('~/assets/images/pictoEtoiles.png')"/>
        <p>
          “ Il est temps de se réveiller, la crise du covid ne doit plus servir de prétexte à la destruction des scènes artistiques les plus créatives de France.”
        </p>
      </div>
    </div>
  </div>
  <!-- Section 5 -->
  <div class="Sec5">
     <div class="titleSec5">
      <div>
        <img :src="require('~/assets/images/fleche2.png')"/>
      </div>
      <div>
        <h2>LES DERNIERS POSTS</h2>
      </div>
      <div>
        <img :src="require('~/assets/images/fleche2.png')"/>
      </div>
    </div>
    <div class="contentSec5">
    <div class="posts">
      <img :src="require('~/assets/images/imgVoyagerEu.png')"/>
      <div class="caracPosts">
        <img :src="require('~/assets/images/pictoLogoBlue.png')"/>
        <p>mhost.eu</p>
        <img :src="require('~/assets/images/pictoLike.png')"/>
        <p>5,2k</p>
        <img :src="require('~/assets/images/pictoCom.png')"/>
        <p>38</p>
      </div>
    </div>
        <div class="posts">
      <img :src="require('~/assets/images/imgItalie.png')"/>
      <div class="caracPosts">
        <img :src="require('~/assets/images/pictoLogoBlue.png')"/>
        <p>mhost.eu</p>
        <img :src="require('~/assets/images/pictoLike.png')"/>
        <p>5,2k</p>
        <img :src="require('~/assets/images/pictoCom.png')"/>
        <p>38</p>
      </div>
    </div>
        <div class="posts">
      <img :src="require('~/assets/images/imgVoyagerEu.png')"/>
      <div class="caracPosts">
        <img :src="require('~/assets/images/pictoLogoBlue.png')"/>
        <p>mhost.eu</p>
        <img :src="require('~/assets/images/pictoLike.png')"/>
        <p>5,2k</p>
        <img :src="require('~/assets/images/pictoCom.png')"/>
        <p>38</p>
      </div>
    </div>
  </div>
  </div>
  <!-- Section 6 -->
  <div class="Sec6">
    <div class="titleSec6">
      <h4>ILS NOUS FONT <span>CONFIANCE</span></h4>
    </div>
    <div class="contentSec6">
      <img :src="require('~/assets/images/imgSection5_1.png')"/>
      <img :src="require('~/assets/images/imgSection5_2.png')"/>
      <img :src="require('~/assets/images/imgSection5_3.png')"/>
      <img :src="require('~/assets/images/imgSection5_4.png')"/>
    </div>
  </div>
</div>
</template>

<script>
import banner from '../assets/images/imgBanner.png';
import imgLeft from '../assets/images/headerImg.png';
import flesh from '../assets/images/pictoLogo.png';

export default {
  data(){
    return {
      imgbanner : banner ,
      leftImg : imgLeft ,
      logoFlesh : flesh
    }
  }
}
</script>

<style scoped>
/* SECTION 1 */
.contentSec1{
  height: 900px;
  display: flex;
  background-size: cover;
}
.rightBann{
  width: 40%;
}
.leftBann{
  height: 100%;
  width: 60%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 12%;
}
.txtBann{
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 3.5em;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-left:60%;
}
.txtBann span{
  color: #F5C612;
}
.txtBann button{
  border: solid 1px;
  border-color: white;
  border-radius: 5px;
  padding: 10px;
  font-size:20px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.txtBann button img{
  margin-right: 10px;
}
 /* SECTION 1 RESP */
  @media (max-width: 1400px) {
    .contentSec1{
      flex-direction: column;
      background-position: top;
    }
    .leftBann{
      height: 30%;
      width: 100%;
      background-image: none;
      background-color: #14182e;
      justify-content: center;
      padding: 0;
      align-items: center;
      justify-content: center;
    }
    .rightBann{
      height: 70%;
      width: 100%;
    }
    .txtBann{
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      padding: 0;
    }
}
/* SECTION 2 */
.Sec2{
  background-color: #14182e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.contentSec2{
  width: 75%;
  display: flex;
}
.txtSec2{
 color: white;
 width: 50%;
 display: flex;
 justify-content: center;
 align-items: flex-start;
 flex-direction: column;
 text-align: left;
}
.txtSec2 h2{
 text-transform: uppercase;
 font-size: 28px;
 font-weight: bold;
 margin-bottom: 20px;
}
.txtSec2 span{
  color: #F5C612; 
}
.txtSec2 button{
  border: solid 1px;
  border-color: white;
  border-radius: 5px;
  padding: 10px;
  font-size:16px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.imgSec2{
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
}
/* SECTION 2 RESP*/
 @media (max-width: 1400px) {
    .contentSec2{
      flex-direction: column;
    }
    .txtSec2{
      width: 100%;
      margin-bottom: 50px;
      align-items: center;
      text-align: center;
    }
    .imgSec2{
      width: 100%;
    }
}

  /* SECTION 3 */
  .Sec3{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .titleSec3{
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }
  .titleSec3 h2{
    margin-left: 30px;
    margin-right: 30px;
    font-size: 28px;
    font-family: 'montserrat';
  }
  .articleSec3{
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
  /* SECTION 4 */
  .Sec4{
    width: 100%;
    background-color: #15192e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 50px;
  }
  .titleSec4{
    justify-content: center;
    align-items: center;
    display:flex;
    color: white;
    font-weight: bold;
    font-size: 28px;
    margin: 50px;
  }
  .titleSec4 h4 span{
    color: #F5C612;
  }
  .contentSec4{
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
.avis{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}
.imgAvis{
  margin: 20px;
}
.avis p{
  text-align: center;
  width: 70%;
}
/* SECTION 5 */
.Sec5{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .titleSec5{
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }
  .titleSec5 h2{
    margin-left: 30px;
    margin-right: 30px;
    font-size: 28px;
    font-family: 'montserrat';
  }
  .contentSec5{
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .posts{
    width: 25%;
    margin-bottom: 50px;
  }
  .caracPosts{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  /* SECTION 6 */
  .Sec6{
    background-color: #15192e;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
  }
  .titleSec6{
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .titleSec6 span{
    color: #F5C612;
  }
  .contentSec6{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    padding-bottom: 50px;
  }
</style>