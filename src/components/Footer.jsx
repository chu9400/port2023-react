import React from "react";

const footerText = [
  {
      title: "github",
      desc: "깃허브에 오시면 더 많은 소스를 볼 수 있습니다.",
      link: "https://github.com/chu9400",
  },
  {
      title: "velog",
      desc: "벨로그에 오시면 더 많은 정보를 볼 수 있습니다.",
      link: "https://velog.io/@chu9400",
  },
  {
      title: "react",
      desc: "이 사이트의 리액트 버전입니다.",
      link: "https://github.com/chu9400/port2023-react",
  },
  {
      title: "vue",
      desc: "이 사이트의 뷰 버전입니다.",
      link: "https://github.com/chu9400/port2023-vue",
  },
  {
      title: "next",
      desc: "이 사이트의 넥스트 버전입니다.",
      link: "https://github.com/chu9400/port2023-next",
  },
];

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>hanul's</div>
          <div>@webs</div>
        </h2>

        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">code view</a>
            </div>
            <p className="desc">이곳에서 소스 코드를 볼 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key)=>{
                return(
                  <li key={key}>
                    <a href={footer.link} target="_blank" rel="noreferrer noopener">{footer.title}</a>
                    <em>{footer.desc}</em>
                  </li>
                )
              })}
              
            </ul>
          </div>
        </div>
        <div className="footer__right">
          &copy; 2023 hanul's<br />

          이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  )
}

export default Footer