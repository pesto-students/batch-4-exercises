import React from "react";
import { shallow, mount } from "enzyme";

import App from "../App";

describe("<App /> shallow rendering", () => {
  const wrapper = shallow(<App />);
  it("should have <h1> with title", () => {
    expect(wrapper.find("h1").text()).toBe("TODO List");
  });

  it("should have <input> box", () => {
    expect(wrapper.find("input").length).toBe(1);
  });

  it("should have <label> for input box", () => {
    expect(wrapper.find("label").length).toBe(1);
  });

  it("should have <h2> for Task List heading", () => {
    expect(wrapper.find("h2").length).toBe(1);
  });

  it("should have <ul> for tasks", () => {
    expect(wrapper.find("ul").length).toBe(1);
  });

  it("should have <button> for adding tasks to list", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
});
