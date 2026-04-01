import {Link} from 'react-router-dom'

function Header(){
    return(
        <header id="cabecalho">
          <nav className="navbar navbar-expand-lg bg-secondary-subtle">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Home</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="text-dark link-underline link-underline-opacity-0" to="/">Página Inicial</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="text-dark link-underline link-underline-opacity-0" to="/CriarAgendamento">Agendamentos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="text-dark link-underline link-underline-opacity-0" to="/CriarServico">Serviços</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header