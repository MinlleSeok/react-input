import React from 'react';

const InputPresenter = ({
    value,
    onChange,
    handleOnKey
}) => {
    return <input
        type="text"
        onChange={onChange}
        onKeyUp={handleOnKey}
        onKeyDown={handleOnKey}
        onKeyPress={handleOnKey}
        value={value}
    />;
}

export default InputPresenter;