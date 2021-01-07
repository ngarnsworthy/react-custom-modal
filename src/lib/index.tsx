import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useReducer
} from "react";
import {ModalRoot} from "./component";
import Dialog from "./Dialog";

export enum AnimationType {
    ZOOM_IN = 'ZOOM_IN',
    FADE_IN = 'FADE_IN',
    FLASH = 'FLASH',
    SWING = 'SWING',
    HEART_BEAT = 'HEART_BEAT'
}

export enum DialogType {
    WARNING = 'warning',
    INFO = 'info',
    DANGER = 'danger',
    SUCCESS = 'success'
}

export interface OptionDialogButton {
    name: string;
    onClick: () => void
}

interface OptionDialogOptions {
    title?: string,
    text?: string;
    type?: string;
    optionButtons?: Array<OptionDialogButton>;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    showCloseButton?: boolean;
    animationType?: AnimationType
}

export interface InputProps {
    placeholder?: string;
    label?: string;
    inputType: 'text' | 'file' | 'number' | 'image' | 'textarea' | 'date';
    name: string;
    default?: string;
    multiple?: boolean;
}

export interface DynamicObject {
    [key: string]: Object;
}

interface InputDialogOptions {
    title?: string;
    text?: string;
    type?: string;
    options?: Array<OptionDialogButton>;
    onConfirm?: (result?: DynamicObject) => void;
    onCancel?: () => void;
    label?: string;
    confirmText?: string;
    cancelText?: string;
    imageProps?: { multiple: boolean };
    inputs?: Array<InputProps>;
    input?: InputProps;
    multiple?: boolean;
    onDismissed?: () => void;
    showCloseButton?: boolean;
    animationType?: AnimationType
}

interface AlertOptions {
    text?: string;
    type?: string;
    title?: string;
    confirmText?: string;
    showCloseButton?: boolean;
    animationType?: AnimationType
}


const ModalContext = createContext({
    component: () => <div>No modal component supplied</div>,
    componentJSX: <div></div>,
    componentProps: {},
    // @ts-ignore
    showModal: (component: JSX.Element) => {
    },
    hideModal: () => {
    },
    // @ts-ignore
    showAlert: (options: AlertOptions) => {
    },
    hideAlert: () => {
    },
    // @ts-ignore
    showOptionDialog: (options: OptionDialogOptions) => {
    },
    // @ts-ignore
    showInputDialog: (options: InputDialogOptions) => {
    },
});

const {Provider, Consumer: ModalConsumer} = ModalContext;

const reducer = (state: any, {type, component, componentProps, componentJSX}: { type: 'openModal' | 'hideModal', componentJSX?: JSX.Element, component?: any, componentProps?: any }) => {
    switch (type) {
        case "openModal":
            return {...state, component, componentProps, componentJSX};
        case "hideModal":
            return {...state, component: null, modalProps: {}, componentJSX: null};
        default:
            throw new Error("Unspecified reducer action");
    }
};

const ModalProvider = ({children}: { children: any }) => {

    const initialState = {
        componentJSX: null,
        component: null,
        modalProps: {},
        showModal: (componentJSX: JSX.Element) => {
            dispatch({type: "openModal", componentJSX});
        },
        hideModal: () => {
            dispatch({type: "hideModal"});
        },
        showAlert: (options: AlertOptions) => {
            dispatch({
                    type: 'openModal',
                    component: Dialog, componentProps: {isAlert: true, isInputDialog: false, ...options}
                }
            )
        },
        hideAlert: () => {
            dispatch({type: "hideModal"})
        },
        showOptionDialog: (options: OptionDialogOptions) => {
            dispatch({
                type: "openModal",
                component: Dialog,
                componentProps: {
                    isAlert: false,
                    isInput: false,
                    ...options
                }
            });
        },
        showInputDialog: (options: InputDialogOptions) => {
            dispatch({
                type: "openModal",
                component: Dialog,
                componentProps: {
                    isAlert: false,
                    isInput: true,
                    ...options
                }
            });
        },
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const onKeyDown = useCallback(
        e => {
            if (e.key === "Escape") {
                state.hideModal();
            }
        },
        [state]
    );

    useEffect(() => {
        state.component === null
            ? document.addEventListener("keydown", onKeyDown)
            : document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown, state.component]);

    return (
        <div onKeyDown={onKeyDown} className="simple-react-modals">
            <Provider value={state}>
                <ModalRoot/>
                {children}
            </Provider>
        </div>
    );
};

const usePopup = () => useContext(ModalContext);

export {ModalConsumer, ModalProvider, usePopup};