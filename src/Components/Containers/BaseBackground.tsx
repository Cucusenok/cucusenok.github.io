import React from "react";
import BaseBackgroundHorizontalSvg from "../../Resources/Backgrounds/BaseBackgroundHorizontalSvg.svg";
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import {BaseBackgroundVerticalSvg} from "../../Resources/Backgrounds/BaseBackgroundVertical";
import logo from "../../logo.svg"

const Content = styled('div')({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    overflow: "auto"
});

export const BaseBackground = (props: React.PropsWithChildren) => {
    const isLandscape = useMediaQuery('(orientation: landscape)');

    return <div>
        <div style={{width: "100vw", height: "100vh", background: "red"}}>
            <img src={BaseBackgroundHorizontalSvg} width="100%" height="100%"/>
        </div>
        <Content>
            { props.children }
        </Content>
    </div>
}