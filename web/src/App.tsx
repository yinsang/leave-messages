import { useEffect, useState } from "react"
import { getLeveMessageList } from "./api"
import './App.css'
export const App = () => {
  const [list,setList] = useState(null)
  const getList = async () => {
    const list = await getLeveMessageList();
    console.log(list);
    if(list){

      setList(list)
    }

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
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <input type="button" value='发布留言' />
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