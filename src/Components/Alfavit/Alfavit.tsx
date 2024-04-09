import React from 'react';
import './Alfavit.css';
import { useNavigate } from 'react-router-dom';

const Alfavit = () => {
    const alfavit: string[] = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  
    const navigate = useNavigate()
  
    const infoClick = (title: string) => {
      navigate(`/alfavit/${title.toLowerCase()}`)
    }
  
    return (
      <div className='contentxx'>
        {alfavit.map((elem, i) => (
            <div key={i}>
              <h2 onClick={() => infoClick(elem)}>{elem}</h2>
              <span>/</span>
            </div>
          ))}
      </div>
    )
  }

export default Alfavit
