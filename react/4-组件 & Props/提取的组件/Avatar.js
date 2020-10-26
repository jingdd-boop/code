//拆分前的组件
<img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
/>


//拆分后的组件
function Avatar(props) {
  return (
    <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
    />
  )
}


//引用
<Avatar user={props.author} />