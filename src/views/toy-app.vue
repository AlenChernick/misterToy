<template>
  <section class="toy-app">
    <button @click="goToEdit" class="btn">Add a new toy</button>
    <toy-filter @setFilter="setFilter" />
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toysToShow" />
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'
export default {
  name: 'toy-app',
  data() {
    return {
      filterBy: null,
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    toysToShow() {
      if (!this.filterBy) return this.toys
      const regex = new RegExp(this.filterBy.vendor, 'i')
      return this.toys.filter((toy) => regex.test(toy.labels))
    },
  },
  methods: {
    loadToys() {
      toyService.query().then((toys) => (this.toys = toys))
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    goToEdit() {
      this.$router.push('/toy/edit')
    },
  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>
