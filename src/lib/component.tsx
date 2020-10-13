import React, {useEffect} from "react";

import "./index.scss";
import {usePopup} from "./index";

const CrossIcon = (props: any) => (
    <div>
        <svg
            {...props}
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="srm-close-icon"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    </div>
);

const ModalBackdrop = ({animated, onClick}: { animated: boolean, onClick: () => void }) => {
    useEffect(() => {
        document.body.classList.add("srm-modal-open");

        return () => {
            document.body.classList.remove("srm-modal-open");
        };
    }, []);

    return (
        <div
            onClick={onClick}
            className={`srm-modal-backdrop ${animated ? "srm-fade-in" : ""}`}
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

export const ModalRoot = ({animated, CloseComponent = CrossIcon}: { animated: boolean, CloseComponent: any }) => {

    let {
        component: Component,
        modalProps,
        hideModal,
        showModal,
        showAlert,
        showInputDialog,
        showOptionDialog
    } = usePopup();

    modalProps = {...modalProps, hideModal, showModal, showAlert, showInputDialog, showOptionDialog}

    return Component ? (
        <ModalWrapper>
            <ModalBackdrop animated={animated} onClick={hideModal}/>
            {/* <ModalContent animated={animated} className={modalProps.className}> */}
            <Component
                {...modalProps}
            />
            {!modalProps.hasOwnProperty("type") ? (
                <CloseComponent onClick={hideModal}/>
            ) : null}
            {/* </ModalContent> */}
        </ModalWrapper>
    ) : null;
};
