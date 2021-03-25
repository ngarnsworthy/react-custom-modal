import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {DialogType, InputProps, OptionDialogButton} from "./index";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import ImageInput from "./ImageInput";

// @ts-ignore
Date.prototype.toDateInputValue = function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
};

interface DialogProps {
    title: string,
    text: string,
    type: DialogType,
    hideModal: () => {},
    optionButtons: Array<OptionDialogButton>,
    onConfirm: (result?: { [key: string]: any }) => {},
    onCancel: (result?: { [key: string]: any }) => {},
    isAlert: boolean,
    isInput: boolean,
    confirmText: string,
    cancelText: string,
    showCloseButton: boolean,
    inputs: Array<InputProps>,
    onDismissed: (result?: { [key: string]: any }) => {},
    onOpened: (result?: { [key: string]: any }) => {},
    input: InputProps,
    headerTextStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
    bodyComponent?: JSX.Element;
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
        headerTextStyle,
        textStyle,
        containerStyle,
        headerStyle,
        footerStyle,
        bodyComponent
    } = props;

    const getDefaultValues = () => {

        let defaultVals = {};

        if (input && !inputs && input.default) {
            if (input.inputType === 'date') {
                // @ts-ignore
                defaultVals[input.name] = (input.default as Date).toDateInputValue();
            } else {
                defaultVals[input.name] = input.default;
            }
        }
        if (inputs && !input) {

            inputs.forEach(i => {
                if (i.default) {
                    if (i.inputType === 'date') {
                        // @ts-ignore
                        defaultVals[i.name] = (i.default as Date).toDateInputValue();
                    } else {
                        defaultVals[i.name] = i.default;
                    }
                }
            })
        }

        return defaultVals;
    }

    const [inputValues, setInputValues] = useState<{ [key: string]: any }>(() => getDefaultValues());

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
        <div className={'react-custom-dialog-wrapper'} style={{...containerStyle}}>
            <Header headerStyle={headerStyle} headerTextStyle={headerTextStyle} showCloseButton={showCloseButton}
                    type={type}
                    hideModal={hideModal} title={title}/>
            {bodyComponent || (
                <>
                    {text && text !== "" ?
                        <div className={'react-custom-body-text'} style={{...textStyle}}>{text}</div> : null}
                    {isInput && (
                        <div className={'react-custom-inputs-container'}>
                            <>
                                {inputsToRender.map((item, index) =>
                                    <div key={`input${index}`} className={'react-custom-input-container'}>
                                        {item.inputType !== 'image' ? (
                                                <Input item={item} setInputValues={setInputValues}
                                                       inputValues={inputValues}/>) :
                                            <ImageInput item={item} setInputValues={setInputValues}
                                                        inputValues={inputValues}/>}
                                    </div>
                                )}
                            </>
                        </div>
                    )}
                </>
            )
            }
            <Footer footerStyle={footerStyle} optionsToRender={optionsToRender}/>
        </div>
    );
};

export default Dialog;
