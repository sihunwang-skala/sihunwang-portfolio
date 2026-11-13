const copy = {
  ko: {
    skip:"본문으로 이동", navExperience:"경력", navEducation:"학력", navProjects:"프로젝트", navSkills:"기술",
    summary:"Multi-Agent, Agentic AI, Agentic RAG, Tool Routing, LLM Evaluation을 설계하고 검증하여 실제 업무에 적용 가능한 AI Agent와 AX 서비스를 개발합니다.",
    viewExperience:"경력", viewEducation:"학력", viewProjects:"프로젝트", viewSkills:"기술",
    locationLabel:"위치", educationLabel:"학력", focusLabel:"관심 직무",
    experienceTitle:"경력", experienceSubtitle:"최신순",
    flitto1:"LG전자와 Olive Young 다국어 AI 번역 프로젝트에서 Fluency Agent를 개발하고 언어와 도메인별 Workflow Prompt를 최적화했습니다.",
    flitto2:"LLM 품질 평가 체계와 Benchmark 기준을 수립하고, 도메인 전문가 기반 HITL 검증 및 PoC 프로세스를 설계하고 운영해 외부 검수에서 97.5%의 무수정 통과율을 달성했습니다.",
    kdn1:"국세청 API 기반 납세 여부 확인과 국가 농업통계 조사에 필요한 외부 데이터 수집, 식별자 Mapping, 검증, Excel 처리를 Python으로 자동화했습니다.",
    kdn2:"API 조회 오류 보완, 예외 처리, 실행 로그를 구현해 약 3시간의 반복 업무를 최종 검증 10분 수준으로 단축했습니다.", kdn3:"카카오맵과 지도 좌표를 활용해 약 7,000필지의 농지 데이터를 Cafe24 웹사이트 지도에 시각화했습니다.",
    iea1:"고령자 개인 맞춤형 건강정보 Agent를 위해 건강정보 조회와 논문 검색을 선택하는 Tool Routing과 Agent Workflow를 설계했습니다.",
    iea2:"Hybrid Search 기반 Agentic RAG Pipeline과 Benchmark 비교 실험을 구현해 답변 품질 점수를 75.3%에서 91.5%로 개선했습니다.",
    ta1:"대학원생 대상 Federated Learning 강좌의 실습 4회와 프로그래밍 과제 3개의 설계, 출제, 채점을 담당했습니다.", ta2:"Machine Learning, Deep Learning, Federated Learning의 핵심 개념과 구현 예제를 설명하고 실습을 지도했습니다.",
    aibm1:"ANN(ML, DL) 모델의 구조와 Layer별 Parameter를 분석하고 최소 Parameter 구성으로 모델을 경량화해 성능을 비교했습니다.", aibm2:"경량화한 모델에 Federated Learning을 적용해 분산 데이터 환경에서의 학습 가능성을 확인하였습니다.", aibm3:"직접 초경량화한 CNN 모델은 연합학습 포럼에서 발표되었습니다.",
    officialSite:"공식 웹사이트", labPeople:"연구실 구성원", labSite:"연구실 웹사이트", khu:"경희대학교 빅데이터응용학과", khuDepartment:"경희대학교 빅데이터응용학과",
    educationTitle:"학력", rankingLabel:"U.S. News Graduate AI Ranking", rankingSummary:"미국 AI 분야 최상위권 대학", rankingLink:"U.S. News Best Artificial Intelligence Programs Ranking", googleRankingUrl:"https://www.google.com/search?q=%EC%9D%BC%EB%A6%AC%EB%85%B8%EC%9D%B4+%EB%8C%80%ED%95%99%EA%B5%90+%EC%96%B4%EB%B0%94%EB%82%98-%EC%83%B4%ED%8E%98%EC%9D%B8+%EC%A1%B0%EC%A7%80%EC%95%84+%EA%B3%B5%EA%B3%BC%EB%8C%80%ED%95%99%EA%B5%90+%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5+%EC%88%9C%EC%9C%84", usNewsRanking:"US news Best Artificial Intelligence Programs", gtRank:"U.S. News Graduate AI #5", uiucRank:"U.S. News Graduate AI #6", gtDegree:"M.S. Computer Science, AI", uiucDegree:"B.S. Statistics, Minors in Computer Science, Data Science, and Informatics",
    projectsTitle:"대표 프로젝트", repository:"Repository", report:"REPORT", currentGithub:"GitHub", previousGithub:"이전 GitHub 계정", googleRanking:"U.S. News 순위 검색", themeDark:"다크 모드", themeLight:"라이트 모드", showScreenshots:"프로젝트 화면 보기",
    healthProjectTitle:"개인 맞춤형 건강 코칭 Multi-Agent", translationProjectTitle:"Agent 기반 다국어 번역 품질 워크플로우", pipelineProjectTitle:"국세청 세금 납부 및 한국농촌경제연구원 데이터 파이프라인", usageProjectTitle:"AI Usage Bar",
    healthProject1:"개인 건강정보와 연구 근거를 바탕으로 생활습관을 안내하는 건강 코칭 Agent를 개발했습니다.", healthProject2:"사용자의 질문에 따라 건강 기록 조회와 논문 검색을 선택하고, 답변과 함께 근거 문장을 제공합니다.", healthProject3:"LangGraph Supervisor와 Tool Routing, Hybrid Search RAG, MCP Tool, Evidence Citation, Safety Rules를 연결해 Benchmark 600문항에서 전체 정확도 98.67%와 API 오류 0건을 기록하고, 표준 RAG 대비 답변 품질을 75.3%에서 91.5%로 개선했습니다.",
    translationProject1:"CSV와 직접 입력 문장을 대상으로 번역 품질을 검수하고 수정하는 Agent 기반 Workflow를 개발했습니다.", translationProject2:"Qwen Agent Planner가 MQM 오류와 이전 시도 이력을 바탕으로 다음 수정 전략을 선택하고, 정확성·용어·철자·문법·문체·유창성별 수정 Chain을 호출합니다.", translationProject3:"각 후보를 Python 결정적 검증과 MQM 재평가로 검증해 개선되지 않으면 Rollback하고, 미해결 사례는 OpenAI Escalation과 HITL 승인으로 넘깁니다.",
    pipelineProject1:"국가 농업통계 조사와 납세 여부 확인에 필요한 데이터를 수집하고 검증하는 자동화 파이프라인을 개발했습니다.", pipelineProject2:"외부 API와 웹 데이터를 식별자 기준으로 연결하고 Excel 문서와 지도 좌표까지 처리했습니다.", pipelineProject3:"Python, API fallback, Selenium, Beautiful Soup, OpenPyXL, execution logs를 사용해 반복 업무를 약 3시간에서 최종 검증 10분 수준으로 줄였습니다.",
    usageBarProject1:"Claude와 Codex의 사용량을 메뉴 바에서 확인하는 macOS 앱을 개발했습니다.", usageBarProject2:"5시간 및 주간 사용량, 초기화 시각, 최근 기록과 설정 메뉴를 한 화면에서 확인할 수 있습니다.", usageBarProject3:"Swift 6, SwiftPM, LaunchAgent, Swift Testing으로 백그라운드 갱신과 Threshold Alert, Usage Coach를 구현했습니다.",
    skillsTitle:"기술", recognitionTitle:"기여와 수상", openSource:"UIUC STAT 420 응용통계학 교과서 기여자 (2020)", upstageAward:"아파트 실거래가 예측 Machine Learning 경진대회 Team 2위 (2026)", dataDiveAward:"주가 데이터를 활용한 Machine Learning 분석 경진대회 Team 4위 (2023)", mathAward:"미국 수학경시대회 조지아주 동남부 지역 대표(2017, 2018), 개인 2위(2017, 2018), 단체 1위(2017, 2018)", tournamentSite:"대회 공식 페이지", gctmResult:"GCTM 주 수학 토너먼트 수상 기록"
  },
  en: {
    skip:"Skip to content", navExperience:"Experience", navEducation:"Education", navProjects:"Projects", navSkills:"Skills",
    summary:"I develop AI agents and AX services for real workflows, focusing on Multi-Agent systems, Agentic AI, Agentic RAG, Tool Routing, and evaluation.",
    viewExperience:"Experience", viewEducation:"Education", viewProjects:"Projects", viewSkills:"Skills",
    locationLabel:"Location", educationLabel:"Education", focusLabel:"Target roles",
    experienceTitle:"Experience", experienceSubtitle:"Reverse chronological",
    flitto1:"Developed a Fluency Agent and optimized language-specific and domain-specific workflow prompts for LG Electronics and Olive Young multilingual AI translation projects.",
    flitto2:"Established LLM quality evaluation and benchmark criteria, then designed and operated an expert HITL validation and PoC process that achieved a 97.5% no-edit pass rate in external review.",
    kdn1:"Automated external data collection, identifier mapping, validation, and Excel processing in Python for tax-payment verification and a national agricultural statistics survey.",
    kdn2:"Added API fallback logic, exception handling, and execution logs, reducing a recurring three-hour workflow to approximately ten minutes of final verification.", kdn3:"Used Kakao Maps and geographic coordinates to visualize approximately 7,000 agricultural parcels on a Cafe24-hosted website map.",
    iea1:"Designed Tool Routing and an Agent workflow that selects between personal health-data retrieval and research search for a senior health-information assistant.",
    iea2:"Built a Hybrid Search Agentic RAG pipeline and benchmark experiments, improving the answer-quality score from 75.3% to 91.5%.",
    ta1:"Led four graduate-level Federated Learning labs and designed, assigned, and graded three programming assignments.", ta2:"Explained core concepts and implementation examples in Machine Learning, Deep Learning, and Federated Learning and guided hands-on exercises.",
    aibm1:"Analyzed ANN, ML, and DL model architectures and layer-level parameters, reduced models to minimal-parameter configurations, and compared performance.", aibm2:"Applied Federated Learning to a lightweight model to verify training in a distributed data setting.", aibm3:"Presented a highly compressed CNN model at a federated learning forum.",
    officialSite:"Official website", labPeople:"Lab people", labSite:"Lab website", khu:"Kyung Hee University, Applied Big Data", khuDepartment:"Kyung Hee University, Applied Big Data",
    educationTitle:"Education", rankingLabel:"U.S. News Graduate AI Ranking", rankingSummary:"Top AI universities in the U.S.", rankingLink:"U.S. News reference", googleRankingUrl:"https://www.google.com/search?q=What%20are%20the%20AI%20rankings%20for%20UIUC%20and%20Georgia%20Tech%3F", usNewsRanking:"US news Best Artificial Intelligence Programs", gtRank:"U.S. News Graduate AI #5", uiucRank:"U.S. News Graduate AI #6", gtDegree:"M.S. Computer Science, AI", uiucDegree:"B.S. Statistics, Minors in Computer Science, Data Science, and Informatics",
    projectsTitle:"Selected Projects", repository:"Repository", report:"REPORT", currentGithub:"GitHub", previousGithub:"Previous GitHub account", googleRanking:"Search U.S. News ranking", themeDark:"Dark mode", themeLight:"Light mode", showScreenshots:"View project screens",
    healthProjectTitle:"Personalized Health Coach Multi-Agent", translationProjectTitle:"Agent-Based Multilingual Translation Quality Workflow", pipelineProjectTitle:"Tax Payment and Korea Rural Economic Institute Data Pipeline", usageProjectTitle:"AI Usage Bar",
    healthProject1:"Built a health-coaching agent that provides lifestyle guidance grounded in personal health records and research evidence.", healthProject2:"It routes each question to health-record retrieval or paper search and returns the answer with supporting evidence.", healthProject3:"Connected LangGraph Supervisor, Tool Routing, Hybrid Search RAG, MCP tools, evidence citations, and safety rules; across 600 benchmark questions, the system reached 98.67% overall accuracy with zero API errors and improved answer quality from 75.3% to 91.5% versus standard RAG.",
    translationProject1:"Built an agent-based workflow for reviewing and repairing translations from CSV files or direct input.", translationProject2:"A Qwen Agent Planner selects the next revision strategy from MQM errors and prior attempts, then invokes category-specific revision chains for accuracy, terminology, spelling, grammar, style, and fluency.", translationProject3:"Each candidate is checked by deterministic Python validation and MQM re-evaluation; failed revisions are rolled back, while unresolved cases are escalated to OpenAI and human approval.",
    pipelineProject1:"Built an automation pipeline that collects and validates data for a national agricultural statistics survey and tax-payment verification.", pipelineProject2:"It maps external API and web data by identifier and processes Excel documents and geographic coordinates.", pipelineProject3:"Python, API fallback logic, Selenium, Beautiful Soup, OpenPyXL, and execution logs reduced a recurring three-hour workflow to about ten minutes of final verification.",
    usageBarProject1:"Built a macOS app that makes Claude and Codex usage visible from the menu bar.", usageBarProject2:"It shows five-hour and weekly usage, reset times, recent records, and settings in one place.", usageBarProject3:"Swift 6, SwiftPM, LaunchAgent, and Swift Testing support background refresh, threshold alerts, and a usage coach.",
    skillsTitle:"Skills", recognitionTitle:"Contributions and Awards", openSource:"Credited contributor to the UIUC STAT 420 textbook (2020)", upstageAward:"Team 2nd place in an apartment transaction price prediction ML competition, 2026", dataDiveAward:"Team 4th place in a stock-data Machine Learning analysis competition, 2023", mathAward:"Represented Southeast Georgia in the U.S. mathematics competition in 2017 and 2018; placed 2nd individually and 1st as a team.", tournamentSite:"Official tournament page", gctmResult:"GCTM State Mathematics Tournament results"
  }
};

