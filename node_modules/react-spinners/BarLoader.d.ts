/** @jsx jsx */
import * as React from "react";
import { SerializedStyles } from "@emotion/core";
import { LoaderHeightWidthProps } from "./interfaces";
export declare class Loader extends React.PureComponent<LoaderHeightWidthProps> {
    static defaultProps: Required<LoaderHeightWidthProps>;
    style: (i: number) => SerializedStyles;
    wrapper: () => SerializedStyles;
    render(): JSX.Element | null;
}
export default Loader;
