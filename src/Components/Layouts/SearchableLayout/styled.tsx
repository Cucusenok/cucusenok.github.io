import {styled} from "@mui/system";
import {ScrollableListContainerProps} from "./types";
import Tab from "@mui/material/Tab";

export const Content = styled('div')({
    padding: "40px 20px 0 20px",
});


export const StackItemContainer = styled('div')({})

export const TabStyled = styled(Tab)({
    color: "rgba(255,255,255,0.4)",
});


export const ScrollableListContainer = styled('div')<ScrollableListContainerProps>(({theme, hideBecauseScroll}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    overflowY: "auto",
    height: `100%`,
    maxHeight: `calc(var(--app-height) - ${!hideBecauseScroll ? 240 : 110}px)`,
    [theme.breakpoints.up('lg')]: {
        height: '100%',
        maxHeight: 'calc(var(--app-height) - 190px) !important',
    }
}));

export const ScrollBottomSpacer = styled('div')(({theme}) => ({
    width: "100%",
    minHeight: "80px",
    [theme.breakpoints.up('lg')]: {
        display: "none"
    }
}));