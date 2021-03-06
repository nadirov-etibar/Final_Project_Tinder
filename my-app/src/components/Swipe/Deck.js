import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";

import Card from "./Card";
import data from "../../data.js";

import "./styles/Deck.css";

const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(data.length, i => ({
    ...to(i),
    from: from(i)
  }));
  

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 400 : 500 }
        };
      });

      // if (!down && gone.size === data.length)
      //   setTimeout(() =>  set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <div>
      <Card
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={data}
      bind={bind}
      mousedown={(i)=>{
        let likes =document.querySelectorAll(`.messageLike`)
        let dislikes =document.querySelectorAll(`.messageDislike`)

        let deck =document.querySelectorAll(".deck")
        if(deck[i].style.transform[12]==="-"){
          likes[i].style.opacity="1"
          dislikes[i].style.opacity="0"
        }else if(parseInt(deck[i].style.transform[12])>0){
          likes[i].style.opacity="0"
          dislikes[i].style.opacity="1"
        }else if(parseInt(deck[i].style.transform[12])===0){
          dislikes[i].style.opacity="0"
          likes[i].style.opacity="0"
        }

      }}
      mouseenter={(a,b)=>{
        gone.add(a)
        console.log()
        let likes =document.querySelectorAll(`.messageLike`)
        let dislikes =document.querySelectorAll(`.messageDislike`)
let deck =document.querySelectorAll(".deck >div")
        
        if(b==="Like"){
          
        deck[i].classList.add("transformLeft")
          likes[a].classList.add("opacityOne")
          dislikes[a].classList.remove("opacityOne")
        }else{
          likes[a].classList.remove("opacityOne")
          dislikes[a].classList.add("opacityOne")
        }
      }}

    />
    
    </div>
    
  ))
}

export default Deck;
