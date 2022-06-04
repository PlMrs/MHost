<template>
<div>
    <!-- BANNER -->
      <div class="Sec1" :style="{ backgroundImage: `url(${imgbannerSite})`}">
          <h1>Quatre villes incontournables en Italie</h1>
      </div>
      <!-- Section 2 -->
      <div class="Sec2">
          <div class="contentSec2">
              <div class="titleSec2">
                  <img :src="require('~/assets/images/Picto1.png')"/>
                  <h2>Venise</h2>
              </div>
          </div>
           <div class="txtSec2">
                <p>Venise, une ville magnifique et mémorable qui envoute ses visiteurs par <span>son charme incroyable.</span><
                    C'est un lieu de <span>rêve</span> et de <span>romantisme</span>. Pour un voyage unique et des souvenirs inoubliables c’est une destination incontournable.</br>

                    </br>Venise est une <span>ville emblématique</span> de l’Italie. Ne possédant aucune route, la ville est uniquement accessible via des canaux dont le Grand Canal bordé de palais gothiques et renaissance.
                    Voici quelques idées de lieux à visiter / voir à Venise :
                </p>
           </div>
      </div>
       <!-- Section 3 -->
       <div class="Sec3">
           <div class="divImg">
                <img :src="require('~/assets/images/imgArticle1.png')"/>
           </div>
           <div class="divTxt">
               <div class="titleArticle">
                   <h3>/ la place saint marc</h3>
                   <img :src="require('~/assets/images/pictiArticle1.png')"/>
               </div>
                   <p>
                       Vous y découvrirez les principaux monuments comme <span>la Basilique Marc et le Palais des Doges.</span></br>
                        La Place Saint-Marc (San Marco) se trouve en plein cœur de Venise. Elle mesure 180 mètres de long et 70 mètres de large. 
                        « Piazza San Marco » est l’<span>unique</span> place de Venise.

                   </p>
            </div>
        </div>
        <!-- Section 4 -->
       <div class="Sec3">
            <div class="divTxt">
               <div class="titleArticle">
                   <h3>/ la place saint marc</h3>
                   <img :src="require('~/assets/images/pictiArticle1.png')"/>
               </div>
                   <p>
                       Inauguré le 16 mai 1792, le théâtre accueille très vite les plus grands opéras d’Europe comme ceux de <span>Bellini</span> ou de <span>Rossini</span> mais aussi des pièces de théâtre, des ballets et des concerts de musique classique.</br>
                Construit dans un style néo-classique, le Théâtre de La Fenice est composé d’<span>une salle majestueuse</span> et finement ornée de dorure et de cinq étages superposés.
C’est dans ce lieu mythique que se sont produits les grandes premières d’œuvres majeures comme <span>Rigoletto et La Traviata de Verdi.</span>


                   </p>
            </div>
           <div class="divImg">
                <img :src="require('~/assets/images/imgArticle2.png')"/>
           </div>
        </div>
        <!-- Section 5 -->
       <div class="Sec3">
           <div class="divImg">
                <img :src="require('~/assets/images/imgArticle3.png')"/>
           </div>
           <div class="divTxt">
               <div class="titleArticle">
                   <h3>/ Le quartier du Cannaregio</h3>
                   <img :src="require('~/assets/images/pictiArticle1.png')"/>
               </div>
                   <p>
                       Le quartier de Cannaregio est un <span>quartier réputé</span> et <span>animé</span> de Venise. 
Il est situé au nord de la ville, il est loin des circuits touristiques. Pourtant, il possède quelques sites qui méritent la visite : églises, palais, ruelles... </br>

                        C’est également un quartier agréable pour <span>se balader</span> et <span>découvrir la gastronomie vénitienne,</span> mais aussi pour se loger.


                   </p>
            </div>
        </div>
         <!-- Section 6 -->
      <div class="Sec2">
          <div class="contentSec2">
              <div class="titleSec2">
                  <img :src="require('~/assets/images/picto2.png')"/>
                  <h2>Rome</h2>
              </div>
          </div>
           <div class="txtSec2">
                <p>Rome est la <span>capitale de l’Italie</span> avec 2,8 millions d’habitants. Selon la légende, Rome aurait été fondée par les jumeaux Rémus et Romulus en 753 avant J.C. </br>

                    </br>La ville se situe le long du fleuve Tibre et a été construite sur sept collines :
