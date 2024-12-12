import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import SideBar from './SideBar/SideBar';
import {useState} from 'react';
import Card from './components/card'

import merch from './db/data'

function App() {

  const[selectedCategory, setSelectedCategory] = useState(null)

  //Input Filter
  const[query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = merch.filter(merch => merch.artist.toLowerCase().indexOf(query.toLowerCase()!== -1));

  //Radio Filters
  
const handleChange = (event) =>{
  setSelectedCategory(event.target.value);
}
//Buttons
const handleClick = (event) => {
  setSelectedCategory(event.target.value);
};

function filteredData(merch, selected, query){
  let filteredMerch = merch

  //filter input
  if(query){
    filteredMerch = filteredItems
  }

  //selected
  if (selected){
    filteredMerch = filteredMerch.filter(
      ({type, price, mevent, month}) =>
        type === selected ||
        price === selected ||
        mevent === selected ||
        month === selected
      );
  }

  return filteredMerch.map(({id, month, venue, artist, mevent, type, price, image}) =>(
    <Card 
    key = {id}
    image = {image}
    month = {month}
    venue = {venue}
    artist = {artist}
    mevent = {mevent}
    type = {type}
    price = {price}
    />
  ));

};

const result = filteredData(merch, selectedCategory, query)
  
  return (
    <div>
      <SideBar handleChange={handleChange} />
      <Navigation query ={query} handleInputchange = {handleInputChange}/>
      <Products result = {result}/>
      
    </div>
  );
}

export default App;
