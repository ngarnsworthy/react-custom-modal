import React, {Fragment, useState, useRef, ChangeEvent} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {DynamicObject} from "../index";

interface OptionDialogProps {
    title: string,
    text: string,
    type: string,
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
        type: string,
        name: string,
        default: string,
    },
}

const OptionDialog = (props: OptionDialogProps) => {
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
            type: "text",
            name: "input",
            default: "",
        },
    } = props;

    const [inputValues, setInputValues] = useState(
        input && input["default"] ? {[input.name]: input["default"]} : {}
    );
    const inputRef = useRef<HTMLInputElement>(null);

    const style = {
        minHeight: "25%",
        // width: "30%",
        minWidth: 300,
        maxWidth: 500,
        textAlign: "center",
        position: "relative",
        backgroundColor: "white",
        overflow: "hidden",
        borderRadius: "10px",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        // animation: "slideDownFade .2s forwards",
    };

    const optionsStyle = {
        display: "flex",
        flexFlow: "row wrap",
        flexDirection: "row",
    };

    const headerStyle = {
        padding: "20px",
        backgroundColor:
            type === "success"
                ? "lightgreen"
                : type === "danger"
                ? "coral"
                : type === "info"
                    ? "lightblue"
                    : type === "warning"
                        ? "orange"
                        : "lightblue",
        textAlign: "left",
    };

    const footerStyle = {
        padding: "20px",
        // backgroundColor: "whitesmoke",
        textAlign: "right",
    };

    const buttonsStyle = {
        borderRadius: "5px",
        boxShadow: "none",
        border: "none",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "5px",
        flex: 1,
        overflow: "hidden"
    };

    const cancelButtonStyle = {
        ...buttonsStyle,
        backgroundColor: "white",
        boxShadow: "#00000075 0px 0px 5px 0px",
        cursor: 'pointer'
    };

    const confirmButtonStyle = {
        ...buttonsStyle,
        backgroundColor: "white",
        boxShadow: "#00000075 0px 0px 5px 0px",
        cursor: 'pointer'
    };

    const titleStyle = {
        fontWeight: "500",
        fontSize: "x-large",
    };

    const textStyle = {
        fontSize: "large",
        textAlign: "left",
        padding: "20px",
    };

    const inputsStyle = {
        padding: "20px",
    };

    const closeIcon = () => <svg color={'#484848'} height={20} width={20} aria-hidden="true" data-prefix="fas"
                                 data-icon="times"
                                 className="svg-inline--fa fa-times fa-w-11" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 352 512">
        <path fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
    </svg>;

    const readImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            let imagePromises: Array<Promise<void>> = [];
            let images: Array<any> = [];
            // @ts-ignore
            event.target.files.forEach((file: File) => {
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
    const inputStyle = {
        padding: "10px",
        border: "1px solid gainsboro",
        borderRadius: "5px",
        overflow: "hidden",
        width: "-webkit-fill-available",
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
                    style: cancelButtonStyle,
                },
                {
                    name: confirmText,
                    onClick: () => {
                        hideModal();
                        if (onConfirm) onConfirm(inputValues);
                        if (onDismissed && isInput) onDismissed(inputValues);
                    },
                    style: confirmButtonStyle,
                },
            ];
    else
        optionsToRender = [
            {
                name: confirmText,
                onClick: () => {
                    hideModal();
                },
                style: confirmButtonStyle,
            },
        ];

    let inputsToRender = [];

    if (isInput) {
        if (!inputs) inputsToRender = [input];
        else inputsToRender = inputs;
    }

    console.log(optionButtons)

    // @ts-ignore
    return (
        // @ts-ignore
        <div style={style}>
            {/*
  // @ts-ignore */}
            <div style={headerStyle}>
                {showCloseButton && (
                    <div style={{position: 'absolute', right: 20, cursor: 'pointer'}}
                         onClick={hideModal}>{closeIcon()}</div>
                )}
                {/*
  // @ts-ignore */}
                <span style={titleStyle}>{title}</span>
            </div>
            {/*
  // @ts-ignore */}
            {text && text !== "" ? <div style={textStyle}>{text}</div> : null}
            {isInput ? (
                <div style={inputsStyle}>
                    {type !== "image" ? (
                        <Fragment>
                            {inputsToRender.map((item) => (
                                <Fragment>
                                    <div style={{textAlign: "left"}}>
                                        {/*
  // @ts-ignore */}
                                        <label style={{display: "block", marginBottom: 5}} for={item.name}>
                                            {item.label}
                                        </label>
                                        {item.inputType && item.inputType !== "textarea" ? (
                                            <input
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
                                                style={inputStyle}
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
                                                style={inputStyle}
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
                                    onChange={(val) => readImage(val)}
                                    style={{...inputStyle, display: "none"}}
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

            { /*
            // @ts-ignore */}
            <div style={footerStyle}>
                {/*
  // @ts-ignore */}
                <div style={optionsStyle}>
                    {optionsToRender.map((option) => (
                        <button style={option.style} onClick={option.onClick}>
                            {option.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OptionDialog;
