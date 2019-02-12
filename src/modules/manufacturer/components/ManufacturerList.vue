<template>
  <div class="container">
    <h1>Manufacturers</h1>
    <div class="manufacturers">
      <manufacturer-tile :manufacturer="manufacturer" v-for="(manufacturer, id) in manufacturers" :key="id"/>
    </div>
  </div>
</template>

<script>
import ManufacturerTile from './ManufacturerTile'

export default {
  name: 'ManufacturerList',

  components: {
    ManufacturerTile
  },

  beforeMount () {
    this.$store.dispatch('manufacturer/loadManufacturers', 'http://localhost:8080/api/ext/manufacturer/manufacturers')
      .then(res => {
        console.log(res)
        this.manufacturers = this.$store.state.manufacturer.manufacturers
      }).catch(() => {
        console.log('load error')
      })
  },

  data () {
    return {
      manufacturers: []
    }
  },

  methods: {
    validateRoute () {
      this.$store.dispatch('manufacturer/loadManufacturers')
    }
  },

  watch: {
    '$route': 'validateRoute'
  }
}
</script>

<style scoped>
.manufacturers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
.manufacturer {
  height:400px;
}
</style>
