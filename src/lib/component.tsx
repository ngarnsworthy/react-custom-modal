import React, {useEffect} from "react";

import "./index.scss";
import {AnimationType, usePopup} from "./index";

// const CrossIcon = ({onClick}: { onClick: () => void }) => (
//     <div onClick={onClick}>
//         <svg
//             fill="none"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="srm-close-icon"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <line x1="18" y1="6" x2="6" y2="18"/>
//             <line x1="6" y1="6" x2="18" y2="18"/>
//         </svg>
//     </div>
// );

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

// const ModalContent = ({ children, animated, className = "" }) => (
//   <div
//     className={`srm-modal-content ${
//       animated ? "srm-slide-down-fade" : ""
//     } ${className}`}
//   >
//     {children}
//   </div>
// );

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
            <ModalBackdrop  onClick={hideModal}/>
            {/* <ModalContent animated={animated} className={modalProps.className}> */}

            <div className={animationClass}>
                {ComponentJSX ? ComponentJSX : <Component {...componentProps}/>}
            </div>

            {/*{!componentProps.hasOwnProperty("type") ? (*/}
            {/*    <CloseComponent onClick={hideModal}/>*/}
            {/*) : null}*/}
            {/* </ModalContent> */}
        </ModalWrapper>
    ) : null;
};
