<template>
  <div class="">
    <div class="">
      <div class="row">
          <div class="col s12 m6 l4" v-for="image in images">
            <div class="card horizontal">
              <div class="card-image">
                <img :src="image.url" >
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>{{ image.title }}</p>
                </div>
                <div class="card-action">
                  <a :href="image.url">Cliquer sur ce lien</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  created () {
    this.$http.get('/photos').then((res) => {
      this.images = res.data
    })
  },
  data () {
    return {
      images: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .card-image{
   img{
     width: 400px;
     height: 300px;
   }
 }
</style>
