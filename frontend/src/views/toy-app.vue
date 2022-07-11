<template>
  <section class="toy-app">
    <button @click="goToEdit" class="btn">Add a new toy</button>
    <toy-filter @setFilter="setFilter" />
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
  </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  data() {
    return {
      filterBy: {
        name: '',
        status: null,
      },
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'loadToys', filterBy })
    },
    goToEdit() {
      this.$router.push('/toy/edit')
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
    },
  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>