const healthSlideSources = [
  "docs__ui__screenshots__readme__03_evidence_panel_ko.png",
  "docs__ui__screenshots__readme__01_user_login_ko.png",
  "docs__ui__screenshots__readme__02_chat_answer_ko.png",
  "docs__ui__screenshots__readme__02b_citation_closeup_ko.png",
  "docs__ui__screenshots__readme__04_emergency_ko.png",
  "docs__ui__screenshots__readme__05_care_login_ko.png",
  "docs__ui__screenshots__readme__06_care_overview_ko.png",
  "docs__ui__screenshots__readme__07_care_alerts_ko.png",
  "docs__ui__screenshots__readme__08_care_users_ko.png",
  "docs__ui__screenshots__readme__09_care_user_detail_ko.png",
  "docs__ui__screenshots__readme__11_mobile_chat.png",
  "docs__ui__screenshots__readme__12_mobile_evidence.png",
  "docs__ui__screenshots__readme__13_mobile_large_text.png",
  "docs__ui__screenshots__readme__14_mobile_english.png",
  "docs__img__langsmith_trace_hidden_content.jpg",
  "docs__img__live_mixed_diet_exercise.png",
  "docs__img__live_mixed_diet_exercise_ko.png",
  "docs__img__live_kenji_glucose.png",
  "docs__img__live_emergency.png",
  "docs__img__live_handoff.png",
  "docs__img__live_delete_approval.png",
  "docs__img__live_delete_done.png",
  "docs__img__live_my_info.png",
  "docs__img__live_med_change.png",
  "docs__img__live_walter_retinopathy.png",
  "docs__img__live_log.png",
  "docs__img__result_by_question_kind.png",
  "docs__img__result_health_four_systems.png",
  "docs__img__result_other_messages.png",
  "docs__img__result_time_cost.png",
  "docs__img__result_latency_breakdown.png",
  "docs__img__live_admin_overview.png",
  "docs__img__live_admin_person.png",
  "docs__ui__screenshots__admin_login_1280.png",
  "docs__ui__screenshots__admin_overview_1280.png",
  "docs__ui__screenshots__chat_desktop_1280_answer_recorded.png",
  "docs__ui__screenshots__chat_desktop_1280_empty.png",
  "docs__ui__screenshots__chat_desktop_1280_evidence_recorded.png",
  "docs__ui__screenshots__chat_mobile_390_answer_recorded.png",
  "docs__ui__screenshots__chat_mobile_390_approval_dialog_ui_state.png",
  "docs__ui__screenshots__chat_mobile_390_emergency.png",
  "docs__ui__screenshots__chat_mobile_390_empty.png",
  "docs__ui__screenshots__chat_mobile_390_evidence_recorded.png",
  "docs__ui__screenshots__chat_tablet_768_answer_recorded.png",
  "docs__ui__screenshots__chat_tablet_768_empty.png",
  "docs__ui__screenshots__chat_tablet_768_evidence_recorded.png",
  "docs__ui__screenshots__login_mobile_390.png",
  "docs__ui__screenshots__readme__01_user_login_en.png",
  "docs__ui__screenshots__readme__02_chat_answer_en.png",
  "docs__ui__screenshots__readme__02b_citation_closeup_en.png",
  "docs__ui__screenshots__readme__03_evidence_panel_en.png",
  "docs__ui__screenshots__readme__04_emergency_en.png",
  "docs__ui__screenshots__readme__05_care_login_en.png",
  "docs__ui__screenshots__readme__06_care_overview_en.png",
  "docs__ui__screenshots__readme__07_care_alerts_en.png",
  "docs__ui__screenshots__readme__08_care_users_en.png",
  "docs__ui__screenshots__readme__09_care_user_detail_en.png",
  "docs__ui__screenshots__signup_step2_mobile_390.png"
];

