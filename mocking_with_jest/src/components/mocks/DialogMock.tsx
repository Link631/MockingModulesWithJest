import React from "react";

interface IProps {
    containerClassName: string;
    isOpen: boolean;
    onDismiss: () => void;
    isBlocking: boolean;
    dragOptions: any;
    closeButtonAriaLabel: string;
    id: string;
}

class MyModal extends React.Component<IProps, any> {
    static setAppElement() {
        // in our application we use #setAppElement for accessibility
        // if you use this or any other functions you'll have to mock them
    }

    render(): JSX.Element {
    return <>passed properties to modal mock: {JSON.stringify(this.props)} {this.props.children}</>;
    }
}

const Modal: React.FunctionComponent<IProps> = (props: IProps) => {
    return <MyModal {...props}></MyModal>;
};

export {Modal};
