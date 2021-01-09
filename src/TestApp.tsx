import React from 'react';
import {AnimationType, DialogType, ModalProvider, usePopup} from './lib'

const MyComponent = () => {

    const TestComponent = (props:{a:string}) => {

        return (
            <div style={{background:'white'}}>Received Props: {JSON.stringify(props)}</div>
        )

    }

    const {showAlert, showOptionDialog, showInputDialog, showModal, showToast} = usePopup();

    return (
        <>
            <button onClick={() => showModal(<TestComponent a={'test'} />)}>Show Modal</button>
            <button onClick={() => showAlert({type: DialogType.DANGER, text: 'test', title: 'test', animationType: AnimationType.FADE_IN})}>Show Alert</button>
            <button onClick={() => showAlert({type: DialogType.WARNING, text: 'test', title: 'test', animationType: AnimationType.ZOOM_IN})}>Show Alert</button>
            <button onClick={() => showAlert({type: DialogType.SUCCESS, text: 'test', title: 'test'})}>Show Alert</button>
            <button onClick={() => showAlert({type: DialogType.INFO, text: 'test', title: 'test'})}>Show Alert</button>
            <button onClick={() => showOptionDialog({text: 'test', title: 'test'})}>Show Option Dialog
            </button>
            <button onClick={() => showToast({text: 'Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum', type: DialogType.INFO, timeoutDuration: 5000})}>Show Toast
            </button>
            <button onClick={() => showInputDialog({
                title: 'test',
                input: {inputType: 'image', name: 'testinput'},
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>

            <button onClick={() => showInputDialog({
                title: 'test',
                inputs:[{inputType:'text', name:'test'},{inputType:'image', name:"image", multiple:true}],
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>

            <button onClick={() => showInputDialog({
                title: 'test',
                inputs:[{inputType: 'date', name:'test'}],
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

