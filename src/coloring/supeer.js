//example for higher order component 
import React from 'react';
//wrapped here as whatever exported commponent
const Coloring = (WrappedComponent)=>{
    //we may make it as array =[] 
    const colour = 'green'
    //we can add a const with Math.random 
    //and make it as arrayname[nath . floor(mathRandom *num of elemnts in the array)] this one will take a int only with max
    
    
    const className = colour+'-text';

    return (props)=>{
        return(
            <div className={className}>
                {/*here we pass the props that we got in the call after being colored! */}
                <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default Coloring;