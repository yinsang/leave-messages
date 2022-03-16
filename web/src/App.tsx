import { useEffect, useState } from "react"
import { getLeveMessageList } from "./api"
import './App.css'
export const App = () => {
  const [list,setList] = useState(null)
  const [nickName,setNickName] = useState('')
  const [content,setContent] = useState('')
  const getList = async () => {
    const list = await getLeveMessageList();
    console.log(list);
    if(list){

      setList(list)
    }

  }
  const onNickNameChange  = (e)=>{
    setNickName(e.target.value)
  }
  const onTextChange  = (e)=>{
    setContent(e.target.value)
  }
  const submit  = async()=>{
    const res = await fetch('/api/message', {
      method:"post",
      data:{
        author: nickName,
        content
      }
    })
    console.log(res,'res');
  }
  
  
  useEffect(() => {
    getList()
  }, [])
  return (
    <div>
      <header>
        <h1>
          nodejs留言板
        </h1>
      </header>
      <input type="text" placeholder="昵称" onChange={onNickNameChange} />
      <textarea name="" id="" cols="30" rows="10" onChange={onTextChange}></textarea>
      <input type="button" value='发布留言' onClick={submit} />
      <ul>
{
  list&&
  list.map(({author, content})=>(
    <li>
      <div className="author">{author}</div>
      <div className="content">{content}</div>
    </li>
  ))
}
      </ul>
    </div>
  )
}