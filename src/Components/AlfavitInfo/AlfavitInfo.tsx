import React, { useEffect, useState } from 'react';
import './AlfavitInfo.css';
import { useParams, useNavigate } from 'react-router-dom';
import { IProduct } from '../../Types/Types';
import axios from 'axios';
import Alfavit from '../Alfavit/Alfavit';

const AlfavitInfo = () => {

  const [info, setInfo] = useState<IProduct[]>([])
  const navigate = useNavigate()
  const { meals } = useParams<{meals?: string}>();

  useEffect(() => {
    if (meals) {
      fetchInfoAlfavit(meals)
    }
  }, [meals])

  const infoCLick = (id: string, title: string) => {
    navigate(`/meal/${id}/${title}`)
  }

  const fetchInfoAlfavit = async (elem: string) => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${elem}`)
      const resData = res.data.meals
      setInfo(resData);
    } catch (error) {
      console.log(error)
    }
  }  

  return (
    <div className="container">
        <div className='contentx2'>
            {info ? info.map((elem, i) => (
                        <div key={i} onClick={() => infoCLick(elem.idMeal, elem.strMeal)} className='meal_contentx'>
                            <div className='imagesx'>
                                <img src={elem.strMealThumb} alt="" />
                            </div>
                            <p>{elem.strMeal}</p>
                        </div>
                    ))
             : (
                <h2 className='textx'>No meals ound</h2>
            )}
        </div>
        <div className='alfavitx'>
            <h2>Browes Meals</h2>
            <br/>
            <Alfavit/>
        </div>
    </div>
  )
}

export default AlfavitInfo
