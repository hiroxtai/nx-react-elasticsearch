import { render } from '@testing-library/react';

import AboutChild1 from './AboutChild1';

describe('AboutChild1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutChild1 />);
    expect(baseElement).toBeTruthy();
  });
});
