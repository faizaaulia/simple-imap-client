<template>
  <v-row justify="center">
    <v-col xs="12" sm="8">
      <v-card class="mt-5">
        <v-card-title primary-title> Login </v-card-title>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  name="email"
                  label="Email Address"
                  id="email" v-model="user.email"
                  required
                  class="mt-0"
                  :rules="[v => !!v || 'Email is required']">
                </v-text-field>

                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  v-model="user.password"
                  type="password"
                  required
                  :rules="[v => !!v || 'Password is required']">
                </v-text-field>

                <v-btn 
                  color="info"
                  class="mt-1"
                  @click="$store.dispatch('login', user), validate()"
                  :loading="loader"
                >
                  LOGIN
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
   name: 'Login',
    data: () => ({
      user: {
        email: null,
        password: null
      },
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
    computed: {
      ...mapGetters({
        loader: 'getLoader'
      })
    }
  }
</script>