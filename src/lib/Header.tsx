import React from 'react';
import {closeIcon, iconIllustrationTypes} from "./SvgIcons";
import {DialogType} from "./index";

interface IProps {
    showCloseButton: boolean;
    type: DialogType;
    hideModal: () => void;
    title: string;
    headerTextStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
}

const Header = ({showCloseButton, type, hideModal, title, headerTextStyle, headerStyle}: IProps) => {

    return (
        <div className={`react-custom-header react-custom-header-${type}`} style={{...headerStyle}}>
            {iconIllustrationTypes[type]}
            {showCloseButton && (
                <div style={{position: 'absolute', right: 20, cursor: 'pointer'}}
                     onClick={hideModal}>{closeIcon()}</div>
            )}
            <div className={`react-custom-title ${iconIllustrationTypes[type] ? 'react-custom-title-margin' : ''}`} style={{...headerTextStyle}}>{title}</div>
        </div>
    )

}

export default Header;