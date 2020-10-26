//拆分组件前
<div className="UserInfo">
    <Avatar user={props.user} />
    <div className="UserInfo-name">
        {props.user.name}
    </div>
</div>

//拆分组件后
function UserInfo(props) {
  return (
    <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">
              {props.user.name}
          </div>
    </div>
  )
}

//引用
<UserInfo user={props.author} />