import React, { useState } from 'react';

let showSex = true

const Example2 = () => {
    const [age, setAge] = useState(18);
    
    const [sex, setSex] = useState('nan');
    
    const [work, setWork] = useState('net');
    return(
        <div>
            <p>{age}</p>
            <p>{sex} </p>
            <p>{work}</p>
        </div>
    )
}
export default Example2