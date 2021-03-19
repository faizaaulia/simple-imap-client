<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="home">
    <v-container>
      <v-row justify="center" v-if="! $store.state.loggedIn">
        <v-col cols="6">
          <v-card class="mt-5">
            <v-card-title primary-title>
              Login
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  <v-form
                    ref="form"
                    lazy-validation
                  >
                    <v-text-field
                      name="email"
                      label="Email Address"
                      id="email"
                      v-model="user.email"
                      required
                      :rules="[v => !!v || 'Email is required']"
                    ></v-text-field>

                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="user.password"
                      type="password"
                      required
                      :rules="[v => !!v || 'Password is required']"
                    ></v-text-field>

                    <v-btn color="info" @click="$store.dispatch('login', user), validate()" class="mt-1">LOGIN</v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else class="my-5">
        <v-col
          cols="12"
        >
          <v-card>
            <v-subheader>Inbox</v-subheader>
            <v-divider></v-divider>
            <v-list two-line>
              <template v-for="(mail, index) in mails">
                <v-list-item :key="index">
                  <v-list-item-avatar color="grey darken-1"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ mail.subject }}</v-list-item-title>
                    <v-list-item-subtitle>from {{ mail.from }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset :key="`div${index}`" v-if="`div${index}` !== `div${mails.length-1}`"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Inbox',
  data: () => ({
    user: {
      email: null,
      password: null
    }
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
  },
  computed: {
    ...mapGetters({
      mails: 'getMails'
    })
  }
  // components: {
  //   HelloWorld
  // }
}
</script>
