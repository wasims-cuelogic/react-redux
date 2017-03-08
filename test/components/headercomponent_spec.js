import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { Header } from "../../src/app/components/Header";

describe("Component: Header", () => {

    it("renders without exploding", () => {
        expect(
            shallow(
                <Header />
            ).length
        ).to.equal(1);
    });
});