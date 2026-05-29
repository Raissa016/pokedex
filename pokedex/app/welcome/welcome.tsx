
export function Welcome() {


  return (
    <main >
      
     
    <div>
      <div>
        <h1 className="bg-sky-500/10"></h1>
    
  
    <div className= " bg-red-600 justify-center" >  
      <h1 className="aling-text-top px-7">Pokédex</h1>                                  
      <h1 className="aling-text-top justify-self-end">Home Pokemons tipos </h1>
      </div>


  <div>
    <button className=" rounded-full box-content aling-text-top bg-gray-200/500  text-black font-bold py-2 px-4 rounded justify-self-end flex lg:w-390" >__________Buscar</button>
    
   </div>

    <div>
    
     <h1 className="gap-20px justify-flex-between p-10 inline-block content-between-gap-20 flex-items-stretch box-content  aling-text-top  size-32 bg-yellow-400 rounded-lg rounded-l-lg px-6 ">Pikachu
      <button className="aling-text  box-content py-2 px-4 bg-yellow-281 shadow-xl/30 ">elétrico </button>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-40 h-40 mx-auto mb-2" />
    </h1>

    <h1 className=" justify-between p-10 inline-block content-between-gap-20 flex-items-stretch box-content  aling-text-top  size-32 bg-green-400 rounded-lg rounded-l-lg px-6 ">bulbasaur
    <button className="aling-text  box-content py-2 px-4 bg-green-281 shadow-xl/30  ">planta</button>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-40 h-40 mx-auto mb-2" />

    </h1>

    <h1 className="    justify-between p-10  inline-block box-content  aling-text-top size-32  bg-red-400 m-0 rounded-r-lg  rounded-l-lg border-spacing-7px  px-6 ">Charmander
    <button className="aling-text  box-content py-2 px-4 bg-red-281 shadow-xl/30 ">fogo </button>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-40 h-40 mx-auto mb-2" />
    </h1>

    <h1 className="    justify-between p-10  inline-block box-content  aling-text-top size-32  bg-blue-400 m-0 rounded-lg  rounded-l-lg border-spacing-7px  px-6 ">Squirtle
    <button className="aling-text  box-content py-2 px-4 bg-blue-281 shadow-xl/30 ">água </button>
    </h1>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" className="w-40 h-40 mx-auto mb-2" />



    </div>
   
</div>
 

  </div>
  
     <div  className="flex bg-blue-900 justify-center p-3"> 
      <h1 className="justify-center text-white">Pokédex - React + Tailwind</h1>
    </div>
     
    
    
    </main>
  );
}
