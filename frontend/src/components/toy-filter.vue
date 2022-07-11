<template>
  <section class="toy-filter">
    <input
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      class="filter-input"
      placeholder="Search by name..."
    />
    <select v-model="filterBy.status" @change="setFilter">
      <option value="">All</option>
      <option value="in">In stock</option>
      <option value="out">Out of stock</option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        name: '',
        status: '',
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
