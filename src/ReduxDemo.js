import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import store from './store';

export default connect(
    state => ({
        userInfo: state.userInfo
    }),
    dispatch => ({
        login(name) {
            dispatch({
                type: 'login',
                name
            })
        }
    })
)(
    function ReduxDemo(props) {
        const [userName, changeUserName] = useState('')
        console.log(props)
        return (
            <div>
                <p>{ props.userInfo.loading && '登录中' }</p>
                <p>{ props.userInfo.errorMsg }</p>
                <input type="text" value={userName} onChange={e => {changeUserName(e.target.value)}}/>
                <button onClick={props.login.bind(null, userName)}>登录</button>
                {/* <button onClick={() => store.dispatch({
                    type: 'login',
                    name: 'aa'
                })}>登录</button> */}
            </div>
        )
    }
)


