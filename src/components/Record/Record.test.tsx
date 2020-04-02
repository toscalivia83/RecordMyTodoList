import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { createDefaultStore, createStoreWithState } from "../../redux/store";
import { Store } from "redux";
import { Provider } from "react-redux";
import Record from "./Record";

describe("<Record /> suite", () => {
  let wrapper: ReactWrapper;
  
  const setupTest = (store: Store): void => {
    wrapper = mount(<Provider store={store}> <Record /> </Provider>);
  };
  
  it("should display the record buttons correctly", () => {
    const defaultStore = createDefaultStore();
    const store = createStoreWithState({
      ...defaultStore.getState(),
      record: {
        isDisplaying: false,
        isRecording: false
      }
    });
    setupTest(store);

    expect(wrapper.find("button[name='record']").exists()).toBeTruthy();
    expect(wrapper.find("button[name='stop']").exists()).toBeFalsy();
    expect(wrapper.find("button[name='play']").exists()).toBeFalsy();
    expect(wrapper.find("button[name='clear']").exists()).toBeFalsy();
    
    wrapper.find("button[name='record']").simulate("click");
    expect(wrapper.find("button[name='record']").exists()).toBeFalsy();
    expect(wrapper.find("button[name='stop']").exists()).toBeTruthy();
    expect(wrapper.find("button[name='play']").exists()).toBeFalsy();
    expect(wrapper.find("button[name='clear']").exists()).toBeFalsy();
    
    wrapper.find("button[name='stop']").simulate("click");
    expect(wrapper.find("button[name='record']").exists()).toBeFalsy();
    expect(wrapper.find("button[name='stop']").exists()).toBeFalsy();
    expect(wrapper.find("button[name='play']").exists()).toBeTruthy();
    expect(wrapper.find("button[name='clear']").exists()).toBeTruthy();

  });
});