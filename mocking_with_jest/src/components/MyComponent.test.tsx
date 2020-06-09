import React from 'react';
import { render } from '@testing-library/react';
import {MyComponent} from './MyComponent';
import { mount, configure } from 'enzyme';
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({adapter: new ReactSixteenAdapter()})
it('renders the modal', () => {

    const acutalModule = require.requireActual("@fluentui/react");
    const dialogMock = require("./mocks/DialogMock");
    acutalModule.Modal = dialogMock.Modal;

    jest.mock("@fluentUi/react", () => {
        return acutalModule
    }) 
   // test
   const myComponent = mount(<MyComponent text={"some text"}/>);

   // compare
   expect(myComponent.html()).toMatchSnapshot();
});
