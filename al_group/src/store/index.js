import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  getters: {
    allPosts: (state) => state.posts
  },
  actions: {
    async fetchPosts ({ commit }) {
      try {
        // Fetch the data from the public folder
        const response = await fetch('json/describePost.json') // Updated path for public folder
        const data = await response.json()

        // Commit the posts data to the Vuex store
        commit('setPosts', data.posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
  }
})
