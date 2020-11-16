import * as React from 'react';
import { configure, shallow } from 'enzyme';

import Main from '../src/component/Main';

describe('====== Main Component =====', () => {
    let defaultProps;
    beforeEach(() => {
        defaultProps = {
            classes: {},
            history: []
        };
    });

    it('should be defined', () => {
        expect(Main).toBeDefined();
    });

    it('should render correctly', () => {
        const component = shallow(<Main {...defaultProps} />);
        expect(component).toBeDefined();
    });

    // it('should pass correct props to the main component', () => {
    //     const props = { ...defaultProps };
    //     const component = shallow(<Main {...props} />);

    //     const text = component.find('Paper').at(0).type();
    //     expect(text).toEqual('Çalculator');
    // });
});
