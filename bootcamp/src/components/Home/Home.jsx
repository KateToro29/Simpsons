import './Home.css'
import Image from '../../image/Image1.avif'
import Titulo from '../titulo/Titulo'


export default function Home (){
    const estiloContenedor = {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ajusta según tu diseño
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'yelow',
        textAlign: 'center',
    };

    
    return(
        <>
         <div style={estiloContenedor}>
            <Titulo titulo="The Simpson"></Titulo>
        </div>
                        
        </>
    )
}
