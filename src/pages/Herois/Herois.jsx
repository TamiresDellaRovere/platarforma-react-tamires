import { useForm } from "react-hook-form"
import Alert from 'react-bootstrap/Alert';

export function Herois() {

    const { register, handleSubmit } = useForm();

    function onSubmitHerois(data) {
        
        let mensagem= 
        `
        Nome: ${data.nome}
        Poder: ${data.poder}
        Fraqueza: ${data.fraqueza}
        História: ${data.historia}
        `;
        alert(mensagem);
    }

    return (
        <div>
            <h1>Cadastro Herois</h1>
            <form onSubmit={handleSubmit(onSubmitHerois)} >
                <label htmlFor="nome">Nome: </label><br />
                <input type="text" id="nome" {...register("nome")} /><br />

                <label htmlFor="poder">Poder: </label><br />
                <input type="text" id="poder" {...register("poder")} /><br />

                <label htmlFor="fraqueza">Fraqueza: </label><br />
                <input type="text" id="fraqueza" {...register("fraqueza")} /><br />

                <label htmlFor="historia">História: </label><br />
                <textarea id="historia" cols="22" {...register("historia")} /><br />  {/* cols -> tamanho da caixa do textarea */}

                <button type="submit">Cadastrar: </button>
            </form>
        </div>
    )
}