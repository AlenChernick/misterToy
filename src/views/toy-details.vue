<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p><span class="toy-id">ID:</span> {{ toy._id }}</p>
      <p><span class="toy-name">Name:</span> {{ toy.name }}</p>
      <p><span class="toy-price">Price:</span> {{ toy.price }}</p>
    </article>
    <button @click="goBack" class="go-back-btn">Go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
    }
  },
  created() {
    const { id } = this.$route.params
    toyService.getById(id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
