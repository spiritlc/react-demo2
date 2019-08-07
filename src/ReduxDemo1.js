import React, { PureComponent } from 'react';
import store from './store'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        aa: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add(diff) {
            dispatch({
                type: 'add',
                diff
            })
        },
        changCount(type, diff = 5) {
            console.log(type, diff)
            dispatch(
                dispatch => {
                    setTimeout(() => {
                        dispatch({
                            type,
                            diff
                        })
                    }, 1000)
                }
            )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    function ReduxDemo(props) {
        console.log(props)
        return (
            <div>
                <p>{ store.getState().count }</p>
                <button onClick={() => props.changCount('add')}>+</button>
                <button onClick={ props.changCount.bind(null, 'min', 30)}>-</button>
            </div>
        )
    }
)
