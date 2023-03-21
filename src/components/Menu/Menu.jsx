import { Link } from "react-router-dom";

export function Menu() {

    return (
        <div className="menuS">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </div>
    )
}