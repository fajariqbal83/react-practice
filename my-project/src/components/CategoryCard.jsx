import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  return (
   <Link to={`/category/${category.slug}`}>
<div>
  <h3>{category.name}</h3>
</div>
   </Link>
  )
}

export default CategoryCard
