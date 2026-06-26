
export function Pokemon() {


  return (
<main>
    <div className="flex flex-auto justify-between bg-linear-to-r from-red-500 to-yellow-500 p-7 ">
            <div className="text-white , font-bold , text-2xl ">
                <h1>Pokédex</h1>
            </div>

            <div className="flex p-1 gap-4 text-white cursor-pointer">
                <h1>Home</h1>
                <h1>Pokemons</h1>
                <h1>Tipos</h1>
            </div>

            <input type="text" placeholder="Buscar Pokémon" className="rounded-lg p-1 text-black bg-slate-200 opacity-75"/>
    </div>

    <div className=" m-4 mx-auto flex w-355 flex-col gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">    
            <div>
                <div className="flex justify-center text-xl text-black dark:text-white font-bold">Tipos de Pokémon</div>
                    <p className="flex justify-center text-gray-600  ">Conheça os principais tipos e suas características</p>
            </div>
        </div>

      
    </main>
  );
}
