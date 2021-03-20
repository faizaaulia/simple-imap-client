<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Mailbox
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Simple Imap </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog
        v-model="dialog"
        max-width="500px"
        transition="dialog-transition"
        v-if="log"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title primary-title>
            Logout?
          </v-card-title>
          <v-card-text>
            You will be returned to login page.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined @click="dialog = false" color="primary">Cancel</v-btn>
            <v-btn color="error" @click="$store.dispatch('logout'), dialog = false">Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      drawer: null,
      items: [
        { title: 'Inbox', icon: 'mdi-inbox-arrow-down', to: '/' },
        { title: 'About', icon: 'mdi-help-circle', to: '/about' }
      ],
      dialog: false,
    }),
    computed: {
      ...mapGetters({
        log: 'getLog'
      })
    }
  }
</script>