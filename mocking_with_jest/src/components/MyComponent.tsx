import React from "react";
import {Modal} from "@fluentui/react";
export interface IMyComponentProps{
    text: string;
}

export class MyComponent extends React.Component<IMyComponentProps, any> {
    render(): JSX.Element {
        return <Modal isOpen={true}  >
        text from props:
            {this.props.text}
        </Modal>
   }
}