import { useEffect,useState } from "react";
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors/`;

function App() {
  // Get the existing item from the server
  const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop
  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch(API_URI)
        const data =await res.json()
        // console.log(data)
        setItems(data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[])
  console.log(items)

  return <ItemList items = {items} api = {API_URI} setItem = {setItems}/> ;
}

export default App;
