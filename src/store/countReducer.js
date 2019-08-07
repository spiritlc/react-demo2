

export default function countReducer(state = 5, action) {
    switch (action.type) {
        case 'add':
            return state += action.diff
        case 'min':
            return state -= action.diff
        default:
            return state
    }
}