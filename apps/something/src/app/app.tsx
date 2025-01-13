import styled from 'styled-components';

import { Foo } from '@nx-tsup-sandbox/foo';
import { Bar } from '@nx-tsup-sandbox/bar';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Foo />
      <Bar />
    </StyledApp>
  );
}

export default App;
