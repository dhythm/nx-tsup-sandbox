// libs/foo/src/lib/foo.tsx
import styled from "styled-components";
import { jsx } from "react/jsx-runtime";
var StyledFoo = styled.div`
  color: pink;
`;
function Foo(props) {
  return /* @__PURE__ */ jsx(StyledFoo, { children: /* @__PURE__ */ jsx("h1", { children: "Welcome to Foo!" }) });
}

// libs/foo/src/lib/utils.ts
var helloFoo = () => {
  return "Hello Foo!";
};
export {
  Foo,
  helloFoo
};
