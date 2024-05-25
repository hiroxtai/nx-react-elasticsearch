import { render } from '@testing-library/react';

import AboutChild2 from './AboutChild2';

describe('AboutChild2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutChild2 />);
    expect(baseElement).toBeTruthy();
  });
});
