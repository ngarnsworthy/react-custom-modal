import React from 'react';
import {AnimationType, DialogType, OutAnimationType, PopupActions, PopupProvider, usePopup} from './lib'

function callMe() {
    PopupActions.showToast({text: 'test', type: DialogType.DANGER});
}

const MyComponent = () => {

    const TestComponent = (props: { a: string }) => {

        const {hideModal} = usePopup();

        return (
            <div style={{background: 'white', borderRadius: 5, width: 500, padding: 20}}>
                <h4> Fantasy T-shirt</h4>
                <label className={"text-muted"}>Shirts</label>
                <h3 className={"mt-3"} style={{fontWeight: 600, fontSize: "20px"}}>
                    $39.99
                </h3>
                <p className={"mt-3"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
                    sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
                    perferendis voluptates laboriosam. Distinctio, officia quis dolore
                    quos sapiente tempore alias.
                </p>
                Received
                Props: {JSON.stringify(props)}
                <button onClick={hideModal}>Hide Me</button>
            </div>
        )

    }

    const {showAlert, showOptionDialog, showInputDialog, showModal, showToast} = usePopup();

    const buttonStyles: React.CSSProperties = {
        display: 'block',
        marginTop: 5
    }

    return (
        <>
            <button style={buttonStyles}
                    onClick={() => showModal(<TestComponent a={'test'}/>, AnimationType.SLIDE_IN_UP, OutAnimationType.SLIDE_OUT_UP)}>Show Modal
            </button>
            <button style={buttonStyles} onClick={() => showAlert({
                type: DialogType.DANGER,
                text: 'Text',
                title: 'Title',
                animationType: AnimationType.FADE_IN,
                outAnimationType: OutAnimationType.FADE_OUT
            })}>Show Danger Alert
            </button>
            <button style={buttonStyles} onClick={() => showAlert({
                type: DialogType.WARNING,
                text: 'Text',
                title: 'Title',
                animationType: AnimationType.FADE_IN,
                bodyComponent: <TestComponent a={'a'} />
            })}>Show Custom Content Alert
            </button>
            <button style={buttonStyles} onClick={() => showAlert({
                type: DialogType.WARNING,
                text: 'Text',
                title: 'Title',
                animationType: AnimationType.ZOOM_IN
            })}>Show Warning Alert
            </button>
            <button style={buttonStyles}
                    onClick={() => showAlert({
                        type: DialogType.SUCCESS, text: 'Text',
                        title: 'Title',
                    })}>Show Success
                Alert
            </button>
            <button style={buttonStyles}
                    onClick={() => showAlert({
                        type: DialogType.INFO, text: 'Text',
                        title: 'Title',
                        allowOutsideClick: false
                    })}>Show Info Alert
            </button>
            <button style={buttonStyles} onClick={() => showOptionDialog({
                text: 'Text',
                title: 'Title',
            })}>Show Option
                Dialog
            </button>
            <button style={buttonStyles} onClick={() => showToast({
                text: 'Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum',
                type: DialogType.INFO,
                timeoutDuration: 5000
            })}>Show Toast
            </button>
            <button style={buttonStyles} onClick={() => showInputDialog({
                title: 'Choose Image',
                input: {inputType: 'image', name: 'testinput'},
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>

            <button style={buttonStyles} onClick={() => showInputDialog({
                title: 'Title',
                inputs: [{inputType: 'text', name: 'test'}, {inputType: 'image', name: "image", multiple: true}],
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Show Input Dialog
            </button>

            <button style={buttonStyles} onClick={() => showInputDialog({
                title: 'Title',
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

