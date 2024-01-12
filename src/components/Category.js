
const Category = ({categories, page, pageCount, onCategoryClick}) => {

  const _onCategoryClick = (e) => {
    onCategoryClick(e.target.getAttribute('cid'))
  }

  return (
        categories?.slice((page - 1) * pageCount, page * pageCount)?.map((category) => {
          return <span onClick={_onCategoryClick} className="category" key={category.id} cid={category.id}>{category.title}</span>
        })
  )
}

export default Category