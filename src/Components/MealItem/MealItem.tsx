// MealItem.tsx
import React, { FC, useState } from 'react';
import { IProduct } from '../../Types/Types';
import { useNavigate, useParams } from 'react-router-dom';
import './MealItem.css'

interface MealItemProps {
  item: IProduct;
  width?: string;
  height?: string;
}


const MealItem: FC<MealItemProps> = ({ item, width, height }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/meal/${item.idMeal}/${item.strMeal}`)
  }

  return (
    <div key={item.idMeal} style={{width, height}} className='meal_content'>
        <div className="meal_img">
          <img src={item.strMealThumb} alt={item.strMeal} />
        </div>
      <p onClick={handleClick}>{item.strMeal}</p>
    </div>
  );
}

export default MealItem;
