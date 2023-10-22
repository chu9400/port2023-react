import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";


export const headerNav = [
    {
        title : "intro",
        url : "#intro"
    },
    {
        title : "skill",
        url : "#skill"
    },
    {
        title : "site",
        url : "#site"
    },
    {
        title : "port",
        url : "#port"
    },
    {
        title : "contact",
        url : "#contact"
    },

];

export const introText = {
    title: "port developer",
    desc: ["talent is", "found at th end of the", "effort"],
}

export const skillText = [
    {
      title:"꿈을 설계하고 디자인하다.",
      desc:"나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다.단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다.나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다.그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다."
    },
    {
      title:"열심히 할수록 기회는 따른다.",
      desc:"운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
    },
    {
      title:"나에게 정직하다.",
      desc:"정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
    },
]

export const siteText = [
    {
        text: ["make", "site compliant with", "react.js"],
        title: "리액트를 이용한 사이트 제작",
        code: "https://github.com/chu9400/port2023-react",
        view: "https://chu9400-port2023-react.netlify.app/",
        info: [
            "site coding",
            "production period : three days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: ["make", "site compliant with", "vue.js"],
        title: "뷰를 이용한 사이트 제작",
        code: "https://github.com/chu9400/port2023-vue",
        view: "https://chu9400-port2023-vue.netlify.app/",
        info: [
            "site coding",
            "production period : three days",
            "use stack : HTML5/CSS3, Scss Variable, vue",
        ],
    },
    {
        text: ["make", "site compliant with", "next.js"],
        title: "넥스트를 이용한 사이트 제작",
        code: "https://github.com/chu9400/port2023-next",
        view: "https://chu9400-port2023-next.netlify.app/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, next.js",
        ],
    },
];
  
export const portText = [
  {
      num: "01",
      title: "웹 표준 및 접근성 기반의 첫 번째 포트폴리오",
      desc: "프론트를 도전하며 만든 첫 번째 포트폴리오입니다. 반응형으로 제작했으며 제작시 헤더 메뉴에 시간을 많이 투자했습니다. 각 section 마다 코드를 분리하여 작업 및 유지보수에 효율적입니다. 강조가 필요한 이미지는 Image 컴포넌트를 사용하여 lazy loading 및 layout shift를 방지했습니다.",
      img: port01,
      code: "https://github.com/chu9400/2023-tech_hub",
      view: "https://mytechhub2023.netlify.app/",
      name: "최한울 포트폴리오",
  },
  {
      num: "02",
      title: "REACT로 만든 포트폴리오",
      desc: "다양한 프레임 워크들을 학습하기 위해 같은 사이트를 다른 프레임 워크로 만드는 첫 번째 react 프로젝트입니다. lenis를 사용하여 스크롤의 움직임을 부드럽게 하고 gsap를 사용하여 가로 스크롤 기능을 개발했습니다.",
      img: port02,
      code: "https://github.com/chu9400/port2023-react",
      view: "https://chu9400-port2023-react.netlify.app/",
      name: "최한울 포트폴리오",
  },
  {
      num: "03",
      title: "VUE로 만든 포트폴리오",
      desc: "이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ",
      img: port03,
      code: "https://github.com/chu9400/port2023-vue",
      view: "https://chu9400-port2023-vue.netlify.app/",
      name: "최한울 포트폴리오",
  },
  {
      num: "04",
      title: "NEXT로 만든 포트폴리오",
      desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
      img: port04,
      code: "https://github.com/chu9400/port2023-next",
      view: "https://chu9400-port2023-react.netlify.app/",
      name: "최한울 포트폴리오",
  },
  {
      num: "05",
      title: "작업 예정",
      desc: "작업 예정",
      img: port05,
      code: "/",
      view: "/",
      name: "최한울 포트폴리오",
  },

];

export const contactText = [
  {
    link: "mailto:chu9400@naver.com",
    title: "mail : chu9400@naver.com",
  },
  {
    link: "https://velog.io/@chu9400",
    title: "velog : velog.io/@chu9400",
  },
];


export const footerText = [
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