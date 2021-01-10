import React from 'react';

interface IProps {
    optionsToRender: Array<any>
}

export default function Footer({optionsToRender}: IProps) {

    return (
        <div className={'footer'}>
            <div className={'options-container'}>
                {optionsToRender.map((option,index) => (
                    <button key={`option${index}`} className={'option-button'} onClick={option.onClick}>
                        {option.name}
                    </button>
                ))}
            </div>
        </div>
    )


}