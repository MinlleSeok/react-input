import React, { useState } from 'react';
import InputPresenter from './InputPresenter';

const InputContainer = () => {

    const [state, setState] = useState('');
    const regExp = /^[0-9]{0,}\.{0,1}[0-9]{0,}$/;
    const regExp2 = /^[0-9]{0,}\.{1,}[0-9]{0,}$/;
    const onChange = (e) => {
        if (!regExp.test(e.target.value) || !regExp.test(state)) {
            e.preventDefault();
            return;
        }
        setState(e.target.value);
    }

    const handleOnKey = (e) => {
        console.log(e.key)
        console.log(e.target.value)
        if (!regExp.test(e.target.value) || !regExp.test(state)) {
            e.preventDefault();
        }
        if (e.key === '.') {
            if (e.target.value === '') {
                e.preventDefault();
            }
            if (regExp2.test(e.target.value) || regExp2.test(state)) {
                e.preventDefault();
            }
        }

    }

    return <InputPresenter
        onChange={onChange}
        handleOnKey={handleOnKey}
        value={state}
    />;
}

export default InputContainer;