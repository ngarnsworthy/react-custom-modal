import React from 'react';
import {closeIcon, warningIcon} from "./SvgIcons";
import {DialogType} from "./index";

interface IProps {
    showCloseButton: boolean;
    type: DialogType;
    hideModal: () => void;
    title: string;
}

const Header = ({showCloseButton, type, hideModal, title}:IProps) => {

    return (
        <div className={`header header-${type}`}>
            <div>{warningIcon()}</div>
            {showCloseButton && (
                <div style={{position: 'absolute', right: 20, cursor: 'pointer'}}
                     onClick={hideModal}>{closeIcon()}</div>
            )}
            <span className={'title'}>{title}</span>
        </div>
    )

}

export default Header;