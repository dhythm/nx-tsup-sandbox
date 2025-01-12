import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooProps {}

const StyledFoo = styled.div`
  color: pink;
`;

export function Foo(props: FooProps) {
  return (
    <StyledFoo>
      <h1>Welcome to Foo!</h1>
    </StyledFoo>
  );
}

export default Foo;
