import React, { Component, useState } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
function Home() {
    return (
        <div>
            home 
        </div>
    )
}

function Detail(props) {
    console.log(props);
    return (
        <h1>课程是{ props.match.params.type }</h1>
    )
}
function About(props) {
    return (
       <div>
            <nav>
                <Link to="/about/font">前端</Link>
                <Link to="/about/houduan">后端</Link>
            </nav>
            <div>
                <Route path="/about/:type" component={Detail}></Route>
            </div>
       </div>
    )
}

function NotFound() {
    return (
        <div>
            404
        </div>
    )
}

const IsLogin = connect(
    state => ({
        isLogin: state.userInfo.isLogin
    })
)(function ({ component: Camp, isLogin, location, ...rest }) {
    return <Route {...rest} render={
        () => isLogin ? <Camp/> : <Redirect to={
                {
                    pathname: '/login',
                    state: {
                        redirectName: location.pathname
                    }
                }
            }></Redirect> 
    }></Route>
})



const Login =  connect(
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
)(function(props) {
    console.log(props)
    const [userName, changeUserName] = useState('')
    // if (props.isLogin)
    if (props.userInfo.isLogin) {
        return <Redirect to={props.location.state.redirectName}></Redirect>
    }
    return (
        <div>
            <div>
                <p>{ props.userInfo.loading && '登录中' }</p>
                <p>{ props.userInfo.errorMsg }</p>
                <input type="text" value={userName} onChange={e => {changeUserName(e.target.value)}}/>
                <button onClick={props.login.bind(null, userName)}>登录</button>
            </div>
        </div>
    )
})


export default function RouterDemo() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">首页</Link>
                <Link to="/about">关于</Link>
                <Link to="/me">我的</Link>
            </nav>
            <div>
                <Switch>
                    <Redirect exact path="/" to="/about" component={Home}></Redirect>
                    <IsLogin path="/about" component={About}></IsLogin>
                    <Route path="/login" component={Login}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
                
            </div>
        
        </BrowserRouter>
    )
}