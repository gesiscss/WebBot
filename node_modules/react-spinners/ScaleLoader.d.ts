/** @jsx jsx */
import * as React from "react";
import { SerializedStyles } from "@emotion/core";
import { LoaderHeightWidthRadiusProps } from "./interfaces";
declare class Loader extends React.PureComponent<LoaderHeightWidthRadiusProps> {
    static defaultProps: Required<LoaderHeightWidthRadiusProps>;
    style: (i: number) => SerializedStyles;
    render(): JSX.Element | null;
}
export default Loader;
