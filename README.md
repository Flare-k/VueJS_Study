# <b> VueJS_Study </b>


### <b> Q. Vue.js는 왜 사용할까? </b>
```
Web-app을 만들 때 사용한다.
예를 들어 사이트 내에서 페이지를 이동할 때 화면 전환이 부드럽거나 모바일처럼 새로고침이 필요없는 사이트를 웹앱이라고 한다.  

웹앱을 만들 때 쓰는 라이브러리가 Vue.js이다.
```

### <b> Q. 리액트 사용자가 많은데도 불구하고 왜 뷰를 사용할까? </b>
```
1. 흔히들 쉬워서 사용한다는 의견이 대다수이다. 그렇다고 리액트나 앵귤러보다 기능이 부족한 것은 아니다.

2. 개발 시 방법이 정해져있다.
    Q. 만약 HTML을 여러 개 만들고 싶다면?
    1. React라면..
        - { map }
        - forEach
        - for for in for of
        - render() 밖에서 쓸지 안에서 쓸지

    2. Vue라면..
        - v-for
        Vue에서도 React 스럽게 자유도 높은 개발이 가능하다.

3. HTML 렌더링이 빠르다.

4. 업데이트가 잘 된다.
```

### 1. 개발환경 셋팅
```
1. node.js 설치 (최신버전 권장)
2. VScode 에디터 설치
3. 터미널에 입력
    > npm install -g @vue/cli (vue 개발환경을 도와주는 프로그램)
4. 에디터 부가기능 설치
    - vetur
    - html css support
    - vue 3 snippets
```
[node.js 설치](www.nodejs.org)


### 2. Vue 프로젝트 생성
```
1. 작업폴더 생성
2. 프로젝트 생성
    > vue create 프로젝트명 (엔터)
    > Default (Vue 3 Previe) (엔터)
3. src/App.vue에서 코드를 작성하면 됨 (main)
    - template 안에 HTML
    - script 안에 JS
    - style 안에 CSS
4. 프로그램 실행 (경로 확인)
    > npm run serve
5. 디렉토리 설명
    - src: 소스코드 관리
    - public: html 파일, 기타파일 보관
```