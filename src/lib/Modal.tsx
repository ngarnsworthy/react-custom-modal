import React, {useEffect} from 'react';
import {AnimationType} from "./index";

interface IProps {
    hideModal: ()=> void;
    animationType: AnimationType;
    Component?: () => JSX.Element;
    ComponentJSX?: JSX.Element;
    componentProps: React.ComponentProps<any>
}

export default function Modal({hideModal, animationType, Component, ComponentJSX, componentProps }:IProps) {

    let animationClass = '';

    switch (animationType as AnimationType) {
        case AnimationType.FADE_IN:
            animationClass = 'animate__animated animate__fadeIn animate__faster';
            break
        case AnimationType.HEART_BEAT:
            animationClass = 'animate__animated animate__heartBeat animate__faster';
            break
        case AnimationType.FLASH:
            animationClass = 'animate__animated animate__flash animate__faster';
            break
        case AnimationType.SWING:
            animationClass = 'animate__animated animate__swing animate__faster';
            break
        case AnimationType.ZOOM_IN:
            animationClass = 'animate__animated animate__zoomIn animate__faster';
            break
        case AnimationType.SLIDE_IN_LEFT:
            animationClass = 'animate__animated animate__slideInLeft animate__faster';
            break
        case AnimationType.SLIDE_IN_RIGHT:
            animationClass = 'animate__animated animate__slideInRight animate__faster';
            break
    }

    if (!Component && !ComponentJSX){
        return null;
    }

    return (
        <ModalWrapper>
            <ModalBackdrop onClick={hideModal}/>
            <div className={animationClass}>
                {ComponentJSX && ComponentJSX}
                {Component && <Component hideModal={hideModal} {...componentProps}/>}
            </div>
        </ModalWrapper>
    )

}

const ModalBackdrop = ({onClick}: { onClick: () => void }) => {
    useEffect(() => {
        document.body.classList.add("react-custom-modal-open");

        return () => {
            document.body.classList.remove("react-custom-modal-open");
        };
    }, []);

    return (
        <div
            onClick={onClick}
            className={`react-custom-modal-backdrop`}
        >
        </div>
    );
};

const ModalWrapper = ({children}: { children: any }) => (
    <div className="react-custom-modal-wrapper">{children}</div>
);