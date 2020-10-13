import React from 'react';
import {ModalProvider, usePopup} from './lib'

const MyComponent = () => {

    const {showAlert, showOptionDialog, showInputDialog} = usePopup();

    return (
        <>
            <button onClick={() => showAlert({type: 'error', text: 'test', title: 'test'})}>Show Alert</button>
            <button onClick={() => showOptionDialog({type: 'error', text: 'test', title: 'test'})}>Show Option Dialog
            </button>
            <button onClick={() => showInputDialog({
                title: 'test',
                text: 'enter',
                input: {inputType: 'text', label: 'Input Label', name: 'testinput'},
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>
        </>
    )
}

const App = () => {
    return (
        <MyComponent/>
    )
}

export const Setup = () => {
    return (
        <ModalProvider animated>
            <App/>
        </ModalProvider>
    )
}

