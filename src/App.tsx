import { Link } from "react-router";

function App() {
    return (
		<>
			<h1 className="text-5xl text-center font-bold">Método de Newton e Newton Modificado</h1>
			<h4 className="text-xl text-center">Otimização não linear</h4>
			<Link
				to="/parametros"
				className="flex justify-center w-68 text-2xl bg-gray-800 disabled:bg-zinc-300 cursor-pointer dark:disabled:bg-zinc-600 border-0 focus:bottom-0 hover:border-0 hover:opacity-95 focus:outline-none text-white font-semibold rounded transition-transform transform active:scale-95"
			>
				<div>Iniciar Otimização</div>
			</Link>
			
		</>
	);
}

export default App;
