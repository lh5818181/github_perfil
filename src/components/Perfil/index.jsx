import './perfil.css'

const perfil = (props) => {
    const usuario = {
        nome: 'Luis henrique',
        avatar: 'https://github.com/lh5818181.png'
    }

    return (
        <div>
            {JSON.stringify(props)}
            <img className="perfil-avatar" src={props.endereco} alt="" />
            <h3 className="perfil-titulo">{props.nome}</h3>
        </div>
    )
}

export default perfil;