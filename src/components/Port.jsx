import React, { useEffect, useRef } from "react";
import {portText} from "../constants";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {

  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end : () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        markers: true,
      }
    });

    return () => {
      scrollTween.kill();
    };

  }, []);

  return (
    <section 
      id="port" 
      ref={horizontalRef} //전체 width 값
    >
      <div className="port__inner">
        <h2 className="port__title">
          portfolio <em>포폴 작업물</em>
        </h2>

        <div className="port__wrap">
          {portText.map((port, key)=>{
            return(
              <article 
                className={`port__item p${key + 1}`} 
                key={key}
                ref={(el) => (sectionRef.current[key] = el)} // 각 요소의 width값
              >
                <span className="num">{port.num}.</span>
                <a href={port.code} className="link" target="_blank" rel="noreferrer noopener">
                  <img src={port.img} alt={port.name} />
                </a>
                <h3 className="title">{port.title}</h3>
                <p className="desc">{port.desc}</p>
                <a href={port.view} className="site" target="_blank" rel="noreferrer noopener" >사이트 보기</a>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Port