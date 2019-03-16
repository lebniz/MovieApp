<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        IMDB API
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
<v-flex xs12 sm6 md1>
     <v-combobox
          v-model="selectType"
          :items="items"
        ></v-combobox>
</v-flex>
<v-flex xs12 sm6 md3>
        <v-text-field
          label='Movie Name'
          v-model='searchString'
          >
        </v-text-field>
        </v-flex>
      <v-btn
        flat
        :disabled="!dataAvailable"
        @click="searchMovie"
      >
       <span class="mr-2">Search</span>
      </v-btn>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: '',
      selectType: 'Type',
        items: [
          'Type',
          'Movie',
          'Series',
          'Episode'
        ]
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchString + '-' + this.selectType)
      this.searchString = ''
      this.selectType = 'Type'
    }
    // onChange() {
    //   this.$router.push('/search/' + this.selectType)
    //   console.log(this.selectType)
    //   this.selectType = ''
    // }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>