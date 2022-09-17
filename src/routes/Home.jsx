import { useEffect, useState } from "react";

const Home = () => {
  
  const coso = [
    {
      title: "title1",
      image: "images1",
      description: "description1",
    },
    {
      title: "title2",
      image: "images2",
      description: "description2",
    },
    {
      title: "title3",
      image: "images3",
      description: "description3",
    },

];
  
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();

  const [arregloInicio, setArregloInicio] = useState([]);
  const [arregloDiscard, setArregloDiscard] = useState([]);




  useEffect(() => {
    setArregloInicio(coso)
  },[])




  const handleclick = (arreglo) => {
    if(arreglo.length <= 0 ){
      setArregloInicio(arregloDiscard)
      setArregloDiscard([])

 
    }else{

      const rand = Math.floor(Math.random()*arreglo.length);
      const laVaina = arreglo[rand] 
      const {title, image, description} = laVaina
      setTitle(title)
      setImage(image)
      setDescription(description)
      setArregloDiscard([laVaina, ...arregloDiscard])
      const arregloFilter = arreglo.filter(carta => carta != laVaina)
      setArregloInicio(arregloFilter)

    }
     

  };


  

  return (
    <>
      <button onClick={() => handleclick(arregloInicio)}>Clickme</button>

          <div>
            <p>{title}</p>
            <p>{image}</p>
            <p>{description}</p>
          </div>
        
      
    </>
  );
};

export default Home;

