<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <v-card v-if="! $store.state.loggedIn" class="mt-5">
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
          <h3 v-else>Inbox</h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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
  // components: {
  //   HelloWorld
  // }
}
</script>
