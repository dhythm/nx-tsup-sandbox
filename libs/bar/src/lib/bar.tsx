import styled from 'styled-components';
import { helloFoo } from '@nx-tsup-sandbox/foo';

/* eslint-disable-next-line */
export interface BarProps {}

const StyledBar = styled.div`
  color: pink;
`;

export function Bar(props: BarProps) {
  helloFoo();

  return (
    <StyledBar>
      <h1>Welcome to Bar!</h1>
    </StyledBar>
  );
}

export default Bar;
