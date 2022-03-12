<template>
  <div class="container">
      <div class="display__flex">
        <div>
          <h1>VISUALIZAÇÃO VUE</h1>
          <p>Nome: {{name}}</p>
          <p>Idade: {{age}}</p>
          <br>
          <a href="http://localhost:3000/">Ir para form NEXT</a>
          <br><br>
          <a href="http://localhost:3001/">Ir para form REACT</a>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      name: null,
      age: null
    }
  },
  async mounted() {
    const { data } = await axios.get('http://localhost:3002/profile')
    console.log(data)
    this.name = data.name
    this.age = data.age
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.container {
  padding: 0 2rem;
  width: 100vw;
  height: 100vh;
}

.display__flex {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.form__field {
  margin: 15px 0;
}

.input {
  padding: 5px;
  width: 100%;
}

.button {
  padding: 5px;
  width: 100%;
}
</style>
