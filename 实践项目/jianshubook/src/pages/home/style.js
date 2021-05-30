import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`

export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:640px;
  float:left;
  .banner-img{
    width:640px;
    height:270px;
    border-radius:20px;
  }
`

export const HomeRight = styled.div`
  width:280px;
  float:right;

`
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-11px;
  border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  heigth:32px;
  padding-right:5px;
  margin-left:10px;
  line-heigth:32px;
  float:left;
  backgound:#f7f7f7;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  margin-bottom:18px;
  
  .item-img{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:5px;
    
  }
`

export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:120px;
    float:right;
    border-radius:10px;
    top:15px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`

export const ListIcon = styled.div`
  clear:both;
  font-size:13px;
  .iconfont{
    padding:5px 30px;
  }
  .love{
    color:red;
  }
  .pinglun{
    color:orange;
  }
  .zan{
    color:purple;
  }
`
export const RecommendWrapper = styled.div`
  margin:30px 0;
  width:280px;
`
export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
`
export const WriterWrapper = styled.div`
  width:278px;
  border:1px solid #dcdcdc;
  border-radius:8px;
  height:300px;
  overflow:hidden;
  
`
export const WriterList = styled.div`
  width:278px;
  height:50px;
  padding:10px 5px;
  .write-img{
    width:40px;
    height:40px;
    border-radius:20px;
    float:left;
    
  }
  .iconfont{
    float:right;
    display:block;
    color:red;
    left:20px;
  }

`

export const WriterItem = styled.div`
  width:200px;
  float:right;
  margin-left:5px;
  font-size:12px;
  h2{
    font-size:12px;
    color:#333;
  }
`

export const LoadMore = styled.div`
  width:100%;
  height:40px;
  margin:30px 0;
  line-height:40px;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  cursor:pointer;
`
export const BackTop = styled.div`
  position:fixed;
  right:30px;
  bottom:30px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  font-size:14px;
  border:1px solid #ccc;
  border-radius:30px;
  cursor:pointer;
  background:#ea6f5a;

`
