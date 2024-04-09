import React, { FC } from 'react';
import './PopularIngredients.css'

interface PopularProps {
    strIngredient: string;
    onClick: () => void;
}

const PopularIngredients: FC<PopularProps> = ({strIngredient, onClick}) => {
  return (
    <div onClick={onClick} className='content_item'>
      <img src={`https://www.themealdb.com/images/ingredients/${strIngredient}.png`}  alt="" />
      <p>{strIngredient}</p>
    </div>
  )
}

export default PopularIngredients
