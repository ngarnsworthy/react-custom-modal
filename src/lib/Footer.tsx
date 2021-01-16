import React from 'react';

interface IProps {
    optionsToRender: Array<any>;
    footerStyle?: React.CSSProperties;
}

export default function Footer({optionsToRender, footerStyle}: IProps) {

    return (
        <div className={'react-custom-footer'} style={{...footerStyle}}>
            <div className={'react-custom-options-container'}>
                {optionsToRender.map((option,index) => (
                    <button key={`option${index}`} className={'react-custom-option-button'} onClick={option.onClick}>
                        {option.name}
                    </button>
                ))}
            </div>
        </div>
    )


}