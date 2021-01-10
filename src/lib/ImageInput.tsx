import React, {ChangeEvent, Dispatch, SetStateAction, useRef} from 'react';
import {InputProps} from "./index";
import {closeIcon} from "./SvgIcons";

interface IProps {
    setInputValues: Dispatch<SetStateAction<{ [key: string]: any }>>;
    inputValues: { [key: string]: any };
    item: InputProps;
}

export default function ImageInput({setInputValues, inputValues, item}: IProps) {

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

    return (
        <>
            <div style={{textAlign: "left"}}>
                <label style={{display: "block"}}>{item.label || ''}</label>
                <div
                    style={{
                        padding: 10,
                        textAlign: "center",
                        cursor: "pointer",
                        width: "90%",
                        borderRadius: 5,
                        boxShadow: '#00000075 0px 0px 2px 0px',
                        display: "inline-block",
                    }}
                    onClick={() => {
                        if (inputRef.current) inputRef.current.click();
                    }}
                >
                    Select Image
                </div>
                {inputValues &&
                item.multiple &&
                inputValues.images &&
                inputValues.images.length > 0 ? (
                    <div style={{margin: 5}}>
                    {inputValues.images.length} images selected
                  </div>
                ) : null}
                <input
                    ref={(ref) => {
                        // @ts-ignore
                        inputRef.current = ref;
                    }}
                    value={inputRef.current ? inputRef.current.value : ""}
                    multiple={item.multiple || false}
                    className={'react-custom-input-item'}
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
                        <div
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
                            {closeIcon()}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}