import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
 
class Card extends React.Component {
  constructor(props){
    super(props);
    this.props =props
    
  }

 
  render() {
    const { i, x, y, rot, scale, trans, bind, data ,mouseenter,mousedown } = this.props;
    const { name, age, distance, text, pics } = data[i];

    return (
      <animated.div 
      onMouseMove={()=>this.props.mousedown(this.props.i)}
      className="deck"
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel 
            withoutControls = "true"
            wrapAround="false"
            >
              {pics.map((pic, index) => (
                <img src={pic} key={index} alt="profilePicture" />
              ))}
              
            </Carousel>
            <h2>{name},</h2>
            <h2>{age}</h2>
            <h5>{distance}</h5>
            <h5>{text}</h5>
            <span className="messageDislike">DISLIKE</span>
            <span className="messageLike">LIKE</span>
            <button className="cardBtnLike"  
           
            onMouseDown={()=>this.props.mouseenter(this.props.i,"Like")}>Like</button>
          <button className="cardBtnDislike" 
         
          onMouseDown={()=>this.props.mouseenter(this.props.i,"Dislike")}>Dislike</button>
          </div>
        </animated.div>
        
      </animated.div>
      
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
