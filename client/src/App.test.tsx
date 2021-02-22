import React from 'react';
import App from './App';
import type { ShallowWrapper } from 'enzyme';
import { useApp } from './useApp';
import { act, renderHook } from '@testing-library/react-hooks';
import type { RenderHookResult } from '@testing-library/react-hooks';



describe('App.tsx', () => {

    let wrapper: ShallowWrapper;
    let useAppHooks: RenderHookResult<Function, any>;

    beforeEach(() => {
        wrapper = shallow(<App />);
        useAppHooks = renderHook(() => useApp())
    })


    test('to be rendered correct', () => {

        expect(wrapper.isEmptyRender()).toBeFalsy();
    })
    test('has h1 element', () => {
        expect(wrapper.find('h1')).toBeDefined();

    })

    describe('useApp.ts', () => {


        test('hooks are exists ', () => {
            expect(useAppHooks.result.current.state).toBe("");
        })


        test('set state works', () => {

            act(() => useAppHooks.result.current.setState('aaa'));

            expect(useAppHooks.result.current.state).toBe('aaa')
        })

    })
})
