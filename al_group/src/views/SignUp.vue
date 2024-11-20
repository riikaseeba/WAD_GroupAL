<template>
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="formData.confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

        <button type="submit">Sign Up</button>
      </form>
      <div class="redirect">
        <p>Already have an account? <router-link to="/login">Log in</router-link></p>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    handleSubmit () {
      // Form validation (password match)
      if (this.formData.password !== this.formData.confirmPassword) {
        this.errorMessage = 'Passwords do not match!'
        return
      }
      this.errorMessage = ''

      // If passwords match, proceed with the signup process.
      // You can replace the next line with an API call to register the user
      console.log('Submitting form data:', this.formData)

      // Example of handling the sign-up logic
      this.$router.push('/welcome') // Redirect to a welcome page (or a different page after signup)
    }
  }
}
</script>

  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  .error-message {
    color: red;
    font-size: 0.9rem;
  }

  .redirect {
    margin-top: 15px;
    text-align: center;
  }

  .redirect a {
    color: #007bff;
    text-decoration: none;
  }

  .redirect a:hover {
    text-decoration: underline;
  }
  </style>