Le Palatin, l’Aventin, le Capitole, le Cælius, le Viminal, le Quirinal et l’Esquilin. 
Rome est un <span>musée à ciel ouvert</span>, et tout l’ancien centre-ville est sur la liste du patrimoine mondial de l’UNESCO.

                </p>
           </div>
      </div>
         <!-- Section 7 -->
       <div class="Sec3">
           <div class="divImg">
                <img :src="require('~/assets/images/imgArticle4.png')"/>
           </div>
           <div class="divTxt">
               <div class="titleArticle">
                   <h3>/ La Basilique Saint-Pierre</h3>
                   <img :src="require('~/assets/images/pictiArticle1.png')"/>
               </div>
                   <p>
                       La Basilique Saint Pierre de Rome, est située au Vatican, dans l'Ouest de la ville. Elle est l'église principale du Catholicisme, son centre spirituel et aussi <span>la plus grande.</span> A noter qu'elle n'est pas la cathédrale de Rome puisque c'est Saint Jean de Latran qui assure cette fonction.</br>

                        Son architecture, sa beauté et sa richesse en font l'une des <span>étapes incontournables</span> d'un séjour à Rome.
Elle est construite à l'emplacement du tombeau de Saint Pierre, apôtre du Christ.

                   </p>
            </div>
        </div>
        <!-- Section 8 -->
       <div class="Sec3">
           <div class="divTxt">
               <div class="titleArticle">
                   <h3>/ le panthéon</h3>
                   <img :src="require('~/assets/images/pictiArticle1.png')"/>
               </div>
                   <p>
                       Le Panthéon est l’un des bâtiments le plus représentatif du centre de Rome. La construction du Panthéon a commencé en 27 avant J.C. sous la direction de Marcus Agrippa.</br>
                        Construit dans un style néo-classique, le Théâtre de La Fenice est composé d’<span>une salle majestueuse</span> et finement ornée de dorure et de cinq étages superposés.
                        C’est l’un des rares monuments de l’ancienne Rome encore <span>intact.</span>


                   </p>
            </div>
             <div class="divImg">
                <img :src="require('~/assets/images/imgArticle5.png')"/>
           </div>
        </div>
        <!-- Section 9 -->
       <div class="Sec3">
           <div class="divImg">
                <img :src="require('~/assets/images/imgArticle6.png')"/>
           </div>
           <div class="divTxt">
               <div class="titleArticle">
                   <h3>/ la fontaine de trevi</h3>
                   <img :src="require('~/assets/images/pictiArticle1.png')"/>
               </div>
                   <p>
                       La ‘Fontana di Trevi’, aussi appelé la fontaine de Trévi, est sans doute <span>la fontaine la plus célèbre du monde</span> et certainement de Rome.
La fontaine baroque est située sur la place Piazza di Trevi.
</br>
                        La tradition veut que l’on jette une pièce de monnaie dans la fontaine (les yeux fermés et jetée avec la main droite par-dessus l’épaule gauche).

                   </p>
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
    padding-top: 50px;
    flex-direction: column;
}
.contentSec2{
    display: flex;
    flex-direction: column;
    width: 75%;
}
.titleSec2{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    font-size: 28px;
    font-weight: bold;
}
.titleSec2 img{
    margin-right: 20px;
    height: 30px;
    width: 30px;
}
.txtSec2{
    display: flex;
    flex-direction: column;
    width: 75%;
    font-weight: 100;
    margin-top: 50px;
    font-size: 18px;
}
.txtSec2 span{
    font-weight: 600;
}
/* SECTION 3 */

.Sec3{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 50px;
}
.divImg{
width: 30%;

}
.divTxt{
width: 70%;
padding-left: 100px;
}
.divTxt p{
    width: 70%;
    font-weight: 100;
    font-size: 18px;
}
.divTxt span{
font-weight: 600;
}
.titleArticle{
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: row;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 50px;
}
.titleArticle img{
    height: 30px;
    width: 30px;
    margin-left: 20px;
}
</style>