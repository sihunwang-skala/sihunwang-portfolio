const copy = {
  ko: {
    skip:"본문으로 이동", name:"Sihun Wang", navExperience:"경력", navEducation:"학력", navProjects:"프로젝트", navSkills:"기술", navRecognition:"기여와 수상",
    summary:"AI Agent와 AX 서비스를 문제 정의부터 설계, 개발, 평가까지 수행합니다. Multi-Agent, Agentic AI, Agentic RAG, Tool Routing을 서비스에 적용하고 Agent Evaluation과 HITL로 품질을 검증합니다.",
    viewExperience:"경력", viewEducation:"학력", viewProjects:"프로젝트", viewSkills:"기술", viewRecognition:"기여와 수상",
    locationLabel:"위치", educationLabel:"학력", focusLabel:"관심 직무", previousScreen:"이전 화면", nextScreen:"다음 화면",
    experienceTitle:"경력", experienceSubtitle:"최신순",
    flitto1:"LG전자와 Olive Young의 다국어 AI 번역 프로젝트에서 LangChain 기반 Fluency Agent를 개발해 PoC 납품 통과율 97.5%(195/200문장)를 달성했습니다.",
    flitto2:"4,983문장을 163개 유형 클러스터로 분류하고 cluster-based few-shot prompting을 적용해 132개 프롬프트를 비교한 뒤 11개국 언어별 프롬프트를 선정했습니다.",
    flitto3:"Agent 산출물을 LLM-as-a-Judge, xCOMET 등 4종 지표로 비교하는 자동 평가 파이프라인을 구축하고, 주요 지표를 활용한 HITL 체계를 구축해 결과에 반영했습니다.",
    kdn1:"국세청 납세 여부 확인과 농업통계 보고를 위한 Python 기반 End-to-End 자동화 파이프라인을 설계 및 구현했습니다. Excel 30개 시트(합계 11,205행, 3,550열)의 주간보고 갱신 시간을 1시간에서 약 10분으로 단축했습니다.",
    kdn2:"API, Selenium, BeautifulSoup 기반 데이터 수집과 조사 대상별 식별자 매핑 및 검증 후 OpenPyXL로 자동 기입해, 고유 ID 645개에 해당하는 데이터를 Excel 2,346셀에 자동 기입했습니다.",
    kdn3:"오류 발생 시 유사 사례의 실행 로그를 제공하고 당일 작업 결과를 요약하는 Agent를 개발했습니다. API 조회 오류 대응 로직을 설계해 실패 45건을 모두 재처리했습니다.",
    iea1:"고령자 맞춤형 건강 가이드를 제공하는 Multi-Agent 챗봇을 개발했습니다. LangGraph 기반 5개 Agent 역할을 연계해 Tool Routing과 병렬 실행을 구현하고, Single-Agent 대비 일반 건강 질문 품질을 약 10%p, 기타 메시지 처리율을 62.5%p 개선했습니다.",
    iea2:"의학 논문 86편을 기반으로 Query Transformation, Hybrid Search, Evidence Selection 및 Faithfulness Check를 구현해, 최종 시스템에서 Standard RAG 대비 답변 품질을 16%p, 필수 근거 회수율을 29%p 개선했습니다.",
    iea3:"RAG 및 Agent 구성별 4종 Architecture를 비교하고, 별도 200건 Benchmark에서 91%의 통과율을 달성했습니다.",
    ta1:"대학원생 대상 Federated Learning 강좌의 실습 4회와 프로그래밍 과제 3개의 설계, 출제, 채점을 담당했습니다.", ta2:"Machine Learning, Deep Learning, Federated Learning의 핵심 개념과 구현 예제를 설명하고 실습을 지도했습니다.",
    aibm1:"세계에서 가장 작은 ANN 모델 구현을 목표로 모델 구조와 레이어별 파라미터를 분석해 모델을 초경량화하고, 경량화 전후의 성능을 비교했습니다.", aibm2:"경량화한 모델에 Federated Learning을 적용해 분산 데이터 환경에서의 학습 가능성을 확인했습니다.", aibm3:"직접 초경량화한 CNN 모델이 연합학습 포럼에서 소개되었습니다.",
    officialSite:"공식 웹사이트", labPeople:"연구실 구성원", labSite:"연구실 웹사이트", khu:"경희대학교 빅데이터응용학과", khuDepartment:"경희대학교 빅데이터응용학과",
    educationTitle:"학력", rankingLabel:"U.S. News Graduate AI Ranking", rankingSummary:"미국 AI 분야 최상위권 대학", rankingLink:"U.S. News Best Artificial Intelligence Programs Ranking", googleRankingUrl:"https://www.google.com/search?q=%EC%A1%B0%EC%A7%80%EC%95%84+%EA%B3%B5%EA%B3%BC%EB%8C%80%ED%95%99%EA%B5%90%EC%99%80+%EC%9D%BC%EB%A6%AC%EB%85%B8%EC%9D%B4+%EB%8C%80%ED%95%99%EA%B5%90+%EC%96%B4%EB%B0%94%EB%82%98-%EC%83%B4%ED%8E%98%EC%9D%B8%EC%9D%98+%EB%AF%B8%EA%B5%AD+%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5+%EB%B6%84%EC%95%BC+%EC%88%9C%EC%9C%84", usNewsRanking:"US news Best Artificial Intelligence Programs", gtRank:"U.S. News Graduate AI #5", uiucRank:"U.S. News Graduate AI #6", gtSchoolName:"Georgia Institute of Technology (조지아 공과대학교)", uiucSchoolName:"University of Illinois Urbana-Champaign (일리노이 대학교 어바나-샴페인)",  gtDegree:"M.S. Computer Science (AI)", uiucDegree:"B.S. Statistics, Minors in Computer Science, Data Science, and Informatics",
    projectsTitle:"대표 프로젝트", repository:"Repository", report:"REPORT", currentGithub:"GitHub", previousGithub:"이전 GitHub 계정", googleRanking:"U.S. News 순위 검색", themeDark:"다크 모드", themeLight:"라이트 모드", showScreenshots:"프로젝트 화면 보기",
    healthProjectTitle:"개인 맞춤형 건강 코칭 Multi-Agent", translationProjectTitle:"다국어 번역 품질 L10n Agent", pipelineProjectTitle:"국세청 세금 납부 및 한국농촌경제연구원 데이터 파이프라인", usageProjectTitle:"AI Usage Bar",
    healthProject1:"개인 건강정보와 연구 근거를 바탕으로 생활습관을 안내하는 건강 코칭 Agent를 개발했습니다.", healthProject2:"사용자의 질문에 따라 건강 기록 조회와 논문 검색을 선택하고, 답변과 함께 근거 문장을 제공합니다.", healthProject3:"LangGraph Supervisor와 Tool Routing, Hybrid Search RAG, Evidence Citation, Safety Rules를 연결해 Benchmark 600문항에서 전체 정확도 98.67%와 API 오류 0건을 기록하고, 표준 RAG 대비 답변 품질을 75.3%에서 93.5%로 개선했습니다.",
    translationProject1:"Gradio의 PoC, 직접 입력, CSV 처리와 LangChain LCEL 기반 번역, MQM 평가, 수정 Chain을 연결하고 번역 메모리, 용어집, Do-Not-Edit 컨텍스트를 적용했습니다.", translationProject2:"Pydantic으로 MQM 오류를 구조화해 6개 유형별 수정 Chain에 연결하고, Agent가 잔여 오류와 수정 이력에 따라 다음 전략을 선택합니다.", translationProject3:"Python이 상태 전이, 재시도, 숫자, 단위, 보호 용어 검증과 Rollback을 제어합니다. 미해결 건은 OpenAI 에스컬레이션과 사람 승인으로 넘깁니다.",
    pipelineProject1:"국가 농업통계 조사와 납세 여부 확인에 필요한 데이터를 수집하고 검증하는 자동화 파이프라인을 개발했습니다.", pipelineProject2:"외부 API와 웹 데이터를 식별자 기준으로 연결하고 Excel 문서와 지도 좌표까지 처리했습니다.", pipelineProject3:"Python, API fallback, Selenium, Beautiful Soup, OpenPyXL, execution logs를 사용해 반복 업무를 약 3시간에서 최종 검증 10분 수준으로 줄였습니다.",
    usageBarProject1:"Claude와 Codex의 사용량을 메뉴 바에서 확인하는 macOS 앱을 개발했습니다.", usageBarProject2:"5시간 및 주간 사용량, 초기화 시각, 최근 기록과 설정 메뉴를 한 화면에서 확인할 수 있습니다.", usageBarProject3:"Swift 6, SwiftPM, LaunchAgent, Swift Testing으로 백그라운드 갱신과 Threshold Alert, Usage Coach를 구현했습니다.",
    skillsTitle:"기술", recognitionTitle:"수상 및 기여", openSource:"UIUC STAT 420 응용통계학 교과서 기여자", upstageAward:"아파트 실거래가 예측 Machine Learning 경진대회 Team 2위", dataDiveAward:"주가 데이터를 활용한 Machine Learning 분석 경진대회 Team 4위", mathAward:"미국 수학경시대회 조지아주 동남부 지역 대표, 단체 1위, 개인 2위", tournamentSite:"대회 공식 페이지", gctmResult:"GCTM 주 수학 토너먼트 수상 기록", kbsTitle:"KBS 미디어 AI 우수교육생", kbsAward:"영상 객체 탐지 및 설명 멀티모달 프로젝트", kbsDigitalLink:"KBS 미디어 디지털·AI"
  },
  en: {
    skip:"Skip to content", name:"Sihun Wang", navExperience:"Experience", navEducation:"Education", navProjects:"Projects", navSkills:"Skills", navRecognition:"Contributions and Awards",
    summary:"I work across the full lifecycle of AI agent and AX services, from problem definition and design through development and evaluation. I apply agentic AI, multi-agent workflows, agentic RAG, and tool routing, then validate quality through agent evaluation and human-in-the-loop (HITL) review.",
    viewExperience:"Experience", viewEducation:"Education", viewProjects:"Projects", viewSkills:"Skills", viewRecognition:"Contributions and Awards",
    locationLabel:"Location", educationLabel:"Education", focusLabel:"Target roles", previousScreen:"Previous screen", nextScreen:"Next screen",
    experienceTitle:"Experience", experienceSubtitle:"Reverse chronological",
    flitto1:"Developed a LangChain-based Fluency Agent for LG Electronics and Olive Young multilingual AI translation projects, achieving a 97.5% PoC delivery pass rate (195/200 sentences).",
    flitto2:"Clustered 4,983 sentences into 163 categories, applied cluster-based few-shot prompting, compared 132 prompts, and selected language-specific prompts for 11 languages.",
    flitto3:"Built an automated evaluation pipeline comparing Agent outputs with four metrics, including LLM-as-a-Judge and xCOMET, and established a key-metric-driven HITL process.",
    kdn1:"Designed and implemented a Python-based end-to-end automation pipeline for tax-payment verification and agricultural-statistics reporting, reducing weekly-report refresh time for 30 Excel sheets (11,205 rows and 3,550 columns in total) from one hour to approximately ten minutes.",
    kdn2:"Collected data with APIs, Selenium, and BeautifulSoup, mapped and validated identifiers by survey target, and automated 2,346 Excel-cell entries for data associated with 645 unique IDs using OpenPyXL.",
    kdn3:"Developed an Agent that provides similar-case execution logs for errors and summarizes daily results. Designed API-error recovery logic and successfully reprocessed all 45 failures.",
    iea1:"Developed a Multi-Agent chatbot that provides personalized health guidance for older adults. Implemented Tool Routing and parallel execution across five LangGraph-based Agent roles, improving general health-question quality by approximately 10 percentage points and other-message handling by 62.5 percentage points versus a Single-Agent baseline.",
    iea2:"Implemented Query Transformation, Hybrid Search, Evidence Selection, and Faithfulness Check over 86 medical papers, improving answer quality by 16 percentage points and required-evidence retrieval by 29 percentage points versus Standard RAG in the final system.",
    iea3:"Compared four RAG and Agent architecture configurations and achieved a 91% pass rate on a separate 200-question benchmark.",
    ta1:"Led four graduate-level Federated Learning labs and designed, assigned, and graded three programming assignments.", ta2:"Explained core concepts and implementation examples in Machine Learning, Deep Learning, and Federated Learning and guided hands-on exercises.",
    aibm1:"Aimed to build the world’s smallest ANN model by analyzing its architecture and layer-level parameters, then compared performance before and after ultra-lightweight optimization.", aibm2:"Applied Federated Learning to the optimized model to verify its trainability in a distributed-data setting.", aibm3:"The ultra-lightweight CNN model I developed was presented at a federated learning forum.",
    officialSite:"Official website", labPeople:"Lab people", labSite:"Lab website", khu:"Kyung Hee University, Applied Big Data", khuDepartment:"Kyung Hee University, Applied Big Data",
    educationTitle:"Education", rankingLabel:"U.S. News Graduate AI Ranking", rankingSummary:"Top AI universities in the U.S.", rankingLink:"U.S. News reference", googleRankingUrl:"https://www.google.com/search?q=U.S.%20News%20AI%20rankings%20Georgia%20Tech%20UIUC", usNewsRanking:"US news Best Artificial Intelligence Programs", gtRank:"U.S. News Graduate AI #5", uiucRank:"U.S. News Graduate AI #6", gtSchoolName:"Georgia Institute of Technology", uiucSchoolName:"University of Illinois Urbana-Champaign",  gtDegree:"M.S. Computer Science (AI)", uiucDegree:"B.S. Statistics, Minors in Computer Science, Data Science, and Informatics",
    projectsTitle:"Selected Projects", repository:"Repository", report:"REPORT", currentGithub:"GitHub", previousGithub:"Previous GitHub", googleRanking:"Search U.S. News ranking", themeDark:"Dark mode", themeLight:"Light mode", showScreenshots:"View project screens",
    healthProjectTitle:"Personalized Health Coach Multi-Agent", translationProjectTitle:"L10n Quality Agent for Multilingual Translation", pipelineProjectTitle:"Tax Payment and Korea Rural Economic Institute Data Pipeline", usageProjectTitle:"AI Usage Bar",
    healthProject1:"Built a health-coaching agent that provides lifestyle guidance grounded in personal health records and research evidence.", healthProject2:"It routes each question to health-record retrieval or paper search and returns the answer with supporting evidence.", healthProject3:"Connected LangGraph Supervisor, Tool Routing, Hybrid Search RAG, evidence citations, and safety rules; across 600 benchmark questions, the system reached 98.67% overall accuracy with zero API errors and improved answer quality from 75.3% to 93.5% versus standard RAG.",
    translationProject1:"Connected Gradio PoC, direct-input, and CSV modes to LangChain LCEL translation, MQM evaluation, and revision chains, with translation-memory, terminology, and Do-Not-Edit context.", translationProject2:"Structured MQM findings with Pydantic and routed six error types to dedicated revision chains. The Agent selects the next strategy from remaining errors and revision history.", translationProject3:"Python controls state transitions, retries, deterministic checks for numbers, units, and protected terms, and rollback. Unresolved cases escalate to OpenAI and human approval.",
    pipelineProject1:"Built an automation pipeline that collects and validates data for a national agricultural statistics survey and tax-payment verification.", pipelineProject2:"It maps external API and web data by identifier and processes Excel documents and geographic coordinates.", pipelineProject3:"Python, API fallback logic, Selenium, Beautiful Soup, OpenPyXL, and execution logs reduced a recurring three-hour workflow to about ten minutes of final verification.",
    usageBarProject1:"Built a macOS app that makes Claude and Codex usage visible from the menu bar.", usageBarProject2:"It shows five-hour and weekly usage, reset times, recent records, and settings in one place.", usageBarProject3:"Swift 6, SwiftPM, LaunchAgent, and Swift Testing support background refresh, threshold alerts, and a usage coach.",
    skillsTitle:"Skills", recognitionTitle:"Contributions and Awards", openSource:"Credited contributor to the UIUC STAT 420 textbook", upstageAward:"Team 2nd place in an apartment transaction price prediction ML competition", dataDiveAward:"Team 4th place in a stock-data Machine Learning analysis competition", mathAward:"Represented Southeast Georgia in the U.S. mathematics competition; placed 1st as a team and 2nd individually.", tournamentSite:"Official tournament page", gctmResult:"GCTM State Mathematics Tournament results", kbsTitle:"KBS Media AI Outstanding Trainee", kbsAward:"Multimodal project on video object detection and description", kbsDigitalLink:"KBS Media Digital and AI"
  }
};