const healthCaptionOverrides = {
  "docs__ui__screenshots__readme__03_evidence_panel_ko.png": "대표 화면 | 근거 패널",
  "docs__ui__screenshots__readme__03_evidence_panel_en.png": "대표 화면 | Evidence panel",
  "docs__ui__screenshots__readme__01_user_login_ko.png": "사용자 로그인",
  "docs__ui__screenshots__readme__02_chat_answer_ko.png": "대화 답변",
  "docs__ui__screenshots__readme__06_care_overview_ko.png": "Care overview",
  "docs__ui__screenshots__readme__07_care_alerts_ko.png": "Care alerts",
  "docs__ui__screenshots__readme__09_care_user_detail_ko.png": "사용자 상세"
};

const healthSlideCaption = (source) => healthCaptionOverrides[source] || source
  .replace(/^docs__/, "")
  .replace(/^img__/, "")
  .replace(/^ui__screenshots__readme__/, "")
  .replace(/^ui__screenshots__/, "")
  .replace(/\.(png|jpe?g|gif|webp)$/i, "")
  .replace(/__(ko|en)$/, " ($1)")
  .replace(" (ko)", " (한국어)")
  .replace(" (en)", " (English)")
  .replace(/__/g, " / ")
  .replace(/_/g, " ")
  .replace(/^\d{2}b?\s+/i, "");

