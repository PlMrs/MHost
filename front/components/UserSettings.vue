<template lang="">
    <div class="w-[80%] flex items-center flex-col">
        <h1>Paramètres</h1>
        <div class="flex items-center justify-center flex-col">
            <div @click="show('picture')" class=" cursor-pointer w-[200px] h-[200px] rounded-[100%] flex justify-center items-center border border-[#213B83]"><div class="w-[180px] h-[180px] rounded-[100%] overflow-hidden"><img class="w-full h-full object-cover" :src="require(`~/assets/images/users/picture/${this.$auth.$state.user.picture}`)" /></div></div>
            <p v-if="this.$auth.user.verified">Vérifié ✔️</p>
            <p v-if="!this.$auth.user.verified && this.$auth.user.carte_id != null">En attente de vérification</p>
            <p class="cursor-pointer" v-if="!this.$auth.user.verified && this.$auth.user.carte_id === null" @click="isVerifiedFormOpen = !isVerifiedFormOpen" >Non-Vérifié, cliquer pour faire la demande</p>
            <div v-if="!this.$auth.user.verified && this.$auth.user.carte_id === null"  v-show="isVerifiedFormOpen">
                <form class="flex flex-col" @submit.prevent="postVerifications()">
                    <label for="carte_id">Carte d'identité</label>
                    <input name="carte_id" ref="carte_id" type="file" accept=".jpg, .png, .jpeg, .pdf" title="carte d'identité" placeholder="carte d'identité" required>
                    <label for="">Certificat scolaire</label>
                    <input name="certificat_scolaire" ref="certificatScolaire" type="file" accept=".jpg, .png, .jpeg, .pdf" title="certificat scolaire" placeholder="certificat scolaire" required>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <div :class="{show : isPictureOpen}" ref="name_surname" class="bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden">
                    <form class="flex flex-col items-center w-fit" @submit.prevent="updatePicture()">
                        <input class="my-3.5" type="file" ref="file" placeholder="Télécharger une image" @change="handleFileUpload()" />
                        <button>Modifier</button>
                    </form>
                </div>
            <div class="flex items-center relative justify-center my-3.5">
                <p class="text-3xl font-bold">{{this.name}} {{this.surname}}</p>
                <button class="absolute right-[-33px]" @click="show('NS')"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
                <div :class="{show : isNSOpen}" ref="name_surname" class="bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden">
                    <form class="flex flex-col items-center w-fit" @submit.prevent="update({name:name,surname:surname})">
                        <input class="my-3.5" type="text" v-model="name" placeholder="Nom" />
                        <input class="my-3.5" type="text" v-model="surname" placeholder="Prénom" />
                        <button>Modifier</button>
                    </form>
                </div>
            </div>
            <div class="flex items-center relative justify-center my-3.5">
                <p>{{this.email}}</p>
                <button class="absolute right-[-33px]" @click="show('email')"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
                <div :class="{show : isMailOpen}" ref="name_surname" class="bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden">
                    <form class="flex flex-col items-center w-fit" @submit.prevent="update({email: email})">
                        <input class="my-3.5" type="email" v-model="email" placeholder="E-mail" />
                        <button>Modifier</button>
                    </form>
                </div>
            </div>
            <div class="flex items-center relative justify-center my-3.5">
                <p>{{this.description}}</p>
                <button class="absolute right-[-33px]" @click="show('description')"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
                <div :class="{show : isDescOpen}" ref="desc" class="bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden">
                    <form class="flex flex-col items-center w-fit" @submit.prevent="update({description: description})">
                        <textarea name="desc" v-model="description" placeholder="description"></textarea>
                        <button>Modifier</button>
                    </form>
                </div>
            </div>
           <div class="flex items-center relative justify-center my-3.5"> 
               <p>Changer mon mot de passe</p>
               <button class="absolute right-[-33px]" @click="show('password')"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
                <div :class="{show : isPasswordOpen}" ref="name_surname" class="bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden">
                    <form class="flex flex-col items-center w-fit" @submit.prevent="update({password:password})">
                        <input class="my-3.5" type="password" v-model="password" placeholder="Mot de passe" />
                        <input class="my-3.5" type="password" v-model="confPassword" placeholder="Confirmation du mot de passe" />
                        <button>Modifier</button>
                    </form>
                </div>
           </div>
            <div class="flex items-center relative justify-center my-3.5">
                <p>Je veux {{needs}}</p>
                <button class="absolute right-[-33px]" @click="show('needs')"><img class="w-[20px]" :src="require('~/assets/images/edit.svg')" alt=""></button>
                <div :class="{show : isNeedsOpen}" ref="name_surname" class="bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden">
                    <form class="flex flex-col items-center w-fit" @submit.prevent="update({needs : userNeeds})">
                        <select v-model="userNeeds">
                            <option disabled value="">Choisissez</option>
                              <option v-for="option in options" v-bind:value="option.value">
                                    {{ option.text }}
                              </option>
                        </select>
                        <button>Modifier</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as bcrypt from "bcryptjs";
