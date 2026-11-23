import React from 'react'

function Add(props) {
    let p = props.p;
    let q = props.q;
    let add = p+q;
  return (
    <div style={{margin:'100px', padding:'50px', border:'2px solid black'}}>
      <h3>The addition of {p} and {q} is {add}.</h3>
    </div>
  )
}

export default Add
