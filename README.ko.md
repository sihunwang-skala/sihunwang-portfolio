[English](README.md) · **한국어**

# 왕시훈 | AI Agent 개발자 포트폴리오

AI Agent 개발, Agentic RAG, Tool Routing, LLM 평가, HITL 검증, 데이터 파이프라인에 초점을 둔 왕시훈의 영어·한국어 이중 언어 포트폴리오 웹사이트입니다.

라이브 사이트: https://sihunwang-skala.github.io/sihunwang-portfolio/

## 대표 Case Study

[Health Agent: 개인 맞춤형 건강 코칭](https://sihunwang-skala.github.io/sihunwang-portfolio/health-agent/)에서 Agent workflow와 평가 결과를 확인할 수 있습니다. 같은 조건에서 비교한 네 가지 Agent/RAG 구조를 설명합니다.

## Case Study 기준

공개 Case Study는 [Case Study Evidence Standard](docs/CASE_STUDY_EVIDENCE_STANDARD.md)를 따릅니다. 문제, 본인 기여, 시스템 설계, 평가 근거, 한계를 구분해 공개 주장을 검토 가능하게 관리합니다.

## 로컬 미리보기

저장소 루트에서 정적 파일 서버를 실행합니다.

```bash
python3 -m http.server 8000
```

포트폴리오는 `http://localhost:8000/`, Health Agent Case Study는 `http://localhost:8000/health-agent/`에서 확인할 수 있습니다. 기술 보고서는 `http://localhost:8000/health-agent/report.pdf`에서 열립니다. 종료할 때는 `Ctrl+C`를 누릅니다.

## 이력서 다운로드 개인정보 안내

이력서 다운로드 과정의 제한적 데이터 처리는 [Privacy Notice](PRIVACY.md)에 정리했습니다.

간편한 배포를 위해 정적 사이트 파일은 저장소 루트에 두었습니다.
