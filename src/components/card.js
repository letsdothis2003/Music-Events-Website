import {AiFillStar} from 'react-icons/ai'
import {BsBagHeartFill} from "react-icons/bs";

function card({id, month, venue, artist, mevent, type, price, image}) {
  return (
    <section className="card">
        <img src={image}
        alt={mevent + " " + type}
        className='card-image'/>
        <div className = "card-details">
          <h3 className="card-title">{mevent + " " + type}</h3>
          <section className="card-reviews">
            <span className="total-reviews"></span>
          </section>
          <section className="card-price">
            <div className="price">
              {"$"+price}
            </div>
            <div className="bag">
              <BsBagHeartFill className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>

  )
}
export default card