import Titulo from '../titulo/Titulo'
import './ErrorComponente.css'

export default function ErrorComponente (){
    return(
        <>
            <div className='ErrorComponente'>
                <Titulo titulo ="404"/>
                <p>Estoy en error</p>
            </div>
        </>
    )
}