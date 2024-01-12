import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Category from "./Category";
import axios from "axios"
import { useEffect, useState } from "react"

const CategoryNav = ({onCategoryClick}) => {

  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(3)
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)

  const getCategories = () => {
    axios
      .get('http://localhost:3001/categories')
      .then((res) => {
        setCategories(res.data)
        console.log(res.data)
        setPrev(false)
        setNext(res.data.length > pageCount)
      })
    // 왜 두번 호출되는거지...
  }

  const leftCategories = () => {
    const newPage = page - 1
    if (newPage <= 0) {
      setPage(1)
    } else {
      setPage(newPage)
    }
    
    setNext(newPage * pageCount <= categories.length)
    setPrev(newPage > 1)
  }

  const rightCategories = () => {
    const newPage = page + 1
    if ((newPage - 1) * pageCount >= categories.length) {
      setPage(page)
    } else {
      setPage(newPage)
    }

    setNext(newPage * pageCount <= categories.length)
    setPrev(newPage > 1)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <div className="category-nav">
        <div className="category-arrow">
          {prev ? <SlArrowLeft onClick={leftCategories} /> : <></>}
        </div>
        <div className="category-body">
          <Category 
            categories={categories} 
            page={page} 
            pageCount={pageCount} 
            onCategoryClick={onCategoryClick}
          />
        </div>
        <div className="category-arrow">
          {next ? <SlArrowRight onClick={rightCategories} /> : <></>}
        </div>
      </div>
    </>
  )
}

export default CategoryNav