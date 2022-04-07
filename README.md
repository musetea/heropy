# SVELTE.JS 완벽가이드

- [SVELTE.DEV](https://svelte.dev/)

## 장점

1) Wirte less code( _적은코드_ )
    - 높은가독성, 개발시간단축,쉬운리팩토링,작은번들(SPA최적화),낮은러닝커브
2) No virtual DOM

- No Diffing: `기존가상DOM`과 변경됨에 따른 `현재가상DOM`의 차이점을 비교해서 차이점있는 부분만 갱신
- No Overhead
  - 오버헤드(OverHead): 어떤처리를 위해 들어가는 간접적인 시간이나 메모리등을 의미.

3)Truly reactive(반응성)

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

#### 스타일 바인딩

- 보간법을 이용한 3항 연산자
- 클래스 지시어(디렉티브):  ( class:`클래스명`={_변수_})
- 클래스 인라인 스타일 바인딩:  (style="color={_변수_};")
- 다중 클래스 지시어 바인딩: 함수실행
- 전역 스타일 ( `:global(_바인딩(클래스,태그..)_)` {})
- 키프레임 전역화: @keyframe `-global-zoom` {}

### 일반요소 바인딩

- bind:this={_변수_}
- __contenteditable__: innerHTML, textContent 속성을 사용하여 편집가능 태크를 만듬. (@html)

### 반복블록

- Object.entries(_객체_) as [Key, value] (key)
- 키블록: 연결된 데이터의 값이 변경될때 마다 블록 내부의 파괴하고 다시 생성함.
  - {#key _value_ } _블록_ {/key}

### 비동기 패턴

```js
    function fn(){
        new Promise((resolve, reject) => {
            if(err){
                return reject(new Error('Error Message'));
            }
            reslove('sucess data');
        });
    };
    // 프로미스 THEN 구문
    fn()
        .then((res) => { console.log(res); })
        .catch((err) => { console.log(err.message); })
        .finally(() => { console.log('done'); })
    // ASYNC / AWAIT 
    const asyncFn = async() => {
        try{
            const res = await fn();
            console.log(res);
        }
        catch(err){
            console.log(err.message);
        }
        finally(){
            console.log('done');
        }
    }
```

- 대기(pending):  '이행' 하거나 '거부' 되지 않은 초기상태.
- 이행(fulfilled):  연산이 성공적으로 완료 된 상태.
- 거부(rejected): 연산이 실패한 상태.

- await 블록

```svelte
    let promise = new Promise((resolve) => resolve(""))
    {#await promise}
        // 대기(Pending)
    {:then res}
        // 이행(Fulfilled)
    {:catch err}
        // 거부(Rejected)
    {/await}
    //
    {#await 프로미스 then 데이터}
    {/await}
```

- 인라인 이벤트 핸들러 사용을 권장함
- 다중 이벤트 핸들러 사용 가능 ( on:click={fn1} on:click={fn2})
- 이벤트 수식어
- `preventDefault`: 기본동작방지 [on:click|preventDefault]
- `once`: 최초실행 후 이벤트 핸들러 삭제 [on:click|priventDefault|once]
- `stopPropagation`: 이벤트 버블링 방지 (자식->부모로 이벤트 전달됨을 방지)  [on:click|stopProggation]
- `capture`: 갭처링에서 핸들러 실행 (부모->자식으로 ) [on:click|capture]
- `self`: 이벤트의 타켓과 currentTarget이 일치할 경우 이벤트 발생 [on:click|self]
- `passive`: 이벤트 처리를 완료하지 않고도 기본 속도로 화면을 스크롤... [on:wheel|passive]

### 컴포넌트

- 컴포넌트 객체 (bind:this={_변수_})
- 자식컴포넌트에 Prop 전달-> 구조분해, 전개연산자
- 컴포넌트에 데이터 전달할때 양방향 데이터 바인딩도 가능 (bind:todos={todos})
- `createEventDispatcher`: 커스텀이벤트 방식 (자식->부모로)
  - (event) => event.detail : 커스텀이벤트 전달자.
  - 자식은 on:customEvent={(event)=>{ event.detail}}

- 이벤트포워딩: 자식에서 on:click => 부모에서 on:click 으로 받을 수 있음

- setContext("이름", "데이터") / getContext("이름") => 자신에서 하위 컴포넌트에 전달.
- context="module" => 컴포넌트에서 전역적인 데이터로 사용됨.  export 키워드를 통해 외부에 전달 가능.
- $$props => {...$$props}  => 모든 프롭스 전개
- $$restProps {...$$restProps} => 명시적인 프롭스와 암시적인 프롭스 분리 전개함.

### 슬롯

- 컴포넌트에 태크를 전달.
- Fallback content(대체 콘텐츠): `slot` 으로 들어오는 내용이 없는 경우 사용됨.
- 이름있는 슬롯:  __name__: 예약어
- 범위를가지는 슬롯: let:domain => 호출하는쪽에서 변수처럼, 보간으로 사용함.
- 슬롯포워딩: <slot></slot> 태그를 이용해 자식으로 전달.
- `$$slots`: 컴포넌트에 들어오는 슬롯의 유뮤표시

### 스토어

- $ 자동구독
- set: 설정 스토어 객체의 내용을 설정.
- subscribe: 구독: 스토어 객체가 변경되면, 등록된 콜백이 호출됨.
- update: 업데이트 스토어객체의 값을 받아서 로직처리후 그 값을 리턴

```js
    writable(_초기화_, _함수_) => 구독자가 설정되면 발생.
    const unsubscribe = store.subscribe((value) => { ... })
    unsubscribe(): // 호출되면 구독을 취소됨.
    store.update((value) => { return value+1  })
    store.set(_내용_);
    // 
    writable(0, () => {
        // 구독자가 1이상일때 (최초)
        return () => {
            // 구독자가 0 일때 
        }
    })
    // 읽기전용 스토어  ($ 자동구독)
    const data = {}
    readable(data, (set)=> { 
        // 구독이 처음 생겼을 때 
        delete data; 
        
        return () => {
            // 구독이 모두 취소되었을때
        } 
    })
    store.subscribe()
```

- 계산된스토어(derived:파생): derived(스토어, () =>  { return ; })
- drived([1, 2], ([$1,$2]) => return $1+$2; )
- derived([count, double], ([count,double], set) => set(count+double)); // 방법2, 구독하는 스토어가 변경되면 매번 취소,구독 함.
- derived(count, ($count, set)  => {setTimeout(()=> { set($count + 1)}, 1500)}, '계산중...'); // 방법3, 초기화
- get() : 스토어의 데이터를 반환한다.
- 커스텀 스토어

```js
    const { set, update, subscribe} = writable(0);
        const objCount = {
            set,
            update,
            subscribe,
            increment:() => update(n => n+1),
            decrement: () => update(n => n-1),
            reset: () => set(0)
        };
```

```html
    <h1>
        COUNT : {$objCount}
    </h1>
    <button on:click={()=> objCount.increment()}>
        +
    </button>
    <button on:click={()=> objCount.decrement()}>
        -
    </button>
    <button on:click={()=>objCount.reset()}>
        Reset
    </button>
```

### 액션
