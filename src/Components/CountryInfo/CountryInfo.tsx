import React, {useEffect, useState} from 'react'
import './CountryInfo.css'
import { useParams, useNavigate } from 'react-router-dom';
import { IProduct } from '../../Types/Types';
import axios from 'axios';

const CountryInfo = () => {

    const [info, setInfo] = useState<IProduct[]>([])
    const navigate = useNavigate();
    const { title } = useParams<{ title?: string }>();

    useEffect(() => {
        if(title){
            fetchInfoCountry(title)
        }
      }, [title])

    const handleInfo = (id: string, title: string) => {
        navigate(`/meal/${id}/${title}`)
    }

    const fetchInfoCountry = async (elem: string) => {
        try {
          const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${elem}`)
          const resData = res.data.meals
          setInfo(resData);
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className='container'>
      <div className='content_2'>
        {info.map((elem, i) => (
                <div onClick={() => handleInfo(elem.idMeal, elem.strMeal)} key={i} className='itemx'>
                    <div className='imgx' >
                        <img src={elem.strMealThumb} alt="" />
                    </div>
                    <p>{elem.strMeal}</p>
                </div>
            ))}
      </div>
    </div>
  )
}

export default CountryInfo
