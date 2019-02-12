<template>
  <div>
    Manufacturer
    {{ manufacturer.name }}
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
          name: null
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
