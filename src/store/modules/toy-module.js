import { toyService } from '../../services/toy-service'

export default {
    state: {
        toys: null,
    },
    getters: {
        toys(state) {
            return state.toys
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        }
    },
    actions: {
        loadToys({ commit }) {
            toyService.query().then((toys) => {
                commit({ type: 'setToys', toys })
            })
        }
    }
}