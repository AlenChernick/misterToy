<template>
  <section class="toy-filter">
    <input
      v-model="filterBy.labels"
      @input="setFilter"
      type="text"
      class="filter-input"
      placeholder="Search label..."
    />
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        labels: '',
      },
    }
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', this.filterBy)
    },
  },
}
</script>
