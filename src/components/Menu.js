import axios from "axios"
import { useEffect, useState } from "react"

const Menu = ({categoryId}) => {

  const [menu, setMenu] = useState([])

  const getMenuByCategoryId = (id) => {
    axios
      .get(`http://localhost:3001/menu?categoryId=${id}`)
      .then((res) => {
        setMenu(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getMenuByCategoryId(categoryId)
  }, [categoryId])

  return (
    <>
      <div className="menu-body">
        <div>{categoryId}번 카테고리에 대한 메뉴</div>
        <div>
        {
          menu.map((m) => {
            return <div key={m.id} className="menu">{m.title}</div>
          })
        }
        </div>
      </div>
    </>

  )
}

export default Menu