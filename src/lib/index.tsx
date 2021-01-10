import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useReducer
} from "react";
import {ModalRoot} from "./component";
import Dialog from "./Dialog";
import {ToastPosition} from "./Toast";

export enum AnimationType {
    ZOOM_IN = 'ZOOM_IN',
    FADE_IN = 'FADE_IN',
    FLASH = 'FLASH',
    SWING = 'SWING',
    HEART_BEAT = 'HEART_BEAT',
    SLIDE_IN_LEFT = 'SLIDE_IN_LEFT',
    SLIDE_IN_RIGHT = 'SLIDE_IN_RIGHT'
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
    type?: DialogType;
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
    type?: DialogType;
    options?: Array<OptionDialogButton>;
    onConfirm?: (result?: DynamicObject) => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    inputs?: Array<InputProps>;
    input?: InputProps;
    onDismissed?: () => void;
    showCloseButton?: boolean;
    animationType?: AnimationType;
}

interface AlertOptions {
    text?: string;
    type?: DialogType;
    title?: string;
    confirmText?: string;
    showCloseButton?: boolean;
    animationType?: AnimationType
}

export interface ToastOptions {
    text: string;
    type: DialogType;
    position?: ToastPosition;
    timeoutDuration?: number;
    containerStyle?: React.CSSProperties,
    textStyle?: React.CSSProperties
}

export type IToast = ToastOptions & { id: string };

interface PopupContext {
    component?: () => JSX.Element;
    componentJSX?: JSX.Element;
    componentProps?: React.ComponentProps<any>;
    toasts?: Array<IToast>;
    showModal: (component: JSX.Element) => void;
    hideModal: () => void;
    showAlert:(options:AlertOptions) => void;
    hideAlert: () => void;
    showOptionDialog: (options: OptionDialogOptions) => void;
    showInputDialog: (options: InputDialogOptions) => void;
    showToast: (options: ToastOptions) => void;
    hideToast: (toastId: string) => void;
}

let DefaultPopupActions: PopupContext = {
    showModal: (_component: JSX.Element) => null,
    hideModal: () => null,
    showAlert:(_options:AlertOptions) => null,
    hideAlert: () => null,
    showOptionDialog: (_options: OptionDialogOptions) => null,
    showInputDialog: (_options: InputDialogOptions) => null,
    showToast: (_options: ToastOptions) => null,
    hideToast: (_toastId: string) => null,
}

let ExportedPopupActions: Omit<PopupContext, 'componentProps' | 'component' | 'componentJSX' | 'toasts'> = {
    ...DefaultPopupActions
}

const ModalContext = createContext<PopupContext>(DefaultPopupActions);

const {Provider, Consumer: ModalConsumer} = ModalContext;

const reducer = (state: any, {
    type,
    component,
    componentProps,
    componentJSX,
    toast,
    id
}: { type: 'openModal' | 'hideModal' | 'showToast' | 'hideToast', componentJSX?: JSX.Element, component?: any, componentProps?: any, toast?: IToast, id?: string }) => {
    switch (type) {
        case "openModal":
            return {...state, component, componentProps, componentJSX};
        case "hideModal":
            return {...state, component: null, modalProps: {}, componentJSX: null};
        case "showToast":
            return {...state, toasts: [...state.toasts, toast], componentProps};
        case "hideToast":
            const index = state.toasts.findIndex((t: { id: string | undefined; }) => t.id === id);
            return {...state, toasts: [...state.toasts.slice(0, index), ...state.toasts.slice(index+1)]};
        default:
            throw new Error("Unspecified reducer action");
    }
};

const PopupProvider = ({children}: { children: any }) => {

    const initialState: PopupContext = {
        componentJSX: undefined,
        component: undefined,
        componentProps: {},
        toasts: [],
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
        showToast: (options: ToastOptions) => {
            dispatch({
                type: 'showToast',
                toast: {...options, id: Math.random().toString(36).substring(7)},
                componentProps: {...options}
            })
        },
        hideToast: (toastId?: string) => {
            dispatch({
                type: 'hideToast',
                id: toastId
            })
        }
    };

    ExportedPopupActions = initialState;

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



export {ModalConsumer, PopupProvider, usePopup, ExportedPopupActions as PopupActions};