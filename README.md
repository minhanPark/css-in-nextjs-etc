# nextjs css 이것저것들

## Pigment CSS

기존에 mui는 컨텍스트를 활용해서 컴포넌트에 사용했다. 그러나 nextjs가 버전업 해서 이제 서버 컴포넌트와 클라이언트 컴포넌트가 구분되고 서버 컴포넌트에서는 컨텍스트를 사용할 수 없기 때문에
빌드 타임에 css를 적용해주는 pigment css 형태로 나오게되었다.

### 설치 방법

```
(공식 문서)[https://github.com/mui/pigment-css?tab=readme-ov-file#start-with-nextjs]
```

### 사용방법

```tsx
// layout.tsx
import { css } from "@pigment-css/react";
import "@pigment-css/react/styles.css";

const DARK = "@media (prefers-color-scheme: dark)";

const htmlClass = css(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  [DARK]: {
    backgroundColor: "black",
    color: "white",
  },
}));

<body className={`${htmlClass}`}>...</body>;
```

위와 같은 형태로 css를 정의하고 전달할 수 있음.

쓰는 형태를 4가지로 구분 가능

```tsx
// 1번 styled 불러와서 태그 넣어서 함수처럼 사용
const Card = styled("div")({
  containerType: "inline-size",
  width: "100%",
});

// 2번 styled 불러와서 백틱을 사용해서 css 전달
const Card = styled("div")`
  padding: 0.2rem;
  width: 33%;
  max-width: 33%;
  ${() => MOBILE} {
    width: 100%;
    max-width: 100%;
  }
`;

// 3번 css 불러와서 함수처럼 사용해서 전달
const htmlClass = css(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  [DARK]: {
    backgroundColor: "black",
    color: "white",
  },
}));

// 4번 css 불러와서 백틱을 사용해서 css 전달
const mainClass = css`
  margin: 0 auto;
  max-width: 960px;
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
`;
```

### 테마 지정 방법

```ts
// next.config.ts

import { extendTheme } from "@pigment-css/nextjs-plugin";

export default withPigment(nextConfig, {
  theme: extendTheme({
    colorSchemes: {
      light: {
        colors: {
          background: "white",
          foreground: "black",
        },
      },
      dark: {
        colors: {
          background: "black",
          foreground: "white",
        },
      },
    },
  }),
});
```

nextConfig.config.ts에 extendTheme를 불러와 withPigment의 두번째 매개변수로 넣어주면 테마를 사용할 수 있다.

```tsx
const htmlClass = css(({ theme }) => ({
  backgroundColor: theme.colorSchemes.light.colors.background,
  color: theme.colorSchemes.light.colors.foreground,
  [DARK]: {
    backgroundColor: theme.colorSchemes.dark.colors.background,
    color: theme.colorSchemes.dark.colors.foreground,
  },
}));
```

위에 처럼 theme를 어디서든 접근 할 수 있다.

```ts
// pigment.d.ts
import { ExtendTheme } from "@pigment-css/react/theme";

declare module "@pigment-css/react/theme" {
  interface ThemeTokens {
    colorSchemes: {
      light: {
        colors: {
          background: string;
          foreground: string;
        };
      };
      dark: {
        colors: {
          background: string;
          foreground: string;
        };
      };
    };
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: ThemeTokens;
    }>;
  }
}
```

pigment.d.ts 파일을 root 폴더에 만들어서 타입에러를 해결할 수 있다. 마지막으로는 tsconfig.json에 만든 파일을 추가하자.

```ts
{
 ...
  "include": [
    "pigment.d.ts",
    ...
  ],
}

```
