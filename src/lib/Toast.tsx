import React, {useCallback, useEffect, useState} from 'react';
import {AnimationType, IToast, ToastOptions} from "./index";
import {closeIcon, iconIllustrationTypes} from "./SvgIcons";

interface IToasts {
    toasts: Array<IToast>;
    hideToast: (toastId: string) => void;
}

export enum ToastPosition {
    TOP_RIGHT = 'top-right',
    BOTTOM_RIGHT = 'bottom-right',
    BOTTOM_CENTER = 'bottom-center'
}

let DefaultToastPosition = ToastPosition.BOTTOM_RIGHT;

export const setToastPosition = (position: ToastPosition) => {
    DefaultToastPosition = position;
}

export default function Toast({toasts, hideToast}: IToasts) {

    return (
        <div className={`toast-container toast-${DefaultToastPosition}`}>
            {toasts.map(toast => <ToastItem key={toast.id} toast={toast} hideToast={hideToast}/>)}
        </div>
    )

}

interface IProps {
    toast: IToast,
    animationType?: AnimationType;
    hideToast: (toastId: string) => void;
}

function ToastItem({toast, hideToast}: IProps) {

    const [toastData, setToast] = useState<ToastOptions | null>(null);

    const [animation, setAnimation] = useState<{ in: string, out: string }>({in: '', out: ''});

    let timeout: NodeJS.Timeout;

    useEffect(() => {
        if (toastData && !toast) {
            hideMe();
        } else if (toast && !toastData) {
            showMe();
            if (toast.timeoutDuration) {
                timeout = setTimeout(hideMe, toast.timeoutDuration)
            }

        }
        return () => clearTimeout(timeout);
    }, [toast])

    useEffect(() => {

        if (animation.in && toast) {
            setToast(toast);
        }

        if (animation.out) {
            timeout = setTimeout(() => {
                setToast(null);
                hideToast(toast.id);
            }, 500);
        }

    }, [animation])

    const hideMe = useCallback(() => {
        if (DefaultToastPosition === ToastPosition.BOTTOM_CENTER) {
            setAnimation({out: 'animate__animated animate__slideOutDown animate__faster', in: ''})
        } else {
            setAnimation({out: 'animate__animated animate__slideOutRight animate__faster', in: ''})
        }
    }, []);

    const showMe = useCallback(() => {
        if (DefaultToastPosition === ToastPosition.BOTTOM_CENTER) {
            setAnimation({in: 'animate__animated animate__slideInUp animate__faster', out: ''})
        } else {
            setAnimation({in: 'animate__animated animate__slideInRight animate__faster', out: ''})
        }
    }, []);

    if (!toastData)
        return null;

    return (
        <div className={`toast-${toastData.type} toast ${animation.in} ${animation.out}`}>
            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <div>
                    {iconIllustrationTypes[toastData.type]}
                </div>
                <div className={'toast-text'}>
                    {toast.id} <br/>
                    {toastData.text}
                </div>
            </div>
            <div style={{width: "10%", cursor: 'pointer'}}
                 onClick={hideMe}>{closeIcon()}</div>
        </div>
    )

}