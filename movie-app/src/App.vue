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
<v-flex xs12 sm6 md3>
<select v-model="selectType">
  <option disabled value="">TYPES</option>
  <option value="movie">movie</option>
  <option value="series">series</option>
  <option value="episode">episode</option>
</select>
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
      selectType: ''
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchString)
      this.searchString = ''
      this.selectType = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>