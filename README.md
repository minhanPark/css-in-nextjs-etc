# nextjs css 이것저것들

## 테일윈드

현재 4버전이 출시되어서 테스트  
[공식문서](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

> global css에 tailwind만 import  
> autoprifixer 등은 설치 안하고 postcss만 설치 후 설정 잡아 줌

등등이 변했음. 더 편하게 설치 및 적용이 가능해졌다.

### 컨테이너 쿼리

버전4부터는 컨테이너 쿼리가 내장되어 있다.

```html
<div className="@container">
  <div className="flex flex-col @md:flex-row"></div>
</div>
```

위와 같이 @container라고 입력하면 해당 div가 기준 컨테이너가 된다.  
중첩된 자식들에게서 컨테이너 쿼리를 사용하려면 @md 등의 형태로 클래스를 붙여주면 된다.

### css module하고 같이 사용하는 방법

```css
// ~.module.css
.card {
  @apply @container;
}
```

위와 같이 일반적으로 css module을 쓸 때 처럼 파일을 만듭니다.  
그리고 클래스를 주고 @apply로 tailwind에서 사용하는 기능들을 그대로 써주면 해당 클래스에 적용이 됩니다.

```
import styles from "./ProductCard.module.css";

<div className={styles.card}>...</div>
```

위와 같이 css module 사용하듯이 사용하면 된다.
