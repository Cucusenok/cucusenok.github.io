import React from "react";
import BaseBackgroundHorizontalSvg from "../../Resources/Backgrounds/BaseBackgroundHorizontalSvg.svg";
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import {BaseBackgroundVerticalSvg} from "../../Resources/Backgrounds/BaseBackgroundVertical";
import logo from "../../logo.svg"

const Content = styled('div')({
    padding: "40px 20px 0 20px"
});

export const BaseMobileContainer = (props: React.PropsWithChildren) => {
    return <Content>
        { props.children }
    </Content>
}