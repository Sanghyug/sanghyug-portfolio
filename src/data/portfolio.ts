// src/data/portfolioData.ts

export const profileData = {
  name: "박상혁",
  englishName: "Sanghyug Park",
  title: "AI-NATIVE BUILDER",
  subtitle: "From Zero to Builder in 8 Months",
  mainHook: "AI와 함께 기획하고, 설계하고, 직접 구현한 제품 포트폴리오",
  email: "airtory@naver.com",
  phone: "010-2208-2347",
  aboutMe: [
    {
      step: "01",
      role: "Creator",
      title: "책을 만들고, 창의적인 이야기를 짓던 사람",
      desc: "기업의 역사책(현대모비스 30년사, S-oil 50년사 등)을 만들며 기획하고 글을 쓰던 일을 12년간 했습니다."
    },
    {
      step: "02",
      role: "Founder",
      title: "제조업 창업을 통해 제품 개발과 실제 사업 운영을 경험",
      desc: "유모차 공기청정기 아이디어로 제조업 분야에서 창업을 경험했습니다. 재고, 금형, 외주 개발, 생산 리스크는 저에게 중요한 전환점이 되었습니다."
    },
    {
      step: "03",
      role: "Builder",
      title: "AI와 함께 앱, 게임, 플랫폼 MVP를 직접 구현하는 사람",
      desc: "최근 저는 AI Agent와 함께 기획, UX 설계, 개발, 특허, 사업화까지 직접 실행하는 방식으로 피봇했습니다. 제품을 상상만 하지 않고 AI와 함께 직접 만듭니다."
    }
  ],
  aiWorkflow: [
    { num: "01", role: "기획자 에이전트", detail: "시장의 Pain Point 정의, 사용자 흐름(User Flow) 설계, MVP 기능 범위 획정" },
    { num: "02", role: "풀스택 개발자 에이전트", detail: "Flutter/React 코드 아키텍처 설계, Firebase 및 백엔드 인프라 구축, 알고리즘 구현" },
    { num: "03", role: "하이퍼 디버거 에이전트", detail: "빌드/타입/클라우드 배포 오류 추적, 모바일 WebView 및 PWA 환경별 이슈 실시간 대응" },
    { num: "04", role: "UI/UX 디자이너 에이전트", detail: "컴포넌트 화면 구성 가이드, 게임 캐릭터 에셋 기획, 요리 카드·마케팅 리워드 디자인 조율" },
    { num: "05", role: "사업전략 에이전트", detail: "비즈니스 모델 정교화, 정부 지원 사업계획서 공략 문항 정리, 투자 유치용 피치덱 구성" },
    { num: "06", role: "특허출원 에이전트", detail: "AI와 명세서를 작성해 직접 출원. '특허로' 온라인 접수와 70% 감면을 활용해 낮은 비용으로 특허출원" }
  ]
};

export const projectsData = [
  {
    id: "01",
    title: "나의 달 (myMoon)",
    type: "3D 웹앱 / 감성 콘텐츠",
    stage: "발행 가능 단계",
    role: "기획 · UX · 구현 · 백엔드",
    tags: ["3D Web App", "Moon Phase", "Emotional UX", "Backend Admin"],
    desc: "달에 대한 오해를 풀고, 오늘의 달을 감성적으로 관측하게 하는 3D 웹앱입니다. 내가 태어난 날의 달이 전하는 메시지와 달의 위상 기반 오늘의 운세를 제공합니다.",
    youtubeId: "4HMGJysskHU",

    slug: "mymoon",
    icon: "/projects/mymoon/icon.png",
    screens: [
      "/projects/mymoon/screen1.jpg",
      "/projects/mymoon/screen2.jpg",
      "/projects/mymoon/screen3.jpg",
    ],
    screenType: "portrait",
  },
  {
    id: "02",
    title: "스핀고 (SpinGo)",
    type: "물리 기반 캐주얼 게임",
    stage: "발행 가능 단계",
    role: "기획 · 게임 로직 구현",
    tags: ["Flutter", "Flame Game Engine", "Physics Interaction", "Casual Game"],
    desc: "스마트폰 터치스크린의 스와이프 속도와 균형 감각으로 접시를 돌리는 물리 기반 캐주얼 게임입니다. 너무 느리면 떨어지고 강하면 튕겨 나가는 직관적 몰입감을 선사합니다.",
    youtubeId: "-7IIYf7Y_2M",

    slug: "spingo",
    icon: "/projects/spingo/icon.png",
    screens: [
      "/projects/spingo/screen1.jpg",
      "/projects/spingo/screen2.jpg",
      "/projects/spingo/screen3.jpg",
    ],
    screenType: "landscape",
  },
  {
    id: "03",
    title: "비트윈 (B'tween)",
    type: "AI 관계중재 솔루션",
    stage: "Phase 1 완성 (LLM 연계)",
    role: "AI Flow · UX · 백엔드 연동",
    tags: ["LLM Mediation Flow", "Emotional UX", "Firebase", "Cloud Run"],
    desc: "청소년 또래 관계 갈등을 예방·중재·회복하는 AI 기반 플랫폼입니다. 사건과 감정을 정리하고 공동 중재 대화를 통해 관계 보고서를 생성합니다. 토스 심사 대기 중입니다.",
    youtubeId: "XuWvK5Nwn3k",

    slug: "between",
    icon: "/projects/between/icon.png",
    screens: [
      "/projects/between/screen1.jpg",
      "/projects/between/screen2.jpg",
      "/projects/between/screen3.jpg",
    ],
    screenType: "portrait",
  },
  {
    id: "04",
    title: "비빔팡 (Bibimpang)",
    type: "K-Food 매치3 게임",
    stage: "불고기 MVP 완성",
    role: "기획 · 게임 로직 · 사업화",
    tags: ["Match3", "K-Food", "Reward Commerce", "O2O Marketing"],
    desc: "한식 양념을 퍼즐 타일로 활용해 자연스럽게 레시피를 학습하는 매치3 게임입니다. 완성 보상을 쿠폰 및 제품 구매로 연결하는 O2O 마케팅 플랫폼 구조입니다.",
    youtubeId: "opFPo7WVhQU",

    icon: "/projects/bibimpang/icon.png",
    slug: "bibimpang",

    screens: [
      "/projects/bibimpang/screen1.jpg",
      "/projects/bibimpang/screen2.jpg",
      "/projects/bibimpang/screen3.jpg",
    ],
  },
  {
    id: "05",
    title: "내짤4짤 (Naezzal4zzal)",
    type: "GIF 생성 웹앱",
    stage: "발행 가능 단계",
    role: "기획 · UX · 웹앱 구현",
    tags: ["PWA", "Image Processing", "GIF Generator", "Rapid MVP"],
    desc: "인생네컷 이미지를 불러와 네 장의 컷으로 자동 분리하고, 사용자가 보정한 뒤 움직이는 GIF로 변환해 주는 모바일 웹앱입니다. 1주일 만에 기획부터 배포까지 완료한 프로젝트입니다.",
    youtubeId: "Y3gz8kXnp_o",
    slug: "naezzal4zzal",

    icon: "/projects/naezzal4zzal/icon.png",

    screens: [
      "/projects/naezzal4zzal/screen1.jpg",
      "/projects/naezzal4zzal/screen2.jpg",
      "/projects/naezzal4zzal/screen3.jpg",
    ],
  }
];