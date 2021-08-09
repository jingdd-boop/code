import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Index = () => {
    useEffect(() => {
        console.log('useEffect index 我来了')
        return () => {
            console.log('useEffect index 我走了')
        }
    }, [])
    return <h2>jing</h2>
}


const List = () => {
    useEffect(() => {
        console.log('useEffect list 我来了')
        return () => {
            console.log('useEffect list 我走了')
        }
    })
    return <h2>wang</h2>
}



const ExampleHook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect', count)
        return () => {
            console.log('============')
        }
    }, [count])
    return(
        <div>
            <p>click {count} time</p>
            <button onClick={() => { setCount(count + 1) }}>click</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}
export default ExampleHook