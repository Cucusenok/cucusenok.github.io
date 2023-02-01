import React, {CSSProperties} from "react";
import {styled} from "@mui/system";


type CollapseContainerProps = {
    height?: string | number,
    borderRadius?: string | number,
    padding?: string | number,
    width?: string | number,
    css?: CSSProperties
}

/*
   -webkit-transition: -webkit-transform 195ms cubic-bezier(.4, 0, 1, 1);
    transition: -webkit-transform 195ms cubic-bezier(.4, 0, 1, 1);
    transition: transform 195ms cubic-bezier(.4, 0, 1, 1);
    transition: transform 195ms cubic-bezier(.4, 0, 1, 1), -webkit-transform 195ms cubic-bezier(.4, 0, 1, 1);
    -webkit-transition-property: all;
    transition-property: all
 */

const TRANSITION = "translateY(100%) 2000ms";
const CollapseRoot = styled('div')<CollapseContainerProps>(({ css }) => ({
    willChange: "transform",
    overflow: "hidden",
    maxHeight: "100%",
    transition: "max-height 1000ms ease-in-out",

    //transition: `${TRANSITION} linear, -webkit-transform 2000ms linear`,
    //webkitTransition: TRANSITION,
    //webkitTransitionProperty: "all",
    //transitionTimingFunction: "linear",
    //transform: "translateY(0%)",

     "@keyframes collapse-animation": {
         "100%": {
             //transform: "translateY(-100%)",
             maxHeight: "0%",
         }
     },
    "@keyframes uncollapse-animation": {
        "100%": {
            //transform: "translateY(-100%)",
            maxHeight: "auto",
        }
    },
    ...css,
}));


type CollapseType = {
    in?: boolean
} & CollapseContainerProps & React.PropsWithChildren;
export const Collapse = (props: CollapseType) => {
    const collapseIn: CSSProperties = {
        //animation: "collapse-animation 2s",
        //animationFillMode: "forwards",
        //transitionTimingFunction: "linear",
        maxHeight: "0%",
        //animation: "fadeIn 1s ease-in-out 3s forwards";

    }
    const collapseOut: CSSProperties = {
        //animation: "uncollapse-animation 2s",
        //animationFillMode: "forwards",
        //transitionTimingFunction: "linear",
        maxHeight: "100%",
    }
    return <CollapseRoot css={!props.in ? collapseOut : collapseIn}>
        { props.children }
    </CollapseRoot>
}

export default Collapse;
