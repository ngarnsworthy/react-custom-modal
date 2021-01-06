import React, {useEffect} from "react";

import "./index.scss";
import "./animate.css";
import {AnimationType, usePopup} from "./index";

const ModalBackdrop = ({onClick}: {onClick: () => void }) => {
    useEffect(() => {
        document.body.classList.add("srm-modal-open");

        return () => {
            document.body.classList.remove("srm-modal-open");
        };
    }, []);

    return (
        <div
            onClick={onClick}
            className={`srm-modal-backdrop`}
        >
        </div>
    );
};

const ModalWrapper = ({children}: { children: any }) => (
    <div className="srm-modal-wrapper">{children}</div>
);

export const ModalRoot = () => {

    let {
        componentJSX: ComponentJSX,
        component: Component,
        componentProps,
        hideModal,
    } = usePopup();

    componentProps = {...componentProps, hideModal}

    // @ts-ignore
    const { animationType } = componentProps;

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
    }


    return Component || ComponentJSX ? (
        <ModalWrapper>
            <ModalBackdrop onClick={hideModal}/>
            <div className={animationClass}>
                {ComponentJSX ? ComponentJSX : <Component {...componentProps}/>}
            </div>
        </ModalWrapper>
    ) : null;
};
