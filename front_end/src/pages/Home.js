import Gamestrip from '../components/Gamestrip.js'


const Home = () => {return(
    <>
        <Gamestrip 
            top_var='44.043%' 
            strip_color='linear-gradient(270deg, rgba(255, 163, 0, 0) 0%, #FD5F6D 50.28%, rgba(255, 163, 1, 0) 100%)' 
            game_name='Valorant' />
        <Gamestrip 
            top_var='71.387%' 
            strip_color='linear-gradient(270deg, rgba(255, 95, 106, 0) 0%, rgba(255, 163, 1, 0.8) 50.28%, rgba(254, 93, 108, 0) 100%)'
            game_name='Counter Strike'/>
    </>)}

export default Home;