<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- Pass the postId prop to BlogPost component -->
    <BlogPost :postId="1"/>
    <BlogPost :postId="2" />
    <BlogPost :postId="3" />
    <BlogPost :postId="4" />
    <BlogPost :postId="5" />
    <BlogPost :postId="6" />
    <BlogPost :postId="7" />
    <BlogPost :postId="8" />
    <BlogPost :postId="9" />
    <BlogPost :postId="10" />
    <!-- Reset all likes -->
    <button class="reset-likes" @click="resetAllLikes">Reset All Likes</button>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, BlogPost
  },
  computed: {
    // Fetch all posts from Vuex store
    posts () {
      return this.$store.getters.allPosts
    }
  },
  methods: {
    resetAllLikes () {
      // Dispatch Vuex action to reset all likes
      this.$store.dispatch('resetLikes')
    }
  }
}
</script>
