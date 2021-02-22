import React from 'react'

export const getHookToTest = (hook: Function, hookData?: any): any => {


    let results;
    function HookWrapper() {
        results = hook(hookData);
        return null;
    }
    mount(<HookWrapper />);
    return results;

}