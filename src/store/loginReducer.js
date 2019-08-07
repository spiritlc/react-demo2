import { call, put, takeEvery } from 'redux-saga/effects'
import doLogin from '../server'

const initState = {
    isLogin: false,
    loading: false,
    errorMsg: '',
    userInfo: {}
}
export function loginReducer(state = initState, action) {
    switch (action.type) {
        case 'loading':
            return Object.assign({}, initState, {
                loading: true
            })
        case 'loginSuccess':
            return Object.assign({}, initState, {
                isLogin: true,
                userInfo: action.userInfo
            })
        case 'loginError':
            return Object.assign({}, initState, {
                errorMsg: '登录失败'
            })
        default:
            return state
    }
}

function* asyncLogin(action) {
    // console.log(name)
    yield  put({ type: 'loading'})
    let res = yield call(doLogin, action.name)
    if (res.responseCode === '0') {
        yield put({ type: 'loginSuccess'})
    } else {
        yield put({ type: 'loginError'})
    }
}


export default function* watchLogin() {
    yield takeEvery('login', asyncLogin)
}