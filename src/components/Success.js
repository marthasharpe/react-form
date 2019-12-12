import React from 'react'

//if all fields were completed, render success
//if not, render failure

export default function Success(props) {
    return (
        <div>
            <h1>Success!</h1>
            <p>Well done {props.values.firstName} {props.values.lastName}, {props.values.occupation} of {props.values.city}. You may pass.</p>
        </div>
    )
}
