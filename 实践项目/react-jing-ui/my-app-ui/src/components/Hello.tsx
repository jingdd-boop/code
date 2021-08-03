import React from 'react'

interface IHelloProps {
    message?: string
}
// React.FC 类型别名
const Hello: React.FunctionComponent<IHelloProps> = (props) => {
    return <h2>{ props.message}</h2>
}
Hello.defaultProps = {
    message: "hello jing"
}

export default Hello