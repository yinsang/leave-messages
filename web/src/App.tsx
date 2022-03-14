import { useEffect } from "react"
import { getLeveMessageList } from "./api"

export const App = () => {
  const getList = async () => {
    const list = await getLeveMessageList();
    console.log(list);

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
      <input type="button" value='发布留言' />
      <ul>

      </ul>
    </div>
  )
}