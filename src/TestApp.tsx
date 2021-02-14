import React from 'react';
import {AnimationType, DialogType, OutAnimationType, PopupActions, PopupProvider, usePopup} from './lib'

import './TestApp.css'

function callMe() {
    PopupActions.showToast({text: 'test', type: DialogType.DANGER});
}

const MyComponent = () => {

    const TestComponent = (props: { a: string }) => {

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
            <h2>Modal</h2>
            <div className={'example-button'} style={buttonStyles}
                 onClick={() => showModal(<TestComponent a={'test'}/>, {
                     animationType: AnimationType.SLIDE_IN_UP,
                     outAnimationType: OutAnimationType.SLIDE_OUT_UP
                 })}>Modal
            </div>

            <h2>Alert</h2>
            <div className={'example-button'} style={buttonStyles} onClick={() => showAlert({
                type: DialogType.DANGER,
                text: 'Text',
                title: 'Title',
                animationType: AnimationType.FADE_IN,
                outAnimationType: OutAnimationType.FADE_OUT
            })}>Danger Alert
            </div>
            <div className={'example-button'} style={buttonStyles} onClick={() => showAlert({
                type: DialogType.WARNING,
                text: 'Text',
                title: 'Title',
                animationType: AnimationType.ZOOM_IN
            })}>Warning Alert
            </div>
            <div className={'example-button'} style={buttonStyles}
                 onClick={() => showAlert({
                     type: DialogType.SUCCESS, text: 'Text',
                     title: 'Title',
                 })}>Success
                Alert
            </div>
            <div className={'example-button'} style={buttonStyles}
                 onClick={() => showAlert({
                     type: DialogType.INFO, text: 'Text',
                     title: 'Title',
                     allowOutsideClick: false
                 })}>Info Alert
            </div>
            <div className={'example-button'} style={buttonStyles} onClick={() => showAlert({
                type: DialogType.WARNING,
                text: 'Text',
                title: 'Title',
                animationType: AnimationType.FADE_IN,
                bodyComponent: <TestComponent a={'a'}/>
            })}>Custom Content Alert
            </div>
            <div className={'example-button'} style={buttonStyles} onClick={() => showOptionDialog({
                text: 'Text',
                title: 'Title',
            })}>Option
                Dialog
            </div>
            <div className={'example-button'} style={buttonStyles} onClick={() => showInputDialog({
                title: 'Sign Up',
                showCloseButton: true,
                headerTextStyle: {fontWeight: "bold", fontSize: "x-large"},
                headerStyle: {marginTop:5, marginBottom: 5},
                inputs: [
                    {inputType: 'text', name: 'fname', label: 'First Name'},
                    {inputType: 'text', name: 'lname', label: 'Last Name'},
                    {
                        inputType: 'image',
                        name: 'avatar',
                        label: 'Avatar',
                        multiple: true
                    }, {
                        inputType: 'date',
                        name: 'dob',
                        label: 'Date of Birth'
                    }],
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>
                Input Dialog With Multiple Input Fields
            </div>

            <div className={'example-button'} style={buttonStyles} onClick={() => showInputDialog({
                title: 'Title',
                inputs: [{inputType: 'text', name: 'test'}],
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Input Dialog With Text Field
            </div>

            <div className={'example-button'} style={buttonStyles} onClick={() => showInputDialog({
                title: 'Title',
                inputs: [{inputType: 'date', name: 'test'}],
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Input Dialog With Date
            </div>

            <div className={'example-button'} style={buttonStyles} onClick={() => showInputDialog({
                title: 'Title',
                input: {inputType: 'image', name: 'myimage'},
                onConfirm: (response) => {
                    showAlert({title: 'Result', text: JSON.stringify(response)});
                }
            })}>Input Dialog With Date
            </div>

            <h2>Toast</h2>

            <div className={'example-button'} style={buttonStyles} onClick={callMe}>Toast Outside of Component
            </div>
            <div className={'example-button'} style={buttonStyles} onClick={() => showToast({
                text: 'Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum',
                type: DialogType.INFO,
                timeoutDuration: 5000
            })}>Toast
            </div>

            <div className={'example-button'} style={buttonStyles} onClick={() => showToast({
                customComponent: <TestComponent a={'test'}/>,
                type: DialogType.INFO,
                timeoutDuration: 5000,
            })}>Custom Content Toast
            </div>
        </>
    )
};

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