export default {
    middleware: 'auth',
  data() {
    return {
      isNSOpen: false,
      isMailOpen: false,
      isPasswordOpen: false,
      isNeedsOpen: false,
      isPictureOpen: false,
      isVerifiedFormOpen: false,
      isDescOpen: false,
      userNeeds: null,
      options: [
        { text: "Je veux héberger", value: "H" },
        { text: "Je veux voyager", value: "T" },
        { text: "Je veux juste discuter", value: "D" },
      ],
      name: null,
      surname: null,
      email: null,
      password: null,
      confPassword: null,
      file: "",
      certificatScolaire: "",
      carte_id: "",
      description: "",
    };
  },
  mounted() {
    (this.name = this.$auth.$state.user.name),
      (this.surname = this.$auth.$state.user.surname),
      (this.email = this.$auth.$state.user.email),
      (this.userNeeds = this.$auth.$state.user.needs),
      (this.description = this.$auth.$state.user.description);
  },
  computed: {
    needs() {
      if (this.userNeeds === "T") {
        return "voyager";
      } else if (this.userNeeds === "H") {
        return "héberger";
      } else {
        return "discuter";
      }
    },
  },
  methods: {
    async update(payload) {
      if (payload.password) {
        if (payload.password != this.confPassword) {
          return;
        }
        const salt = bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT));
        const passwordHashed = bcrypt.hashSync(payload.password, salt);
        payload.password = passwordHashed;
      }
      const res = await this.$axios.$patch(
        `${process.env.API_URL}/users/${this.$auth.$state.user.id}`,
        payload,
        {
          headers: {
            Authorization: this.$auth.$storage._state["_token.local"],
          },
        }
      );

      if (res.affected === 1) {
        if (payload.name) {
          this.name = payload.name;
          this.$auth.setUser({ ...this.$auth.user, name: payload.name });
        }
        if (payload.surname) {
          this.surname = payload.surname;
          this.$auth.setUser({ ...this.$auth.user, surname: payload.surname });
        }
        if (payload.email) {
          this.email = payload.email;
          this.$auth.setUser({ ...this.$auth.user, email: payload.email });
        }
        if (payload.needs) {
          this.userNeeds = payload.needs;
          this.$auth.setUser({ ...this.$auth.user, needs: payload.needs });
        }
        this.show("all");
      }
    },
    updatePicture() {
      let formData = new FormData();
      formData.append("file", this.file);
      this.$axios.$post(`/users/upload`, formData, {
        headers: {
          Authorization: this.$auth.$storage._state["_token.local"],
          "Content-Type": "multipart/form-data",
        },
      });
      this.$router.go();
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    show(e) {
      e === "NS" ? (this.isNSOpen = !this.isNSOpen) : null;
      e === "email" ? (this.isMailOpen = !this.isMailOpen) : null;
      e === "password" ? (this.isPasswordOpen = !this.isPasswordOpen) : null;
      e === "needs" ? (this.isNeedsOpen = !this.isNeedsOpen) : null;
      e === "picture" ? (this.isPictureOpen = !this.isPictureOpen) : null;
      e === "description" ? (this.isDescOpen = !this.isDescOpen) : null;
      if (e === "all") {
        this.isNSOpen = false;
        this.isMailOpen = false;
        this.isPasswordOpen = false;
        this.isNeedsOpen = false;
      }
    },
    async postVerifications() {
      let formData = new FormData();
      console.log(this.$refs.carte_id.files[0]);
      formData.append("carte_id", this.$refs.carte_id.files[0]);
      formData.append(
        "certificatScolaire",
        this.$refs.certificatScolaire.files[0]
      );
      console.log(
        formData.has("carte_id") && formData.has("certificatScolaire")
      );
      const res = await this.$axios.$post(
        `/users/uploadVerifications`,
        formData,
        {
          headers: {
            Authorization: this.$auth.$storage._state["_token.local"],
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.affected === 1) {
      }
    },
  },
};
</script>
<style scoped>
.show {
  display: block !important;
}
</style>