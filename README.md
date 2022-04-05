# SVELTE.JS 완벽가이드

- [SVELTE.DEV](https://svelte.dev/)

## 장점

1) Wirte less code( _적은코드_ )
    - 높은가독성, 개발시간단축,쉬운리팩토링,작은번들(SPA최적화),낮은러닝커브
2) No virtual DOM

- No Diffing: `기존가상DOM`과 변경됨에 따른 `현재가상DOM`의 차이점을 비교해서 차이점있는 부분만 갱신
- No Overhead
  - 오버헤드(OverHead): 어떤처리를 위해 들어가는 간접적인 시간이나 메모리등을 의미.

 3) Truly reactive(반응성)

- 앱의상태(데이터)의 변화가 DOM에 자동으로 반영됨.
- Framework less VanillaJS,
- Only use `devDependencies`
- 명시적설계(창의적 작업)

## 단점

- 낮은 성숙도(작은 생태계, CDN 미제공, IE 미지원

## 스벨트 탬플릿

 ```sh
    npx degit sveltejs/template `app-name`
    cd `app-name`
    # to use TypeScript run:
    # node scripts/setupTypeScript.js
    npm install
    npm run dev
```

### 특징

- 선언적 렌더일 ( { } 을 이용함.)
- 조건문

```svelte
    {#if} - {:else if} - {:else} - {/if}
```

- 반복문

```svelte
    {#each arrays as item}
        - 
    {/each}
```

- 이벤트
    `on:`
- 컴포넌트
  - __reverse()__: 원본배열의 순서를 반전, (원본배열변경됨)
  - __slice(시작,끝-1)__: 배열의 시작부터~끝까지 _새로운배열_ 을 반환.
  - Prop: 부모컴포넌트에서 자식컴포넌트에게 데이터 전달 (자식컴포넌트에 export let 변수할당)
  - 문자열에 포함된 파라미터가 여려개일경우 `...파라미터.split(',')` 자르고, 스프레스 연산자로 처리함
- 스토어(STORE)
  - 컴포넌트끼리 데이터 통신기능
  - __Auto-subscription(자동구독)__: 스토어 객체에 $ 표시를 사용하는 것.

## 라이프 사이클
