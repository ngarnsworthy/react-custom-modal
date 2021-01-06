import React from 'react';
import {ModalProvider, usePopup} from './lib'

const MyComponent = () => {

    const TestComponent = (props:{a:string}) => {

        return (
            <div style={{background:'white'}}>Received Props: {JSON.stringify(props)}</div>
        )

    }

    const {showAlert, showOptionDialog, showInputDialog, showModal} = usePopup();

    return (
        <>
            <button onClick={() => showModal(<TestComponent a={'test'} />)}>Show Modal</button>
            <button onClick={() => showAlert({type: 'danger', text: 'test', title: 'test'})}>Show Alert</button>
            <button onClick={() => showAlert({type: 'warning', text: 'test', title: 'test'})}>Show Alert</button>
            <button onClick={() => showAlert({type: 'success', text: 'test', title: 'test'})}>Show Alert</button>
            <button onClick={() => showAlert({type: 'info', text: 'test', title: 'test'})}>Show Alert</button>
            <button onClick={() => showOptionDialog({type: 'error', text: 'test', title: 'test'})}>Show Option Dialog
            </button>
            <button onClick={() => showInputDialog({
                title: 'test',
                input: {inputType: 'text', name: 'testinput'},
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
        <ModalProvider>
            <App/>
        </ModalProvider>
    )
}

