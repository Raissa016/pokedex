
export function Tipos() {


  return (
    <main  className="bg-linear-to-r from-yellow-300 to-pink-200">
      
     
    <div className= " bg-red-600 justify-center" >  
      <h1 className="aling-text-top text-white text-font-bold p-1 flex">Pokédex</h1>                                  
      <h1 className="aling-text-top  text-white justify-self-end">Home Pokemons tipos </h1>
      
    </div>
    <div>
    <p className = " m-4 p-4 box-border text-2xl font-bold border-radius bg-amber-100 text-center text-black grid align-text-top ">Tipos de Pokémons</p>
      <h1 className="  box-sizing bg-amber-100 box-border border-radius flex-direction justify-self-center">Conheça os principais tipos e suas características</h1>
    </div>

    <div>
      <div className="grid-cols-4 gap-4 flex self-auto">
     <h1 className="  w-40 border-radius col-start gap-20px justify-flex-between p-10 inline-block content-between-gap-20 flex-items-stretch box-content   size-32 bg-yellow-400 rounded-lg rounded-l-lg px-6 ">Elétrico
      <h1 className="flex-wrap"> Pokémons rápidos que usam ataques de eletrecidade</h1>
       <button className="aling-text   bg-amber-500 box-content py-2 px-4 bg-yellow-281 shadow-xl/30 ">Ex:pikachu </button>
       
    </h1>
    <h1 className=" justify-between p-12 inline-block content-between-gap-20 flex-items-stretch box-content  aling-text-top  size-32 bg-green-400 rounded-lg rounded-l-lg px-6 ">Planta
    <h1 className="flex-wrap">Usam energia da natureza,folhas, vinhas e sementes </h1>
    <button className="aling-text  box-content py-2 px-4 bg-green-281 shadow-xl/30  ">Ex: Bulbesaur</button>
    
    </h1>
    
     <div>
    <h1 className=" justify-between p-12 inline-block content-between-gap-20 flex-items-stretch box-content  aling-text-top  size-32 bg-red-400 rounded-lg rounded-l-lg px-6 ">Fogo
    <h1 className="flex-wrap">Possuem ataques quentes, intensos e explosivos</h1>
    <button className="aling-text  box-content py-2 px-4 bg-red-281 shadow-xl/30  ">Ex: Charmander</button>
    
    </h1>
    </div>
     <div>
    <h1 className=" justify-between p-12 inline-block content-between-gap-20 flex-items-stretch box-content  aling-text-top  size-32 bg-blue-400 rounded-lg rounded-l-lg px-6 ">Agua</h1>
    <h1 className="flex-wrap">São versáteis e usam jatos de água em batalha</h1>
    <button className="aling-text  box-content py-2 px-4 bg-blue-281 shadow-xl/30  ">Ex: Squirtle</button>
   

    </div>
    </div>
    </div>


<div className="grid-cols-4 gap-4 flex self-auto">   
<div>
 <h1 className="  w-40 border-radius col-start gap-20px justify-flex-between p-10 inline-block content-between-gap-20 flex-items-stretch box-content  size-32 bg-blue-200 rounded-lg rounded-l-lg px-6 ">Gelo</h1>
      <h1 className="flex-wrap"> Usam frio, neve e congelamento contra seus oponentes</h1>
       <button className="aling-text  bg-blue-500 box-content py-2 px-4 bg-blue-281 shadow-xl/30 ">Ex:Lapras </button>
    </div>
   
   <div>
<h1 className="  w-40 border-radius col-start gap-20px justify-flex-between p-10 inline-block content-between-gap-20 flex-items-stretch box-content   size-32 bg-amber-800 rounded-lg rounded-l-lg px-6 ">Pedra</h1>
      <h1 className="flex-wrap"> São resistentes e possuem grande força defensiva</h1>
       <button className=" bg-amber-900 box-content py-2 px-4 bg-blue-281 shadow-xl/30 justify-self-center ">Ex:Onix </button>
    </div>
   
<div>
<h1 className="  w-40 border-radius col-start gap-20px justify-flex-between p-10 inline-block content-between-gap-20 flex-items-stretch box-content   size-32 bg-pink-300 rounded-lg rounded-l-lg px-6 ">Psíquico</h1>
      <h1 className="flex-wrap text-center"> Usam poderes mentais, telecinese e energia psíquica</h1>
       <button className=" bg-pink-600 box-content py-2 px-4 bg-blue-281 shadow-xl/30 justify-self-center ">Ex:Mewtwo </button>
    </div>


<div>
<h1 className="  w-40 gap-20px justify-flex-between p-10  flex-items-stretch box-content size-32 bg-fuchsia-300 rounded-lg rounded-l-lg px-6 ">Fantasma</h1>
      <h1 className="text-sm"> Misteriosos, assustarores e dificeis de atingir</h1>
       <button className=" aling-text bg-fuchsia-600 box-content py-2 px-4 bg-blue-281 shadow-xl/30  ">Ex:Gengar </button>
    </div>
</div>



    </main>
  );
}
