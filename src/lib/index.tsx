import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useReducer
} from "react";
import Dialog from './Popups/Dialog'
import {ModalRoot} from "./component";

interface OptionDialogOptions {
    title?: string,
    text?: string;
    type?: string;
    optionButtons?: Array<any>;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
}

interface InputProps {
    placeholder?: string;
    label?: string;
    inputType?: string;
    name?: string;
    default?: string;
}

export interface DynamicObject {
    [key: string]: Object;
}

interface InputDialogOptions {
    title?: string;
    text?: string;
    type?: string;
    options?: Array<any>;
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
}

interface AlertOptions {
    text?: string;
    type?: string;
    title?: string;
    confirmText?: string;
}


const ModalContext = createContext({
    component: () => <div>No modal component supplied</div>,
    componentJSX: <div></div>,
    componentProps: {},
    // @ts-ignore
    showModal: (component:JSX.Element) => {
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

const ModalProvider = ({children, animated, CloseComponent}: { children: any, animated: boolean, CloseComponent?: any }) => {

    const initialState = {
        componentJSX:null,
        component: null,
        modalProps: {},
        showModal: (componentJSX:JSX.Element) => {
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
                <ModalRoot CloseComponent={CloseComponent} animated={animated}/>
                {children}
            </Provider>
        </div>
    );
};

const usePopup = () => useContext(ModalContext);

export {ModalConsumer, ModalProvider, usePopup};