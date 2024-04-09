import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IProduct, IProductData } from '../../Types/Types';
import axios from 'axios';
import './InfoMeals.css'
import { info } from 'console';

const InfoMeals = () => {

    const [infoIngredients, setInfoIngredients] = useState<IProduct[]>([])
    const navigate = useNavigate()
    const { title } = useParams<{ title?: string }>() 

    useEffect(() => {
        if (title) {
            fetchIngredients(title)
        }
    }, [title]) 
    
    const fetchIngredients = async (elem: string) => {
        try {
            const res = await axios.get<IProductData>(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${elem}`)
            const resData = res.data.meals
            console.log(resData);
            
            setInfoIngredients(resData);
            
        } catch (error) {
            alert(error)
        }
    }

    const clickMeal = (id: string, title: string) => {
        navigate(`/meal/${id}/${title}`)
      }

  return (
    <div className='container'>
      <div className='content'>
        <div className='title'>
          <h2>{title}</h2>
          <div className='content_title'>
            <img src={`https://www.themealdb.com/images/ingredients/${title}.png`} alt={title} />
          </div>
        </div>
        <div className='images_title'>
          <h2>Meals</h2>
          <div className='images'>
            {infoIngredients.map((elem, i) => (
                <div key={i} className='images_item'>
                  <div onClick={() => clickMeal(elem.idMeal, elem.strMeal)} className='item'>
                    <img  src={elem.strMealThumb} alt={elem.strMeal} />
                  </div>
                  <p>{elem.strMeal}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoMeals
