import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { IIngredient } from '../../Types/Types'
import { useParams, useNavigate } from 'react-router-dom'
import './InfoIngredients.css'

const InfoIngredients: FC = () => {
    const [ingredients, setIngredients] = useState<IIngredient[]>([])
    const navigate = useNavigate()
    const { id } = useParams<{ id?: string }>() 

    useEffect(() => {
        if (id) {
            fetchIngredients(id)
        }
    }, [id]) 
    
    const fetchIngredients = async (elem: string) => {
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${elem}`)
            const resData = res.data.meals
            setIngredients(resData);
            
        } catch (error) {
            alert(error)
        }
    }

    const clickIngredient = (title: string) => {
        navigate(`/ingredient/${title}`)
      }

    return (
        <div className='container'>
            {ingredients.map((elem, i) => (
                            <div key={i} className='infoIngredients'>
                            <div className='title2'>
                                <h2>{elem.strMeal}</h2>
                                <h2>Ingredients</h2>
                            </div>
                            <div className='images'>
                                <div className='first_img'>
                                    <img src={elem.strMealThumb} alt="" />
                                    <a href={elem.strYoutube}>Watch Video You Tube  </a> 
                                </div>
                                <div className='second_img'>
                                    {
                                        elem.strIngredient1 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient1)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient1}.png`} alt="" />
                                                <p>{elem.strMeasure1} {elem.strIngredient1}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient2 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient2)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient2}.png`} alt="" />
                                                <p>{elem.strMeasure2} {elem.strIngredient2}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient3 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient3)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient3}.png`} alt="" />
                                                <p>{elem.strMeasure3} {elem.strIngredient3}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient4 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient4)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient4}.png`} alt="" />
                                                <p>{elem.strMeasure4} {elem.strIngredient4}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient5 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient5)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient5}.png`} alt="" />
                                                <p>{elem.strMeasure5} {elem.strIngredient5}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient6 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient6)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient6}.png`} alt="" />
                                                <p>{elem.strMeasure6} {elem.strIngredient6}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient7 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient7)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient7}.png`} alt="" />
                                                <p>{elem.strMeasure7} {elem.strIngredient7}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient8 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient8)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient8}.png`} alt="" />
                                                <p>{elem.strMeasure8} {elem.strIngredient8}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient9 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient9)}  >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient9}.png`} alt="" />
                                                <p>{elem.strMeasure9} {elem.strIngredient9}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient10 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient10)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient10}.png`} alt="" />
                                                <p>{elem.strMeasure10} {elem.strIngredient10}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient11 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient11)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient11}.png`} alt="" />
                                                <p>{elem.strMeasure11} {elem.strIngredient11}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient12 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient12)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient12}.png`} alt="" />
                                                <p>{elem.strMeasure12} {elem.strIngredient12}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient13 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient13)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient13}.png`} alt="" />
                                                <p>{elem.strMeasure13} {elem.strIngredient13}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient14 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient14)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient14}.png`} alt="" />
                                                <p>{elem.strMeasure14} {elem.strIngredient14}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient15 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient15)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient15}.png`} alt="" />
                                                <p>{elem.strMeasure15} {elem.strIngredient15}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient16 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient16)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient16}.png`} alt="" />
                                                <p>{elem.strMeasure16} {elem.strIngredient16}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient17 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient17)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient17}.png`} alt="" />
                                                <p>{elem.strMeasure17} {elem.strIngredient17}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient18 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient18)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient18}.png`} alt="" />
                                                <p>{elem.strMeasure18} {elem.strIngredient18}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient19 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient19)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient19}.png`} alt="" />
                                                <p>{elem.strMeasure19} {elem.strIngredient19}</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        elem.strIngredient20 ? (
                                            <div className='second_item'  onClick={() => clickIngredient(elem.strIngredient20)} >
                                                <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient20}.png`} alt="" />
                                                <p>{elem.strMeasure20} {elem.strIngredient20}</p>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                            <div className='instructions'>
                                <h3>Instructions</h3>
                                <p>{elem.strInstructions}</p>
                            </div>
                        </div>
            ))}
        </div>
    )
}

export default InfoIngredients
