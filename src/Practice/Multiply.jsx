import React from 'react'
import Add from './Add';

function Multiply({a,b,name}) {
    // let a = props.a;
    // let b = props.b;
    // let n = props.name;

    // let {a,b,name} = props;

    let mult = a*b;
  return (
    <div>
        <h1>Hello {name}..!!</h1>
        <h2>The Multiplication of {a} and {b} is {mult}.</h2>
        <Add p={23} q={34} />
    </div>
  )
}

export default Multiply
