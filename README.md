# react-custom-popup

react-custom-popup is a plain React package for dealing with popups such as input-dialogs, modals, alerts, toasts.

## Installation

```bash
npm i react-custom-popup
```

## Usage

```jsx padded
// root component file

import {PopupProvider} from "react-custom-popup";

const App = (props) => {
    return (
        <PopupProvider>
            <App {...props}/>
        </PopupProvider>
    );
}
export default App;
```

```jsx padded
// in any other component

import {usePopup, DialogType} from "react-custom-popup";

const MyComponent = (props) => {

    const {showAlert} = usePopup();

    const buttonPressed = () => {

        showAlert({
            title: "Error",
            type: DialogType.WARNING,
            text: "A simple error alert"
        });

    }

    return (
        <button onClick={buttonPressed}></button>
    );
}
export default MyComponent;
```

```jsx padded
// outside of a component

import {PopupActions, DialogType} from "react-custom-popup";

const myFunction = () => {
    PopupActions.showToast({text: 'This is a toast', type: DialogType.WARNING})
}
```

## Available Popups

usePopup() / PopupActions expose:

*   showAlert(options:AlertOptions)
*   hideAlert()
*   showModal(component: JSX.Element)
*   hideModal()
*   showOptionDialog(options: OptionDialogOptions)
*   showInputDialog(options: InputDialogOptions)
*   showToast(options: ToastOptions)

### Alert Options

```typescript
interface AlertOptions {
    text?: string;
    type?: DialogType;
    title?: string;
    confirmText?: string;
    showCloseButton?: boolean;
    animationType?: AnimationType;
}
```

### Option Dialog Options

```typescript
interface OptionDialogOptions {
    title?: string,
    text?: string;
    type?: DialogType;
    optionButtons?: Array<OptionDialogButton>;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    showCloseButton?: boolean;
    animationType?: AnimationType
}

interface OptionDialogButton {
    name: string;
    onClick: () => void
}
```

### Input Dialog Options

```typescript
interface InputDialogOptions {
    title?: string;
    text?: string;
    type?: DialogType;
    options?: Array<OptionDialogButton>;
    onConfirm?: (result?: DynamicObject) => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    inputs?: Array<InputProps>;
    input?: InputProps;
    onDismissed?: () => void;
    showCloseButton?: boolean;
    animationType?: AnimationType;
}

interface InputProps {
    placeholder?: string;
    label?: string;
    inputType: 'text' | 'file' | 'number' | 'image' | 'textarea' | 'date';
    name: string;
    default?: string;
    multiple?: boolean;
}
```

### Toast Options

```typescript
interface ToastOptions {
    text: string;
    type: DialogType;
    position?: ToastPosition;
    timeoutDuration?: number;
    containerStyle?: React.CSSProperties,
    textStyle?: React.CSSProperties
}
```

### Animation Options (For Dialogs Only)

```typescript
enum AnimationType {
    ZOOM_IN = 'ZOOM_IN',
    FADE_IN = 'FADE_IN',
    FLASH = 'FLASH',
    SWING = 'SWING',
    HEART_BEAT = 'HEART_BEAT',
    SLIDE_IN_LEFT = 'SLIDE_IN_LEFT',
    SLIDE_IN_RIGHT = 'SLIDE_IN_RIGHT'
}
````

### Type Options (For Both Dialogs & Toasts)
```typescript
enum DialogType {
    WARNING = 'warning',
    INFO = 'info',
    DANGER = 'danger',
    SUCCESS = 'success'
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)