import './Products.css'
import {AiFillStar} from 'react-icons/ai'
import {BsBagHeartFill} from "react-icons/bs";
import Card from '../components/card'

function Products({result}) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  )
}
export default Products;