<template>
    <header>
      <div class="navbar">
        <img
          id="logo"
          src="@/assets/al_logo.png"
          alt="Logo"
          width="50"
          height="50"
        />
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/AddPost">AddPost</router-link></li>
            <li><router-link to="/signup">SignUp</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

<script>
export default {
  name: 'AppHeader'
}
</script>

  <style scoped>
  /* Your header styles here */
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    color: white;
  }

  .navbar ul {
    list-style: none;
    display: flex;
  }

  .navbar li {
    margin-left: 20px;
  }

  .navbar a {
    text-decoration: none;
    color: white;
  }
  </style>
