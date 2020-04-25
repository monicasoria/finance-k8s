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
        <v-card shaped>
          <v-card-actions>
            <v-file-input
              show-size accept=".csv"
              label="Select a Kickstarter csv File"
              v-model="file"
            ></v-file-input>
          </v-card-actions>
          <v-card-actions>
            <v-btn @click="onSubmitFile()">Submit file</v-btn>
          </v-card-actions>
        </v-card>
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
        file: null,
      }
    },

    computed: {
    },

    methods: {
      ...mapActions('kickstarter', ['uploadFile']),

      onSubmitFile(){
        console.log("onSubmitFile -> this.file", this.file)
        this.uploadFile(this.file);
      }
    },


    created () {
    },
  }
</script>