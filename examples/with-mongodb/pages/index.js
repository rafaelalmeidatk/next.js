import Head from 'next/head'
// import pets from '../seed/Pet-seeder'

export default function Home({pets}) {
  return (
    <div>
      <h1>Pet Care</h1>
      <div className="pet-card"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Charlie_April_2020.jpg/588px-Charlie_April_2020.jpg"></img>
        <div>
          <h3>name: Charlie</h3>
          <p>owner name: Michelle</p>
        </div>  
        <p>species: Dog</p>
        <p>age: 9</p>
        <p>poddy_trained: yes</p>
        <p>diet: "Sweet Potato", "Rabbit & Potato dry food", "Melon", "Carrots",</p>
        <p>likes: "Cuddling in the morning", "New places to pee", "Going to pet stores", "Sunbathing"</p>
        <p>dislikes: "Not being greeted", "Watching others eat", "Oral medication", "Showers", "Brushing his teeth","Cuddling at night"</p>
        
      </div>


    </div>  
  )
}
