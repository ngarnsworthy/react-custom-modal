import React, {Fragment, useState, useRef, ChangeEvent} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {DialogType, DynamicObject} from "./index";
import Header from "./Header";
import Footer from "./Footer";

interface DialogProps {
    title: string,
    text: string,
    type: DialogType,
    hideModal: () => {},
    optionButtons: Array<any>,
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
    input: {
        placeholder: string,
        label: string,
        inputType: string,
        name: string,
        default: string,
    },
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
        input = {
            placeholder: "Placeholder",
            label: "Label",
            inputType: "text",
            name: "input",
            default: "",
        },
    } = props;

    const [inputValues, setInputValues] = useState(
        input && input["default"] ? {[input.name]: input["default"]} : {}
    );
    const inputRef = useRef<HTMLInputElement>(null);

    const readImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            let imagePromises: Array<Promise<void>> = [];
            let images: Array<any> = [];
            Array.from(event.target.files).forEach((file: File) => {
                imagePromises.push(
                    new Promise((resolve) => {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            images.push({src: e.target!.result, value: file});
                            resolve();
                        };
                        reader.readAsDataURL(file);
                    })
                );
            });
            Promise.all(imagePromises).then(() => {
                setInputValues({
                    ...inputValues,
                    // @ts-ignore
                    images: inputValues.images
                        ? [...inputValues.images, ...images]
                        : [...images],
                });
                inputRef.current!.value! = "";
                // event.target.reset();
            });
        }
    };

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

    let inputsToRender = [];

    if (isInput) {
        if (!inputs) inputsToRender = [input];
        else inputsToRender = inputs;
    }

    return (
        <div className={'dialog-wrapper'}>
            <Header showCloseButton={showCloseButton} type={type} hideModal={hideModal} title={title}/>
            {text && text !== "" ? <div className={'body-text'}>{text}</div> : null}
            {isInput ? (
                <div className={'inputs-container'}>
                    {input.inputType !== "image" ? (
                        <Fragment>
                            {inputsToRender.map((item) => (
                                <Fragment>
                                    <div style={{textAlign: "left"}}>
                                        <label style={{display: "block", marginBottom: 5}}>
                                            {item.label}
                                        </label>
                                        {item.inputType && item.inputType !== "textarea" ? (
                                            <input
                                                className={'input-item'}
                                                onChange={(val) => {
                                                    setInputValues({
                                                        ...inputValues,
                                                        // @ts-ignore
                                                        [item.name]: val.nativeEvent.target.value,
                                                    });
                                                }}
                                                // @ts-ignore
                                                value={
                                                    inputValues[item.name] ? inputValues[item.name] : null
                                                }
                                                id={item.name}
                                                placeholder={item.placeholder}
                                                type={item.inputType || "text"}
                                            />
                                        ) : null}
                                        {item.inputType === "textarea" ? (
                                            <textarea
                                                onChange={(val) => {
                                                    setInputValues({
                                                        ...inputValues,
                                                        // @ts-ignore
                                                        [item.name]: val.nativeEvent.target.value,
                                                    });
                                                }}
                                                // @ts-ignore
                                                value={
                                                    inputValues[item.name] ? inputValues[item.name] : null
                                                }
                                                className={'input-item'}
                                                id={item.name}
                                                placeholder={item.placeholder}
                                            />
                                        ) : null}
                                    </div>
                                </Fragment>
                            ))}
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div style={{textAlign: "left"}}>
                                <label style={{display: "block"}}>Choose Image(s)</label>
                                <div
                                    style={{
                                        padding: 10,
                                        textAlign: "center",
                                        cursor: "pointer",
                                        backgroundColor: "lightblue",
                                        width: "fit-content",
                                        borderRadius: 5,
                                        display: "inline-block",
                                    }}
                                    onClick={() => {
                                        if (inputRef.current) inputRef.current.click();
                                    }}
                                >
                                    Select Image
                                </div>
                                {inputValues &&
                                inputValues.images &&
                                inputValues.images.length > 0 ? (
                                    <span style={{margin: 5}}>
                    {inputValues.images.length} images selected
                  </span>
                                ) : null}
                                <input
                                    ref={(ref) => {
                                        // @ts-ignore
                                        inputRef.current = ref;
                                    }}
                                    value={inputRef.current ? inputRef.current.value : ""}
                                    multiple
                                    className={'input-item'}
                                    onChange={(val) => readImage(val)}
                                    style={{display: "none"}}
                                    id={"image"}
                                    type={"file"}
                                />
                            </div>
                            <div style={{textAlign: "left"}}>
                                {inputValues &&
                                inputValues.images &&
                                // @ts-ignore
                                inputValues.images.map((image, index) => (
                                    <div
                                        style={{
                                            margin: 5,
                                            display: "inline-block",
                                            position: "relative",
                                        }}
                                    >
                                        <img alt="" style={{maxHeight: 100}} src={image.src}/>
                                        <button
                                            onClick={() =>
                                                setInputValues({
                                                    ...inputValues,
                                                    // @ts-ignore
                                                    images: [
                                                        ...inputValues.images.slice(0, index),
                                                        ...inputValues.images.slice(index + 1),
                                                    ],
                                                })
                                            }
                                            style={{
                                                borderRadius: 5,
                                                position: "absolute",
                                                top: 5,
                                                right: 5,
                                            }}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    )}
                </div>
            ) : null}

            <Footer optionsToRender={optionsToRender}/>
        </div>
    );
};

export default Dialog;
