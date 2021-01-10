import React from 'react';
import {AnimationType, DialogType, PopupActions, PopupProvider, usePopup} from './lib'

function callMe() {
    PopupActions.showToast({text: 'test', type: DialogType.DANGER });
}

const MyComponent = () => {

    const TestComponent = (props: { a: string }) => {

        const {hideModal} = usePopup();

        return (
            <div style={{background: 'white', height: 200, width: 400, borderRadius: 5}}>Received
                Props: {JSON.stringify(props)}
                <button onClick={hideModal}>Hide Me</button>
            </div>
        )

    }

    const {showAlert, showOptionDialog, showInputDialog, showModal, showToast} = usePopup();

    const buttonStyles: React.CSSProperties = {
        display: 'block',
        marginTop:5
    }

    return (
        <>
            <button style={buttonStyles} onClick={() => showModal(<TestComponent a={'test'}/>)}>Show Modal</button>
            <button style={buttonStyles} onClick={() => showAlert({
                type: DialogType.DANGER,
                text: 'test',
                title: 'test',
                animationType: AnimationType.FADE_IN
            })}>Show Danger Alert
            </button>
            <button style={buttonStyles} onClick={() => showAlert({
                type: DialogType.WARNING,
                text: 'test',
                title: 'test',
                animationType: AnimationType.ZOOM_IN
            })}>Show Warning Alert
            </button>
            <button style={buttonStyles} onClick={() => showAlert({type: DialogType.SUCCESS, text: 'test', title: 'test'})}>Show Success Alert
            </button>
            <button style={buttonStyles} onClick={() => showAlert({type: DialogType.INFO, text: 'test', title: 'test'})}>Show Info Alert</button>
            <button style={buttonStyles} onClick={() => showOptionDialog({text: 'test', title: 'test'})}>Show Option Dialog
            </button>
            <button style={buttonStyles} onClick={() => showToast({
                text: 'Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum',
                type: DialogType.INFO,
                timeoutDuration: 5000
            })}>Show Toast
            </button>
            <button style={buttonStyles} onClick={() => showInputDialog({
                title: 'test',
                input: {inputType: 'image', name: 'testinput'},
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>

            <button style={buttonStyles} onClick={() => showInputDialog({
                title: 'test',
                inputs: [{inputType: 'text', name: 'test'}, {inputType: 'image', name: "image", multiple: true}],
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>

            <button style={buttonStyles} onClick={() => showInputDialog({
                title: 'test',
                inputs: [{inputType: 'date', name: 'test'}],
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>

            <button style={buttonStyles} onClick={callMe}>Show Toast Outside of Component
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
        <PopupProvider>
            <App/>
        </PopupProvider>
    )
}

