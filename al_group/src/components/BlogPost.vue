<template>
  <div v-for="(post, index) in posts" :key="index" class="post">
    <div class="post-head">
      <table>
        <tbody>
          <tr>
            <td><img :src="post.profileImage" alt="Profile" width="40" height="40" /></td>
            <td><h1>{{ post.date }}</h1></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="post.postImage" class="post-image">
      <img :src="post.postImage" alt="Post image" width="500" />
    </div>

    <div class="post-caption">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>

    <div class="like-icon">
      👍 {{ post.likes }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BlogPost',
  computed: {
    ...mapGetters(['allPosts']) // Accessing posts from Vuex store
  },
  created () {
    this.fetchPosts() // Fetch posts when component is created
  },
  methods: {
    ...mapActions(['fetchPosts']) // Map the fetchPosts action from Vuex store
  }
}
</script>

  <style scoped>
  .post {
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }

  .post-head {
    display: flex;
    justify-content: space-between;
  }

  .post-image {
    margin-top: 10px;
  }

  .post-caption {
    margin-top: 10px;
  }

  .like-icon {
    margin-top: 10px;
    font-size: 1.2rem;
  }
  </style>
