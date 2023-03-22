import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export function EditaUsuario () {

    //useParams 

    let params = useParams();
    let id = params.id;

    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id); //purseInt transforma string em numero é igual o Number{}; // retorna valor booleano que satesfaça a perquisa
    });

    let navigate = useNavigate();
    function editar(){
        //Capturar as informações do formulário
        //Validar os dados de entrada
        //Modificar as informações no banco de dados
        navigate("/usuarios") // ele retorna para o elemento especificado; nesse caso vai retornar para a pagina usuários
    }

    return (
        <div className="edita-usuario" > 
            <h2>{usuario.nome}</h2>
            <span>E-mail: {usuario.email}</span>
            <br />
            <span>Idade: {usuario.idade}</span>
            <br />
            <Button onClick={editar} variant="dark">Editar</Button>
        </div>
    )
};