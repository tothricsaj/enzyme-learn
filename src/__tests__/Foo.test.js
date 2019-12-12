import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Foo from '../Foo.js';

describe('A suite yheaa', () => {
    it('should render without error', () => {
        expect(shallow(<Foo />).contains(<div> className="foo">Bar</div>)).toBe(true);
    });
});
