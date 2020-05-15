## Recoil Getting Started Tutorial

### Recoil at React Europe 2020

<iframe src="https://www.youtube.com/watch?v=fb3cOMFkEzs&feature=emb_title" title="Recoil at React Europe 2020"></iframe>

### Recoil이란?

`redux`, `contextAPI`와 비슷하게 **전역적인 상태 관리**를 도와주는 **패키지**

### Recoil Root

`redux`의 `store`나 `contextAPI`의 `Provider`와 비슷한 역할

### Atom

`React Hook`의 `useState`와 비슷한 역할<br/>
전역 상태의 값을 읽고 쓸수 있다.<br/>

### Selector

`React Hook`의 `useMemo`외 비슷한 역할<br/>
전역 상태의 값을 가지고 다른 값을 만들어 사용할 수 있다.<br/>

### DEMO

<img src="/demo.gif" width="400" height="auto"/><br/>

개인적으로 `redux`나 `contextAPI`를 사용했던 것 보다 쉽게 쓸 수 있을 것 같다.<br/>
`useRecoilState`나 `useRecoilValue`함수가 `useState`나 `useMemo`같은 `Hook`과 비슷한 것 같다.<br/>
어렵지 않게 `Hook`을 이용해 **전역적**으로 **상태 관리**를 하게 도와주는 좋은 **패키지**인 것 같다.<br/>
