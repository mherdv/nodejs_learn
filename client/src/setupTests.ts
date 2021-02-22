import type { shallow as S, render as R, mount as M } from 'enzyme';
import Enzyme, { shallow, render, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let g: any = global;

declare global {
    let shallow: typeof S;
    let render: typeof R;
    let mount: typeof M;
}

g.shallow = shallow
g.render = render
g.mount = mount


// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
