import React from 'react';
import './newArrivalSection.css';
import Card from './cards/card';
import images from '../../assets/images';
import arrival1 from '../../assets/images/collection/arrivals2.png';
import arrival2 from '../../assets/images/collection/arrivals3.png';
import arrival3 from '../../assets/images/collection/arrivals4.png';
import arrival4 from '../../assets/images/collection/arrivals5.png';
import arrival5 from '../../assets/images/collection/arrivals6.png';
import arrival6 from '../../assets/images/collection/arrivals6.png';
import arrival7 from '../../assets/images/collection/arrivals7.png';
import arrival8 from '../../assets/images/collection/arrivals8.png';



const NewArrivalSection = () => {

  const imagesCard = [{id:1,images:'../../../assets/images/collection/arrivals2.png'},
    {id:2,images:'../../../assets/images/collection/arrivals2.png'},
    {id:3,images:'../../../assets/images/collection/arrivals3.png'},
    {id:4,images:'../../../assets/images/collection/arrivals4.png'},
    {id:5,images:'../../../assets/images/collection/arrivals5.png'},
    {id:6,images:'../../../assets/images/collection/arrivals6.png'},
    {id:7,images:'../../../assets/images/collection/arrivals7.png'},
    {id:8,images:'../../../assets/images/collection/arrivals8.png'}
    ]
  return (
    <div className='newArrival__container section_padding'>
        <h2 className='newArrival__container-title'>New Arrivals</h2>
        <div className='newArrival-container-card__section'>
          {imagesCard.map((item)=><Card key={item.id} imgs={item}></Card>)}
        </div>
    </div>
  )
}


export default NewArrivalSection
