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
    desc: ["talent is", "found at the end of the", "effort"],
}

export const skillText = [
    {
      title:"나만의 공간을 디자인하다.",
      desc:"어릴 적부터 시뮬레이션이나 꾸미는 게임을 주로 즐겼을 정도로 자신만의 공간을 만들어가는 과정에서 큰 흥미를 느꼈다. 누군가가 내가 만든 공간에서 영감을 받거나 마음이 움직인다면 매우 기쁠 것이다. 코딩을 통해 나만의 공간을 마음껏 만들 수 있는 것은 나에게 무척 매력적으로 다가오며, 앞으로도 계속 무언가를 창조하며 살고 싶다."
    },
    {
      title:"그럴 수 있다.",
      desc:"'그럴 수 있다'라는 말은 내가 자주 사용하는 말이다. 예전에는 내 입장에서만 생각하며 말과 행동을 자주 했었지만, 이 말을 사용하고 나서 포용성과 관용이 커지면서 삶이 더 여유로워졌다. 다른 사람이 나에게 무례하게 행동하더라도, 나는 이제 '그럴 수 있다'는 마음가짐으로 화를 내지 않고 넘어가는 경우도 많고, 주변 사람들로부터는 성격이 좋다는 이야기를 자주 듣게 되었다."
    },
    {
      title:"타인에게 친절하라.",
      desc:"'낯선 사람에게도 따뜻하게 대해줘라. 그 사람은 지나가는 천사일 수도 있다.' 라는 말은 내가 좋아하는 말 중에 하나다. 이 말처럼 세상을 살아가면 우리는 언제 어떤 도움을 주거나 받을지 전혀 예측할 수 없다. 어른들이 언제나 남에게 친절하라고 강조하는 이유가 여기에 있을 것 같다. 나 또한 다른 사람들에게 화를 내는 것보다는 친절함과 이해를 베풀고 싶고, 그렇게 행동하면서 항상 후회 없는 삶을 살고 싶다."
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
      title: "웹 표준 및 접근성 기반의 사이트",
      desc: "반응형 디자인을 적용하고 각 섹션마다 코드를 분리하여 작업하였기 때문에 웹사이트의 유지보수와 확장이 훨씬 효율적입니다. 또한, 웹 페이지의 성능 향상을 위해 이미지 컴포넌트를 사용하여 강조해야 하는 이미지의 lazy loading 및 layout shift를 방지했습니다. 이러한 접근 방식을 통해 웹사이트의 성능을 최적화하였습니다.",
      img: port01,
      code: "https://github.com/chu9400/2023-tech_hub",
      view: "https://mytechhub2023.netlify.app/",
      name: "최한울의 웹표준 포트폴리오",
  },
  {
      num: "02",
      title: "Wise-Sayings-GSAP",
      desc: "GSAP(GreenSock Animation Platform) 라이브러리를 활용하여 구축한 명언 모음 사이트입니다. 유명한 명언들이 나올 때마다 인터랙티브한 효과를 적용하여 사용자에게 의미를 더욱 명확하게 전달합니다. GSAP 라이브러리를 활용하면 명언의 중요성을 더 강조하고 전달하는 데 큰 도움이 되며, 사용자들은 이러한 명언을 훨씬 뚜렷하게 기억하게 될 것입니다.",
      img: port02,
      code: "https://github.com/chu9400/wise_sayings-gsap",
      view: "https://chu9400-wise-saying.netlify.app/",
      name: "최한울의 gsap 포트폴리오",
  },
  {
      num: "03",
      title: "인터렉티브 쇼핑몰 사이트",
      desc: "작업 중",
      img: port03,
      code: "/",
      view: "/",
      name: "최한울 포트폴리오",
  },
  {
      num: "04",
      title: "작업 예정",
      desc: "작업 예정",
      img: port04,
      code: "/",
      view: "/",
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