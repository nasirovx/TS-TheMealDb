// Home.tsx
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import MealItem from '../../Components/MealItem/MealItem';
import { useNavigate } from 'react-router-dom';
import Alfavit from '../../Components/Alfavit/Alfavit';
import PopularIngredients from '../../Components/PopularIngredients/PopularIngredients';
import { IProduct, IProductData, IPopular, ICountry } from '../../Types/Types';
import './Home.css'

const Home: FC = () => {
  const [product, setProduct] = useState<IProduct[]>([])
  const [popular, setPopular] = useState<IPopular[]>([])
  const [random, setRandom] = useState<IPopular[]>([])
  const [country, setCountry] = useState<ICountry[]>([])
  const [randomMeal, setRandomMeal] = useState<IProduct[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts()
    fetchRandomMeals()
    fetchPopular()
    fetchRandom()
    fetchCountry()
  }, [])

  const fetchRandomMeals = async () => {
    try {
      const random = [1,2,3,4,5,6,7,8];
      const responses = await Promise.all(
          random.map(() => axios.get<IProductData>('https://www.themealdb.com/api/json/v1/1/random.php')));
      const randomMealsData = responses.map((responses) => responses.data.meals[0]);
      setRandomMeal(randomMealsData)
    } catch (error) {
      console.log(error)
    }
  }
  
  const fetchProducts = async () => {
    try {
      const mealNumbers = [
        53083, 53082, 53081, 53080, 53079, 53078, 53077, 53076,
      ];
      const results = await Promise.all(
        mealNumbers.map(async (number) => {
          const result = await axios.get<IProductData>(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${number}`
          );
          return result.data.meals;
        })
      );
      setProduct(results.flat());
    } catch (e) {
      console.log(e)
    }
    console.log("products",product);
  };

  const fetchPopular = async () => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      const resData = res.data.meals
      setPopular(resData);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCountry = async () => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      const resData = res.data.meals
      setCountry(resData);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchRandom = async () => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      const allIngredients = res.data.meals;
      const randomIngredients = [];
      const numItems = 4;
      
      // Generate 4 random indices
      const randomIndices: number[] = [];
      while (randomIndices.length < numItems) {
        const randomIndex = Math.floor(Math.random() * allIngredients.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
          randomIngredients.push(allIngredients[randomIndex]);
        }
      }
      setRandom(randomIngredients);
    } catch (error) {
      console.log(error);
    }
  }
  

  const handlePopularMeal = (title: string) => {
    navigate(`/ingredient/${title}`)
  }

  const [input, setInput] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    setInput('');
  };

  const countryMeals = (title: string) => {
    navigate(`/meals/${title}`)
  }

  return (
    <section>
      <div className='container'>
        <div className='header'>
          <div className='img_right'>
            <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
          </div>
          <div className='header_content'>
            <h1>Welcome to TheMealDB</h1>
            <span>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</span>
            <span>We also offer a <span className='span'>free recipe API</span> for anyone wanting to use it, with additional features for subscribers.</span>
              <button>Pay<span>Pal</span></button>
              <span>Click button above to upgrade free API to premium for $3</span>
              <span>Currently (54 supporters)</span>
          </div>
          <div className='img_right '>
            <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
          </div>
        </div>
        <div className='home_search'>
        <form onSubmit={handleSubmit}>
          <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='  Search for a Meal...'/>
          </div>
          <div>
            <button type='submit'>
              
            </button>
          </div>
        </form>
        
        <div className='quantity'><img src="https://www.themealdb.com/images/icons/meal-icon6.png" alt="" /> Total Meals: 302  <img src="https://www.themealdb.com/images/icons/meal-icon4.png" alt="" />   Total Ingredients: 575  <img src="	https://www.themealdb.com/images/icons/image2.png" alt="" />Images: 302</div>
        </div>
        <div className="meal_item">
          <h3>Latest Meals</h3>
          <div className="meal_item_content">
            {product.map((item, i) => {return <MealItem width='280px' height='330px' key={i} item={item} />})}
          </div>
        </div>
        <div className="popular">
          <h3>Popular Ingredients</h3>
          <div className="popular_ingredients">
            {
              popular.map((elem, i) => {
                if(i < 4){
                  return <PopularIngredients key={i} {...elem} onClick={() => handlePopularMeal(elem.strIngredient)} />}
                })
            }
          </div>
        </div>
        <div className="meal_item">
          <h3>Random Meals</h3>
          <div className="meal_item_content">
            {randomMeal.map((item, i) => {return <MealItem width='280px' height='330px' key={i} item={item} />})}
          </div>
        </div>
        <div className="popular">
          <h3>Random Ingredients</h3>
          <div className="popular_ingredients">
            {
              random.map((elem, i) => {
                if(i < 4){
                  return <PopularIngredients key={i} {...elem} onClick={() => handlePopularMeal(elem.strIngredient)} />}
                })
            }
          </div>
        </div>
        <div className='country'>
            <h3>Browse Country</h3>
            <div className='country_meals'>
              {country.map((elem, i) => (
                    <div key={i} onClick={() => countryMeals(elem.strArea)} className='flags'>
                        <img src={`https://www.themealdb.com/images/icons/flags/big/64/${elem.strArea.substr(0, 2)}.png`} alt="" />
                    </div>
                ))}
            </div>
          </div>
          <div className='alfavit'>
            <h3>Browse By Name</h3>
            <div className='alfavit_content'>
              <Alfavit/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Home;