const healthSlideSources = [
  "docs__ui__screenshots__readme__03_evidence_panel_en.png",
  "docs__ui__screenshots__readme__01_user_login_en.png",
  "docs__ui__screenshots__readme__02_chat_answer_en.png",
  "docs__ui__screenshots__readme__02b_citation_closeup_en.png",
  "docs__ui__screenshots__readme__04_emergency_en.png",
  "docs__ui__screenshots__readme__05_care_login_en.png",
  "docs__ui__screenshots__readme__06_care_overview_en.png",
  "docs__ui__screenshots__readme__07_care_alerts_en.png",
  "docs__ui__screenshots__readme__08_care_users_en.png",
  "docs__ui__screenshots__readme__09_care_user_detail_en.png",
  "docs__ui__screenshots__readme__11_mobile_chat.png",
  "docs__ui__screenshots__readme__12_mobile_evidence.png",
  "docs__ui__screenshots__readme__13_mobile_large_text.png",
  "docs__ui__screenshots__readme__14_mobile_english.png",
  "docs__img__langsmith_trace_hidden_content.jpg",
  "docs__img__live_mixed_diet_exercise.png",
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
  "docs__ui__screenshots__readme__03_evidence_panel_en.png": "Main screen | Evidence panel",
  "docs__ui__screenshots__readme__01_user_login_ko.png": "사용자 로그인",
  "docs__ui__screenshots__readme__02_chat_answer_ko.png": "대화 답변",
  "docs__ui__screenshots__readme__06_care_overview_ko.png": "Care overview",
  "docs__ui__screenshots__readme__07_care_alerts_ko.png": "Care alerts",
  "docs__ui__screenshots__readme__09_care_user_detail_ko.png": "사용자 상세",
  "docs__ui__screenshots__readme__14_mobile_english.png": "Mobile screen"
};

