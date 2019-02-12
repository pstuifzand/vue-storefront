<template>
  <div class="manufacturer">
    <a :href="'/manufacturer/' + manufacturer.slug">
      <img :src="'http://placehold.it/400/E0E0E0/000000?text=' + manufacturer.name">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Manufacturer',
  props: {
    manufacturer: {
      type: Object,
      default: () => {
        return {
          id: null,
          name: null,
          slug: null
        }
      }
    }
  }
}
</script>

<style scoped>
.manufacturer  {
  position: relative;
}
.manufacturer a:hover {
  text-decoration: none;
}
.manufacturer img {
  width: 100%;
  height: auto;
}
.manufacturer div.name {
  position: absolute;
  text-align:center;
  color: white;
  font-size: 14px;
  font-weight: bold;
}
</style>
