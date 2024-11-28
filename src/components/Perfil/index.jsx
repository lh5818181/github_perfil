import './perfil.css'

const perfil = () => {
    const usuario = {
        nome: 'Luis henrique',
        avatar: 'https://github.com/lh5818181.png'
    }

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} alt="" />
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}

export default perfil;