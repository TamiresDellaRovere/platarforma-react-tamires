import { Button } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export function Perfil (){

    let params = useParams();
    let id = params.id; //id vem da rota, se na rota está :id aqui usa o id

    const perfil = usuarios.find(perfil =>{
        return perfil.id === parseInt(id);

    })

    return(
        <div className="perfil">
            <h1>
                Olá, {perfil.nome}
            </h1>
            <br />
            <p>
                Seja bem vindo ao seu perfil!
            </p>
            <br />
            <Button variant="dark" >
                <Link to="/">HOME</Link>
            </Button>
        </div>
    )
}