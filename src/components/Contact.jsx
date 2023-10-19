import React from "react";

const contactText = [
  {
    link: "mailto:chu9400@naver.com",
    title: "mail : chu9400@naver.com",
  },
  {
    link: "https://velog.io/@chu9400",
    title: "velog : velog.io/@chu9400",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">contact</h2>
        <div className="contact__lines top" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="contact__text">
          <div className="text">

            {contactText.map((contact, key)=>{
              return(
                <div key={key}>
                  <a href={contact.link} target="_blank" rel="noreferrer noopener">{contact.title}</a>
                </div>
              ) 
            })}
            
            
          </div>
        </div>

        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

      </div>
    </section>
  )
}

export default Contact