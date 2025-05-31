import Button from "@/components/Forms/Button";
import Graph from "@/components/Graph";

export default function Result(){


	return (
		<div className="w-full">
			<h1 className="text-5xl text-center font-bold">
                Resultados
            </h1>

			<section className="mt-2 grid grid-cols-2 gap-2 justify-items-center">

				<Graph className="w-2/3 h-76"/>
				<Graph className="w-2/3 h-76"/>
				<Button
					type="submit"
					className={{ button: "w-56" }}
				>
					Exportar Resultados
				</Button>
			</section>

			<section className="mt-2 grid grid-cols-3 justify-items-center">

				<Graph className="w-4/5 h-76"/>
				<Graph className="w-4/5 h-76"/>
				<Graph className="w-4/5 h-76"/>
			</section>
		</div>
	)
}