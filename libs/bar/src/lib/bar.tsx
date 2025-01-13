import styled from 'styled-components';
import { hello } from './utils';

/* eslint-disable-next-line */
export interface BarProps {}

const StyledBar = styled.div`
  color: pink;
`;

export function Bar(props: BarProps) {
  const message = hello();

  return (
    <StyledBar>
      <h1>Welcome to Bar!</h1>
      <p>{message}</p>
    </StyledBar>
  );
}

export default Bar;
