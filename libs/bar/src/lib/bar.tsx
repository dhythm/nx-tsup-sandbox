import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BarProps {}

const StyledBar = styled.div`
  color: pink;
`;

export function Bar(props: BarProps) {
  return (
    <StyledBar>
      <h1>Welcome to Bar!</h1>
    </StyledBar>
  );
}

export default Bar;