const healthSlideCaption = (source) => healthCaptionOverrides[source] || source
  .replace(/^docs__/, "")
  .replace(/^img__/, "")
  .replace(/^ui__screenshots__readme__/, "")
  .replace(/^ui__screenshots__/, "")
  .replace(/\.(png|jpe?g|gif|webp)$/i, "")
  .replace(/_(ko|en)$/, "")
  .replace(/__/g, " / ")
  .replace(/_/g, " ")
  .replace(/^\d{2}b?\s+/i, "");

const healthSourceSet = new Set(healthSlideSources);
const localizedHealthSource = (source, language) => {
  const match = source.match(/_(ko|en)(\.[^.]+)$/i);
  if (!match) return source;
  const candidate = source.replace(/_(ko|en)(\.[^.]+)$/i, `_${language}$2`);
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
  l10n: {
    ko: [
      { src:"./assets/l10n-ui-hero.png", label:"01", caption:"서비스 화면과 주요 상태", alt:"Translation quality agent hero screen" },
      { src:"./assets/l10n-architecture.png", label:"02", caption:"Agent 처리 구조", alt:"Translation quality agent architecture" },
      { src:"./assets/l10n-ui-mode-poc.png", label:"03", caption:"PoC 테스트", alt:"Translation quality agent PoC mode" },
      { src:"./assets/l10n-ui-mode-direct.png", label:"04", caption:"직접 입력 번역", alt:"Translation quality agent direct mode" },
      { src:"./assets/l10n-ui-mode-csv.png", label:"05", caption:"CSV 일괄 번역", alt:"Translation quality agent CSV mode" },
      { src:"./assets/l10n-ui-run-07.png", label:"06", caption:"일괄 실행 결과: Japan", alt:"Translation quality agent Japan run screen" },
      { src:"./assets/l10n-ui-run-08.png", label:"07", caption:"일괄 실행 결과: France", alt:"Translation quality agent France run screen" },
      { src:"./assets/l10n-ui-review.png", label:"08", caption:"검토와 승인", alt:"Translation quality agent review screen" }
    ],
    en: [
      { src:"./assets/l10n-ui-hero.png", label:"01", caption:"Service overview", alt:"Translation quality agent hero screen" },
      { src:"./assets/l10n-architecture.png", label:"02", caption:"Agent workflow", alt:"Translation quality agent architecture" },
      { src:"./assets/l10n-ui-mode-poc.png", label:"03", caption:"PoC mode", alt:"Translation quality agent PoC mode" },
      { src:"./assets/l10n-ui-mode-direct.png", label:"04", caption:"Direct-input translation", alt:"Translation quality agent direct mode" },
      { src:"./assets/l10n-ui-mode-csv.png", label:"05", caption:"CSV batch translation", alt:"Translation quality agent CSV mode" },
      { src:"./assets/l10n-ui-run-07.png", label:"06", caption:"Batch run: Japan", alt:"Translation quality agent Japan run screen" },
      { src:"./assets/l10n-ui-run-08.png", label:"07", caption:"Batch run: France", alt:"Translation quality agent France run screen" },
      { src:"./assets/l10n-ui-review.png", label:"08", caption:"Review and approval", alt:"Translation quality agent review screen" }
    ]
  }
};

