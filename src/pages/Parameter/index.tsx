import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";

export default function Parameter() {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">
                Parâmetros
            </h1>

            <form action="" className="mt-4">
                <div className="grid grid-rows-3 md:grid-rows-3 md:gap-4">
                    <Input
                        label="Função Objetivo"
                        type="text"
                        placeholder="Função Objetivo"
                        field="function"
                        apiField="function"
                        className={{ input: "bg-gray-200" }}
                    />

                    <Input
                        label="Ponto Incial"
                        type="text"
                        placeholder="Digite o Ponto Incial"
                        field="start"
                        apiField="start"
                        className={{ input: "bg-gray-200" }}
                    />

                    <Input
                        label="Critério de Parada"
                        type="text"
                        placeholder="Digite o Critério de Parada"
                        field="stop"
                        apiField="stop"
                        className={{ input: "bg-gray-200" }}
                    />
					<Button
						type="submit"
						className={{ button: "w-24" }}
					>
						Executar
					</Button>
                </div>
            </form>
        </div>
    );
}
