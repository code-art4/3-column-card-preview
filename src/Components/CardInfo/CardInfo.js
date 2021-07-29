import React from 'react';
import Card from '../../UI/Card/Card';
import './CardInfo.css';

function CardInfo(props) {
  return (
    <React.Fragment>
        {props.contents.map((content) => {
        return (
        <Card className={content.key} key={content.key}>
            <figure>
            <img src={content.image} alt={content.title} />
          </figure>
          <h1>{content.title}</h1>
          <span>
            <p>
              {content.content}
            </p>

            <button href="#" className="btn">
              Learn More
            </button>
          </span>
        </Card>
        )
        
        })}
      </React.Fragment>
    );
}

export default CardInfo