const healthSourceSet = new Set(healthSlideSources);
const localizedHealthSource = (source, language) => {
  const match = source.match(/__(ko|en)(\.[^.]+)$/i);
  if (!match) return source;
  const candidate = source.replace(/__(ko|en)(\.[^.]+)$/i, `__${language}$2`);
  return healthSourceSet.has(candidate) ? candidate : source;
};
const healthSlidesFor = (language) => {
  const seen = new Set();
  const slides = healthSlideSources
    .map((source) => localizedHealthSource(source, language))
    .filter((source) => {
      if (seen.has(source)) return false;
      seen.add(source);
      return true;
    })
    .map((source, index) => ({
      src: `./assets/health-all/${source}`,
      label: String(index + 1).padStart(2, "0"),
      caption: healthSlideCaption(source),
      alt: `Health coach screen ${index + 1}`
    }));
  const architecture = {
    src: `./assets/health-architecture-${language}.png`,
    label: "A",
    caption: language === "ko" ? "전체 구조 | REPORT" : "Architecture | REPORT",
    alt: language === "ko" ? "Health coach Multi-Agent 구조" : "Health coach Multi-Agent architecture"
  };
  return [slides[0], architecture, ...slides.slice(1)].map((slide, index) => ({
    ...slide,
    label: String(index + 1).padStart(2, "0")
  }));
};

