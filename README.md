**English** · [한국어](README.ko.md)

# Sihun Wang | AI Agent Engineer Portfolio

Bilingual portfolio website for Sihun Wang, focused on AI Agent development, Agentic RAG, Tool Routing, LLM Evaluation, HITL validation, and data pipelines.

Live site: https://sihunwang-skala.github.io/sihunwang-portfolio/

## Featured case study

[Health Agent: personalized health coaching](https://sihunwang-skala.github.io/sihunwang-portfolio/health-agent/) documents the agent workflow and evaluation. The case study compares four Agent and RAG configurations under the same conditions.

## Case study standard

Portfolio case studies follow the [Case Study Evidence Standard](docs/CASE_STUDY_EVIDENCE_STANDARD.md). Each case study separates the problem, personal contribution, system design, evaluation evidence, and limitations so that public claims remain reviewable.

## Local preview

From the repository root, start a local static server:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` for the portfolio and `http://localhost:8000/health-agent/` for the Health Agent case study. The case study's report is available at `http://localhost:8000/health-agent/report.pdf`. Stop the server with `Ctrl+C`.

## Resume download privacy

The resume-download flow and its limited data handling are described in the [Privacy Notice](PRIVACY.md).

The static site files are kept in the repository root for simple deployment.
