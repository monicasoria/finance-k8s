<template>
  <v-container id="users" fluid tag="section">
    <base-material-card 
      icon="mdi-account-group" 
      title="Users" 
      class="px-5 py-3"
    >
      <!-- CRUD Table for Users -->
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        sort-by="name"
      >
        <!-- Header for Search Bar and wraper for creating and updating Users -->
        <template v-slot:top>
          <v-toolbar flat color="white">
            <!-- Search Bar Text Field -->
            <v-text-field
              v-model="search"
              label="Search by user name"
              single-line
              hide-details
              append-icon="mdi-magnify"
            >
            </v-text-field>
            <v-spacer></v-spacer>
            <!-- Pop up For Editing and creating a new User -->
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <!-- Reload button to fetch Users from Backend -->
                <v-btn icon color="primary" large @click="getAllUsers()">
                  <v-icon>mdi-cached</v-icon>
                </v-btn>
                <v-btn color="primary" dark class="mb-2 black--text" v-on="on">Add User</v-btn>
              </template>
              <!-- Pop Up Card For Editing and Creating User -->
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.firstName" label="First Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                      </v-col>
                      <!-- Type of User -->
                      <v-col cols="12" sm="12" md="6">
                        <!-- Status Toogle Switch -->
                        <v-switch
                          v-if="!createOrEdit"
                          hide-details
                          :label="editedItem.isActive ? 'Status: Active' : 'Status: Inactive'"
                          input-value="true"
                          v-model="editedItem.isActive"
                        />
                      </v-col>  
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="primary darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <!-- Update and Delete Icons for Accions Column  -->
        <template v-slot:item.actions="{ item }">
          <v-icon
            @click="editItem(item)"
            color="info"
            class="mr-2"
            large
          >
            mdi-pencil
          </v-icon>
          <v-icon
            @click="deleteItem(item)"
            color="error"
            large
          >
            mdi-delete
          </v-icon>
        </template>
        <!-- Test Reset Button -->
        <template v-slot:no-data>
          No users yet
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>


<script>

import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  name: "Users",
  data: () => ({
    show: false,
    search: '',
    dialog: false,
    headers: [
      {
        text: 'First Name',
        align: 'start',
        value: 'firstName',
        sortable: false,
      },
      { 
        text: 'Last Name',
        value: 'lastName',
        sortable: false,
      },
      { 
        text: 'status', 
        value: 'isActive',
        sortable: false,
      },
      { 
        text: 'Accions',
        value: 'actions',
        sortable: false,
        align: "end"
      },
    ],
    editedIndex: -1,
    editedItem: {
      firstName: '',
      lastName: '',
      isActive: false,
    },
    defaultItem: {
      firstName: '',
      lastName: '',
      isActive: false,
    },
  }),

  computed: {
    ...mapGetters('users', {
      users: 'getUsers',
    }),


    formTitle() {
      return this.editedIndex === -1 ? 'Add User' : 'Edir User';
    },

    createOrEdit() {
      return this.editedIndex === -1 ? true : false;
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.getAllUsers();
  },

  methods: {
    ...mapActions('users', 
      [
        'getAllUsers',
        'deleteUser', 
        'updateUser',
        'insertUser'
      ]
    ),

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)
      confirm('Are you sure you want to delete this user?') && this.users.splice(index, 1)
      this.deleteUser({ item, index });
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
        console.log("save -> this.editedItem", this.editedItem)
        this.updateUser(
          {
            user: this.editedItem,
            userIndex: this.editedIndex
          }
        )
      } else {
        this.insertUser(this.editedItem);
      }
      this.close()
    },

  }
};
</script>