const buttons = document.querySelectorAll("[data-lang]");
const elements = document.querySelectorAll("[data-i18n]");
function renderIntroText() {
  const target = document.querySelector("[data-reveal-text]");
  const value = copy[currentLanguage]?.summary || "";
  if (!target) return;
  target.replaceChildren(...Array.from(value).map((character, index) => {
    if (character === " ") return document.createTextNode(" ");
    const letter = document.createElement("span");
    letter.className = "intro-char";
    letter.style.setProperty("--reveal-index", String(index));
    letter.textContent = character;
    return letter;
  }));
}

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
let currentLanguage = "en";
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
  return name === "health" || name === "l10n" ? collection[language] : collection;
};

const warmSlideImages = (slides) => {
  slides.forEach((slide) => {
    const image = new Image();
    image.src = slide.src;
  });
};

function updateSlideLanguage(language) {
  document.querySelectorAll("[data-slide-collection]").forEach((container) => {
    const name = container.dataset.slideCollection;
    const collection = getSlideCollection(name, language);
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
  renderIntroText();
  buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === selected)));
  localStorage.setItem("portfolio-language", selected);
  updateSlideLanguage(selected);
  document.querySelectorAll("[data-slide-prev]").forEach((button) => button.setAttribute("aria-label", copy[selected].previousScreen));
  document.querySelectorAll("[data-slide-next]").forEach((button) => button.setAttribute("aria-label", copy[selected].nextScreen));
  updateRankingLink(selected);
  updateTheme(currentTheme);
}

buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem("portfolio-language") || "en");
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
