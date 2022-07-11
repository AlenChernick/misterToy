<template>
  <li class="toy-preview">
    <p><span class="toy-id">ID:</span> {{ toy._id }}</p>
    <p><span class="toy-name">Name:</span> {{ toy.name }}</p>
    <p><span class="toy-price">Price:</span> {{ $filters.currencyUSD(toy.price) }}</p>
    <div class="btn-group">
      <button @click="goToEdit" class="btn-edit">Edit</button>
      <button @click="goToDetails" class="btn-details">Details</button>
      <button @click="removeToy(toy._id)" class="btn-remove">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  methods: {
    goToDetails() {
      this.$router.push(`/toy/${this.toy._id}`)
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy._id}`)
    },
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
