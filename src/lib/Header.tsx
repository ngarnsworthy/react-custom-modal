import React from 'react';
import {closeIcon, iconIllustrationTypes} from "./SvgIcons";
import {DialogType} from "./index";

interface IProps {
    showCloseButton: boolean;
    type: DialogType;
    hideModal: () => void;
    title: string;
}

const Header = ({showCloseButton, type, hideModal, title}: IProps) => {

    return (
        <div className={`header header-${type}`}>
            {iconIllustrationTypes[type]}
            {showCloseButton && (
                <div style={{position: 'absolute', right: 20, cursor: 'pointer'}}
                     onClick={hideModal}>{closeIcon()}</div>
            )}
            <div className={`title ${iconIllustrationTypes[type] ? 'title-margin' : ''}`}>{title}</div>
        </div>
    )

}

export default Header;