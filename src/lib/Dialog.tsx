import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {DialogType, DynamicObject, InputProps, OptionDialogButton} from "./index";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import ImageInput from "./ImageInput";

interface DialogProps {
    title: string,
    text: string,
    type: DialogType,
    hideModal: () => {},
    optionButtons: Array<OptionDialogButton>,
    onConfirm: (result?: DynamicObject) => {},
    onCancel: (result?: DynamicObject) => {},
    isAlert: boolean,
    isInput: boolean,
    confirmText: string,
    cancelText: string,
    showCloseButton: boolean,
    inputs: Array<any>,
    onDismissed: (result?: DynamicObject) => {},
    onOpened: (result?: DynamicObject) => {},
    input: InputProps,
}

const Dialog = (props: DialogProps) => {
    const {
        title,
        text,
        type,
        hideModal,
        optionButtons = null,
        onConfirm = null,
        onCancel = null,
        isAlert = true,
        showCloseButton = false,
        isInput = false,
        confirmText = "Ok",
        cancelText = "Cancel",
        inputs = null,
        onDismissed = null,
        input,
    } = props;

    const [inputValues, setInputValues] = useState<{ [key: string]: any }>(
        input && input["default"] ? {[input.name]: input["default"]} : {}
    );

    let optionsToRender = [];

    if (!isAlert)
        if (optionButtons) optionsToRender = optionButtons;
        else
            optionsToRender = [
                {
                    name: cancelText,
                    onClick: () => {
                        hideModal();
                        if (onCancel) onCancel();
                        if (onDismissed && isInput) onDismissed(inputValues);
                    },
                },
                {
                    name: confirmText,
                    onClick: () => {
                        hideModal();
                        if (onConfirm) onConfirm(inputValues);
                        if (onDismissed && isInput) onDismissed(inputValues);
                    },
                },
            ];
    else
        optionsToRender = [
            {
                name: confirmText,
                onClick: () => {
                    hideModal();
                },
            },
        ];

    let inputsToRender: InputProps[] = [];

    if (isInput) {
        if (!inputs) inputsToRender = [input];
        else inputsToRender = inputs;
    }

    return (
        <div className={'dialog-wrapper'}>
            <Header showCloseButton={showCloseButton} type={type} hideModal={hideModal} title={title}/>
            {text && text !== "" ? <div className={'body-text'}>{text}</div> : null}
            {isInput && (
                <div className={'inputs-container'}>
                    <>
                        {inputsToRender.map((item,index) =>
                            <div key={`input${index}`} className={'input-container'}>
                                {item.inputType !== 'image' ? (
                                        <Input item={item} setInputValues={setInputValues} inputValues={inputValues}/>) :
                                    <ImageInput item={item} setInputValues={setInputValues}
                                                inputValues={inputValues}/>}
                            </div>
                        )}
                    </>
                </div>
            )}
            <Footer optionsToRender={optionsToRender}/>
        </div>
    );
};

export default Dialog;
