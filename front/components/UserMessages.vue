<template >
  <div class="w-[80%] relative">
    <div class="h-[20%] bg-white flex flex-row justify-between">
      <div class="w-[80%] flex items-center">
        <div
          class="
            ml-[20px]
            mr-[10px]
            w-[80px]
            h-[80px]
            rounded-[100%]
            flex
            justify-center
            items-center
            border border-[#213B83]
          "
        >
          <div class="w-[70px] h-[70px] rounded-[100%] overflow-hidden">
            <img
              class="w-full h-full object-cover"
              :src="
                require(`~/assets/images/users/picture/${targetedUser.picture}`)
              "
            />
          </div>
        </div>
        <div>
          <p>{{ targetedUser.name }} {{ targetedUser.surname }}</p>
          <p>{{ needs }}</p>
        </div>
      </div>
      <div class="w-[20%] flex flex-col items-center justify-center">
        <button
          class="
            bg-[#F6C72B]
            text-white
            rounded-[5px]
            w-[80%]
            h-[34px]
            mt-[15px]
            mb-[7px]
          "
        >
          Gérer l'amitié
        </button>
        <button
          @click="showHost"
          class="
            bg-[#213B83]
            text-white
            rounded-[5px]
            w-[80%]
            h-[34px]
            mb-[15px]
            mt-[7px]
          "
        >
          Demande de voyage
        </button>
      </div>
    </div>
    <div
      class="h-[60%] overflow-auto flex flex-col-reverse hide-scrollbar px-4"
    >
      <ul>
        <li
          v-for="data in messages"
          class="py-2.5"
          :class="{ reverse: data.isMe }"
          :key="data.value"
        >
          <div
            :class="{ reverse: data.isMe }"
            class="flex items-center w-[50%]"
          >
            <div
              class="
                w-[60px]
                h-[60px]
                rounded-full
                flex
                justify-center
                items-center
                border border-[#213B83]
              "
            >
              <div class="w-[50px] h-[50px] rounded-[100%] overflow-hidden">
                <!-- Affiche l'image de l'utilisateur si le message lui appartient  -->
                <img
                  v-if="data.isMe"
                  class="w-full h-full object-cover"
                  :src="require(`~/assets/images/users/picture/${picture}`)"
                />
                <!-- Sinon, affiche l'image du correspondant -->
                <img
                  v-else
                  class="w-full h-full object-cover"
                  :src="
                    require(`~/assets/images/users/picture/${targetedUser.picture}`)
                  "
                />
              </div>
            </div>
            <div :class="[data.isMe ? 'mr-[20px]' : 'ml-[20px]']">
              <p>{{ data.value }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="h-[20%] flex justify-center items-center">
      <form @submit.prevent="postMessage" class="relative w-[90%]">
        <input
          class="w-full rounded-full h-[30px] px-8"
          v-model="input"
          type="text"
          placeholder="Rédiger un message..."
        />
        <button class="absolute right-3.5 top-1.5">
          <img
            class="w-[20px]"
            :src="require('~/assets/images/send-message.svg')"
          />
        </button>
      </form>
    </div>
    <div class="absolute top-[10%] left-[33%]">
      <HostQuery
        v-show="isHostOpen"
        @close-host="showHost"
        :targetedUser="targetedUser"
      />
    </div>
  </div>
</template>
<script>
import HostQuery from "~/components/form/HostQuery.vue";

export default {
  components: { HostQuery },
  data() {
    return {
      input: "",
      messages: [],
      picture: this.$auth.$state.user.picture,
      isHostOpen: false,
    };
  },
  props: {
    targetedUser: {},
    match_id: {
      type: Number,
    },
  },
  async mounted() {
    const messages = await this.$axios.$get(`${process.env.API_URL}/messages`, {
      headers: {
        Authorization: this.$auth.$storage._state["_token.local"],
        match_id: this.match_id,
      },
    });
    messages.forEach((el) => {
      this.messages = [
        ...this.messages,
        {
          value: el.message,
          isMe: el.from === this.$auth.$state.user.id ? true : false,
        },
      ];
    });

    this.socket = this.$nuxtSocket({
      path: "/socket.io",
      transports: ["websocket"],
      auth: {
        token: this.$auth.$storage._state["_token.local"],
      },
      query: {
        me: this.$auth.$state.user.id,
      },
    });
    this.socket.on("message", (data) => {
      this.messages = [...this.messages, { value: data, isMe: false }];
    });
  },
  methods: {
    postMessage() {
      const payload = {
        match_id: this.match_id,
        from: this.$auth.$state.user.id,
        message: this.input,
      };

      const data = {
        //Id de l'utilisateur à qui envoyer un message
        user_id: this.targetedUser.id,
        // Message à envoyer
        message: this.input, 
      };
      //Emission des données sur le canal message
      this.socket.emit("message", data);

      this.$axios.$post(`${process.env.API_URL}/messages`, payload, {
        headers: {
          Authorization: this.$auth.$storage._state["_token.local"],
        },
      });

      this.messages = [...this.messages, { value: this.input, isMe: true }];

      this.input = "";
    },
    showHost() {
      this.isHostOpen = !this.isHostOpen;
    },
  },
  computed: {
    needs() {
      if (this.targetedUser.needs === "H") {
        return "Peut héberger";
      }
      if (this.targetedUser.needs === "T") {
        return "Veut voyager";
      } else {
        return "Veut discuter";
      }
    },
  },
};
</script>
<style scoped>
.reverse {
  display: flex;
  flex-direction: row-reverse;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>