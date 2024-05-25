import { render } from '@testing-library/react';

import Elasticsearch from './Elasticsearch';

describe('Elasticsearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Elasticsearch />);
    expect(baseElement).toBeTruthy();
  });
});
