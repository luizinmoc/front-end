import Button from "./components/Forms/Button";

function App() {
    return (
		<section className="w-2/5 mx-auto pt-36 h-full flex justify-center">
			<div className="flex flex-col items-center gap-5">
				<h1 className="text-5xl text-center font-bold">Método de Newton e Newton Modificado</h1>
				<h4 className="text-xl text-center">Otimização não linear</h4>
				<Button
					type="submit"
					className={{ button: "w-48 text-xl" }}
					size="md"
				>
					Iniciar Otimização
				</Button>
			</div>
			
		</section>
	);
}

export default App;
