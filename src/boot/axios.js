import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({ 
    baseURL: 'https://swapi.co/api/' 
  })

Vue.prototype.$axios = axiosInstance
