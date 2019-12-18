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
    const { i, x, y, rot, scale, trans, bind, data ,mouseenter,mouseleave } = this.props;
    const { name, age, distance, text, pics } = data[i];

    return (
      <animated.div 
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
            <Carousel >
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
            onMouseLeave={()=>this.props.mouseleave(this.props.i,"Like")}
            onMouseEnter={()=>this.props.mouseenter(this.props.i,"Like")}>Like</button>
          <button className="cardBtnDislike" 
          onMouseLeave={()=>this.props.mouseleave(this.props.i,"Dislike")}
          onMouseEnter={()=>this.props.mouseenter(this.props.i,"Dislike")}>Dislike</button>
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
