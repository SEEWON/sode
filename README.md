## sode\_매일매일의 힘

[Strength of daily efforts](https://sode-alpha.vercel.app/)의 약자로, 규칙적인 매일을 살아갈 수 있도록 기록하는 용도의 간단한 웹앱입니다.

Server Side Rendering 방식으로 Data를 fetching하고, 클릭(혹은 터치)을 통해 그날 달성한 task를 표시할 수 있습니다.

Daily progress를 나타내는 원 디자인에 애니메이션이 포함되어 있습니다.

프로젝트와, Github Actions로 DB 데이터 추가를 자동화하는 과정이 궁금하시다면 [블로그 글](https://velog.io/@seewon/Github-Actions로-TS혹은-JS-파일-실행시키기node.js-간단한-프로젝트-소개)을 참고해 주세요.

<p align="center">
<img src="https://user-images.githubusercontent.com/50395394/210174913-0bea5e86-1d02-4916-8d10-00291418d06c.png" width=400></img>
</p>

### 제작 기간

1주일 (22.12.27-23.01.02)

### 사용된 기술

Next.js에서 제공하는 API Routing을 활용해 서버리스로 동작합니다.

Github Actions로 cron을 동작시켜, 매일 자정 DB에 데이터를 추가합니다.

- Next.js (Deploy/Vercel)
- Node.js (Serverless APIs)
- CSS Module
- Typescript
- MongoDB (Deploy/Atlas)
- Github Actions
