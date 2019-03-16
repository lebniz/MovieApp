import axios from 'axios'

export default {

  fetchMovieCollection (name, type) {
    return axios.get('&s=' + name + '&Type=' + type)
      .then(response => {
        return response.data
      })
  },
  
  fetchSingleMovie (id) {
    return axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}