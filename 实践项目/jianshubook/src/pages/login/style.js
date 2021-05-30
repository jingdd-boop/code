import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index:0;
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:56px;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
`
export const LoginBox = styled.div`
  width:300px;
  height:300px;
  margin:80px auto;
  background:#fff;
  padding-top:20px;
  box-shadow:0 0 8px rgba(0,0,0,.1);
  border-radius:15px;
`
export const LoginTitle = styled.div`
  font-size:20px;
  font-weight:blod;
  color:#ace0f9;
  text-align:center;
`

export const Input = styled.input`
 display:block;
  width:200px;
  height:35px;
  line-height:30px
  padding 0 10px;
  color:#333;
  margin:20px auto;
  border:none;
  border-bottom: 1px solid #000
  
`

export const Button = styled.div`
  width:220px;
  height:30px;
  line-height:30px
  color:#fff;
  margin:40px auto;
  text-align:center;
  border-radius:15px;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

`