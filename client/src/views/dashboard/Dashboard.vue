<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <!-- Input CSV File for Database  -->
      <v-col
        cols="12"
        lg="4"
      >
        <base-material-card>
          <template>
             <v-file-input accept=".csv" label="Select a Kickstarter csv File"></v-file-input>
          </template>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
      }
    },

    computed: {
    },

    created () {
    },

    methods: {
    },
  }
</script>
