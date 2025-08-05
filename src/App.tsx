
import { useEffect, useState } from 'react';
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  const[items, setItems] = useState([]);

    useEffect(()=>{
      fetchItems();
    }, [])

    const fetchItems = async () =>{
        const response = await fetch("https://d300bac9d0381fcd.mokky.dev/items");
        const data = await response.json();
        console.log("data ", data)
        setItems(data)
    }

    const onAddToFavorite = async(item) =>{
      console.log("OBJ ", item);
      const obj = {
        parentId: item.id
      }
      
      try{
        const response = await fetch("https://d300bac9d0381fcd.mokky.dev/favorites",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj)
        })
      }catch(err){
        alert("Favorite ga qo'shishda xatolik yuz berdi!")
        console.log(err)
      }
    }
    
    console.log("ITEMS ", items)

  return (
    <div className='wrapper'>
      <Header />
      <Home 
        items={items} 
        onAddToFavorite={onAddToFavorite}
      /> 
    </div>
  )
}

export default App