const slideCollections = {
  health: { ko: healthSlidesFor("ko"), en: healthSlidesFor("en") },
  l10n: [
    { src:"./assets/l10n-ui-run-07.png", label:"06", caption:"대표 화면 | 일괄 실행 결과: Japan", alt:"Translation quality agent Japan run screen" },
    { src:"./assets/l10n-ui-run-08.png", label:"06", caption:"일괄 실행 결과: France", alt:"Translation quality agent France run screen" },
    { src:"./assets/l10n-ui-hero.png", label:"01", caption:"서비스 화면과 주요 상태", alt:"Translation quality agent hero screen" },
    { src:"./assets/l10n-architecture.png", label:"02", caption:"Agent 처리 구조", alt:"Translation quality agent architecture" },
    { src:"./assets/l10n-ui-mode-poc.png", label:"03", caption:"PoC 테스트", alt:"Translation quality agent PoC mode" },
    { src:"./assets/l10n-ui-mode-direct.png", label:"04", caption:"직접 입력 번역", alt:"Translation quality agent direct mode" },
    { src:"./assets/l10n-ui-mode-csv.png", label:"05", caption:"CSV 일괄 번역", alt:"Translation quality agent CSV mode" },
    { src:"./assets/l10n-ui-review.png", label:"07", caption:"검토와 승인", alt:"Translation quality agent review screen" }
  ]
};

