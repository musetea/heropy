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

- `onMount`: 컴포넌트가 생성될때 DOM 에 바인딩이 완료되었을 때 최초에 한번 발생 함 (기본초기화)
- `onDestory`: 컴포넌트가 해제되기전에 발생 함 (DOM 에서 삭제되기전 호출)
- `beforeUpdate`: onMount() 호출되기 전,  반응성 데이터가 변경되기 전에 호출.
- `afterUpdate`: 반응성 데이터가 변경 된 후 발생 함.
- `tick`: 반응성 데이터가 변경 되었을때 즉시 반응성을 반영할때 비동기 함수로 호출

### 보간법 ( = {_변수_} 바인딩 )

- {`@html` _HTLM문자열_} => HTML 문자열을 HTML 반영함.
- XXS(Cross Site Scripting) 사이트 간 스크립팅
  - 웹 취약점의 하나로 웹사이트 관리자가 아닌 제3자가 웹에 악성 스크립트를 삽입하는 것
- {`@debug` _변수_} => svelte HTML 영역에서 변수를 확인 할때 사용, 개발자 도구가 열렸을 경우에는 일시정지됨.
- 가비지콜렉션(GC, Garbage Collection, 쓰레기 수집)
  - 메모리에 할당된 불필요한 데이터를 자동으호 해제하는 __자동 메모리 관리 방법__.

#### 반응성

- 반응성 구문: $: -> 반응성은 DOM 에 데이터가 반영 된 후 실행(처리)

```js
    let count = 0;
    $: double = count * 2;      // 선언
    $: { console.log(count) }   // 블록
    $: count, func()            // 함수실행
    $: count, (() => { console.log(count) })(); // 즉시함수실행(IIFE)
    $: if(count > 0) {}                 // 조건문
    $: for(let i=0; i<10; i++) { count} // 반복문
    $: {  }                             // 유효범위 ()
```
