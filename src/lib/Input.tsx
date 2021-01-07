import React, {Dispatch, SetStateAction} from 'react';
import {InputProps} from "./index";

interface IProps {
    item: InputProps;
    setInputValues: Dispatch<SetStateAction<{[key:string]:any}>>;
    inputValues: {};
}

export default function Input({item, setInputValues, inputValues}: IProps) {

    return (
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
    )

}