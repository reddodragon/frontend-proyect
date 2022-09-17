import { useContext, useState } from "react"
import { UserContext } from "../Context/UseProvider";


const CRUDCard = () => {
  
  const { createCard } = useContext(UserContext);

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()


  const handleSubmit = async (e) => {
    e.preventDefault(e);
    try {
        await createCard(title, description, image)
        console.log('enviando carta')
    } catch (error) {
        console.log(error)
    }

}



  return (
    <>
    <div>
      <p>title:</p>
      <p>description:</p>
      <p>image:</p>
    </div>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Titulo" onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
      <input type="text" placeholder="URL" onChange={(e) => setImage(e.target.value)}/>
      <button type="submit">Crear</button>
    </form>
    </>
    
  )
}

export default CRUDCard