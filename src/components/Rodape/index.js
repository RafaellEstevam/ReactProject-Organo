import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape-organo'>
           <div className='midias-sociais'>
                <div>
                    <img src='./images/fb.png' alt='logo fb'/>
                </div>
                <div>
                    <img src='./images/tw.png' alt='logo tw'/>
                </div>
                <div>
                    <img src='./images/ig.png' alt='logo ig'/>
                </div>
           </div>
           <div className='logo-organo'>
                <img src='./images/logo.png' alt='logo organo'/>
           </div>
           <div className='criado-por'>
                <h4>Desenvolvido por Alura</h4>
           </div>
        </footer>
    )
}

export default Rodape;