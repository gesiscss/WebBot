/** @jsx jsx */
import * as React from "react";
import { SerializedStyles } from "@emotion/core";
import { LoaderSizeProps, LengthType } from "./interfaces";
declare class Loader extends React.PureComponent<LoaderSizeProps> {
    static defaultProps: Required<LoaderSizeProps>;
    getSize: () => LengthType;
    style: () => SerializedStyles;
    render(): JSX.Element | null;
}
export default Loader;
