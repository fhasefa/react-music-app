import Form from '../components/Form';
import Display from '../components/Display';

export default function Home({getSong, song}) {
    return(
        <div className='home'>
            <Form getSong={ getSong }/>
            {song &&<Display song={song}/>}
        </div>
    )
}