import { toyService } from '../../services/toy-service'

export default {
    state: {
        toys: null,
    },
    getters: {
        toys(state) {
            return state.toys
        }
    }
}