const buttons = document.querySelectorAll("[data-lang]");
const elements = document.querySelectorAll("[data-i18n]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
let currentLanguage = "ko";
let currentTheme = localStorage.getItem("portfolio-theme") || (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");

const updateTheme = (theme) => {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = currentTheme;
  themeToggle?.setAttribute("aria-pressed", String(currentTheme === "dark"));
  if (themeToggle) themeToggle.textContent = copy[currentLanguage][currentTheme === "dark" ? "themeLight" : "themeDark"];
  themeColorMeta?.setAttribute("content", currentTheme === "dark" ? "#0b1220" : "#ffffff");
  localStorage.setItem("portfolio-theme", currentTheme);
};

themeToggle?.addEventListener("click", () => updateTheme(currentTheme === "dark" ? "light" : "dark"));

const getSlideCollection = (name, language = currentLanguage) => {
  const collection = slideCollections[name];
  return name === "health" ? collection[language] : collection;
};

const warmSlideImages = (slides) => {
  slides.forEach((slide) => {
    const image = new Image();
    image.src = slide.src;
  });
};

function updateHealthSlideLanguage(language) {
  document.querySelectorAll('[data-slide-collection="health"]').forEach((container) => {
    const collection = getSlideCollection("health", language);
    container.querySelectorAll(".project-slide").forEach((slide, index) => {
      const item = collection[index];
      if (!item) return;
      const image = slide.querySelector("img");
      if (image) {
        image.src = item.src;
        image.alt = item.alt;
      }
      slide.dataset.label = `${item.label} ${item.caption}`;
    });
    const activeSlide = container.querySelector(".project-slide.is-active");
    const status = container.closest("[data-slideshow]")?.querySelector("[data-slide-status]");
    if (activeSlide && status) status.textContent = activeSlide.dataset.label;
    warmSlideImages(collection);
  });
}

function updateRankingLink(language) {
  const url = copy[language]?.googleRankingUrl;
  if (!url) return;
  document.querySelectorAll(".ranking-google-link").forEach((link) => { link.href = url; });
}

function setLanguage(language) {
  const selected = copy[language] ? language : "ko";
  currentLanguage = selected;
  document.documentElement.lang = selected;
  elements.forEach((element) => {
    const value = copy[selected][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === selected)));
  localStorage.setItem("portfolio-language", selected);
  updateHealthSlideLanguage(selected);
  updateRankingLink(selected);
  updateTheme(currentTheme);
}

buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem("portfolio-language") || (navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-slide-collection]").forEach((container) => {
  const collection = getSlideCollection(container.dataset.slideCollection) || [];
  container.innerHTML = collection.map((slide) => `<figure class="project-slide" data-label="${slide.label} ${slide.caption}"><img src="${slide.src}" alt="${slide.alt}" loading="lazy"></figure>`).join("");
});

document.querySelectorAll("[data-slideshow]").forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll(".project-slide"));
  const status = slideshow.querySelector("[data-slide-status]");
  let index = Math.min(Number(slideshow.dataset.initial || 0), slides.length - 1);
  const render = () => {
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
    if (status) status.textContent = slides[index]?.dataset.label || `${index + 1} / ${slides.length}`;
  };
  slideshow.querySelector("[data-slide-prev]")?.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });
  slideshow.querySelector("[data-slide-next]")?.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    render();
  });
  window.setTimeout(() => warmSlideImages(slides.map((slide) => ({ src: slide.querySelector("img")?.src })).filter((slide) => slide.src)), 200);
  render();
});

const lightbox = document.querySelector("[data-image-lightbox]");
const lightboxImage = lightbox?.querySelector("[data-lightbox-image]");
const closeLightbox = () => {
  lightbox?.classList.remove("is-open");
  lightbox?.setAttribute("aria-hidden", "true");
  if (lightboxImage) lightboxImage.removeAttribute("src");
};
document.querySelectorAll(".project-preview, .project-slide img").forEach((image) => {
  image.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
lightbox?.querySelector("[data-lightbox-close]")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
