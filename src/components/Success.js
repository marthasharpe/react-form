import React from 'react'

//if all fields were completed, render success
//if not, render failure

export default function Success(props) {

    const state = props.values;

    if (Object.values(state).includes('')) {
        return (
            <div>
                <h1>Failure!</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Success!</h1>
                <p>Well done {state.firstName} {state.lastName}, {state.occupation} of {state.city}. You may pass.</p>
            </div>
        )
    }
}
