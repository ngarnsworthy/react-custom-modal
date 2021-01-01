# react-custom-popup

react-custom-popup is a plain React package for dealing with popups/dialogs.

![Alt text](samples/alert.gif?raw=true "Title")
![Alt text](samples/option.gif?raw=true "Title")
![Alt text](samples/input.gif?raw=true "Title")

## Installation

```bash
npm i react-custom-popup
```

## Usage

```jsx padded
// root component file

import {ModalProvider} from "react-custom-popup";

const App = (props) => {
    return (
        <ModalProvider animated>
            <App {...props}/>
        </ModalProvider>
    );
}
export default App;
```

```jsx padded
// in any other component

import {usePopup} from "react-custom-popup";

const MyComponent = (props) => {
    
    const { showAlert } = usePopup();

    const buttonPressed = () =>{           
    
        showAlert({
            title: "Error",
            type: "danger",
            text: "A simple error alert"
        });

    }

    return (
        <button onClick={buttonPressed}></button>
    );
}
export default MyComponent;
```

## Available Popups

usePopup() hook exposes:

*   showAlert(options:AlertOptions)
*   hideAlert()
*   showModal(component:JSX.Element)
*   hideModal()
*   showOptionDialog(options:OptionDialogOptions)
*   showInputDialog(options:InputDialogOptions)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)