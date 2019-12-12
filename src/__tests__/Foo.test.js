import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Foo from '../Foo.js';

describe('A suite yheaa', () => {
    it('should render without error', () => {
        expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
    });

    it('should be selectable by class foo', () => {
        expect(shallow(<Foo />).is('.foo')).toBe(true);
    });

    it('should be mount in a full DOM', () => {
        expect(mount(<Foo />).find('.foo').length).toBe(1);
    });

    it('should render tot static HTML', () => {
        expect(render(<Foo />).text()).toEqual('Bar');
    });
});
