<template>
  <div class="body blue white-text">
    <div class="container">
      <p>Ouf!! On passe au codeLabs</p>
      <p><router-link class="btn btn-flat btn-large blue lighten-2" :to="{'name':'list'}">Begin</router-link></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.body{
  width: 100vw;
  height: 100vh;
  padding-top: 20%;
  > div{
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 20px;
    a{
      font-size: 30px;
      color: white;
    }
  }
}
</style>
