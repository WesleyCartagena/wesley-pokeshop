import './index.scss';
import { useEffect,useState } from 'react'
import Card from '../Card/Card'
import { Alert } from 'react-bootstrap';
import PokeBanner from '../../assets/pokeshopbanner.png';
import PokeBannerUnder from '../../assets/PokemonBannerUnder.png';
import FeaturedPokemonBanner from '../../assets/featurepokemon.png';
import FeaturedPokemonBannerMobile from '../../assets/featurepokemonmobile.png';
import PokeShopBannerMobile from '../../assets/pokeshopbannermobile.png';

export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}
  
  export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

const Home = ({ cart, setCart }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [pokeData, setPokemonData] = useState([])

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const url = 'https://pokeapi.co/api/v2/pokemon'


    const calculatePrice = (stats) => {
        // Define weights for different stats
        const weights = {
            hp: 0.1,
            attack: 0.3,
            defense: 0.2,
            "special-attack": 0.3,
            "special-defense": 0.2,
            speed: 0.4
        };

        // Calculate the weighted sum
        const weightedSum = stats.reduce((sum, stat) => {
            return sum + (stat.base_stat * weights[stat.stat.name]);
        }, 0);

        const normalizedValue = weightedSum / 100; 

        const basePrice = 100;
        const price = basePrice + (normalizedValue * 50);

        return price;
    };


    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(url)
            const loadPokemon = async (data) => {
                let poke_Data = await Promise.all(data.map(async pokemon => {
                    let pokemonRecord = await getPokemon(pokemon)
                    const price = calculatePrice(pokemonRecord.stats);
                    pokemonRecord.price = price; // Set the price here
                    return pokemonRecord
                }))
                setPokemonData(poke_Data);
            }
            await loadPokemon(response.results);
        }
        fetchData();
    }, []); 

    const handleClick = (pokemon) => {      
        const existingPokemonIndex = cart.findIndex((item) => item.id === pokemon.id);
    
        if (existingPokemonIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingPokemonIndex].quantity++;
          setCart(updatedCart);
        } else {
          setCart([...cart, { ...pokemon, quantity: 1 }]);
        }
    };
    
    return(
       <>
            {isMobile ? (
                <div className="home-page-container-mobile">
                    <Alert className='banner-container'>
                        <img src={PokeBannerUnder} alt="Banner" className="banner-image" />
                        <img src={PokeShopBannerMobile} alt="Banner" className="banner-pokeshop-image-mobile" />
                    </Alert>
                    <div className='featured-pokemon-container'>
                        <img src={FeaturedPokemonBannerMobile} alt="featured-pokemon" className='featured-pokemon-banner'/>
                    </div>
                    <div className="featured-pokemon">
                        {pokeData.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon} handleClick={() => handleClick(pokemon)}/>
                        })}
                    </div>
                </div>
            ) : (
                <div className="home-page-container">
                    <Alert className='banner-container'>
                        <img src={PokeBannerUnder} alt="Banner" className="banner-image" />
                        <img src={PokeBanner} alt="Banner" className="banner-pokeshop-image"/>
                    </Alert>
                    <div className='featured-pokemon-container'>
                        <img src={FeaturedPokemonBanner} alt="featured-pokemon" className='featured-pokemon-banner'/>
                    </div>
                    <div className="featured-pokemon">
                        {pokeData.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon} handleClick={() => handleClick(pokemon)}/>
                        })}
                    </div>
                </div>
            )}
        </>
    );

}
export default Home