<template>
  <div class="home">
    <v-container>
      <Login v-if="! log" />
      <v-row v-else>
        <v-col cols="12">
          <v-card>
            <v-subheader>
              Inbox
              <v-spacer></v-spacer>
              <v-btn icon @click="$store.dispatch('refresh', user)" :loading=loader>
                <v-icon>mdi-reload</v-icon>
              </v-btn>
            </v-subheader>
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
import Login from '../components/Login.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Inbox',
  computed: {
    ...mapGetters({
      mails: 'getMails',
      log: 'getLog',
      user: 'getUser',
      loader: 'getLoader'
    })
  },
  components: {
    Login
  }
}
</script>
