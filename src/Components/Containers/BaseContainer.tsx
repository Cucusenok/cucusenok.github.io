import React, {CSSProperties} from "react";
import {styled} from '@mui/system';
import ProfileIconSvg from "../../Resources/Icons/ProfileIconSvg";
import StackIcon from "../../Resources/Icons/StackIconSvg";
import ProjectsIcon from "../../Resources/Icons/ProjectsIconSvg";
import {Link, useLocation} from "react-router-dom";
import {Typography, useTheme} from "@mui/material";
import {useGlobalContext} from "../../common/globalContext";
import { Collapse } from '@mui/material';

const MENU_HEIGHT = 60;

const Content = styled('div')({
    height: `100%`,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
});

const Menu = styled('div')({
    height: `${MENU_HEIGHT}px`,
    width: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
});


type LinkType = {
    icon: (props: React.SVGProps<any>) => JSX.Element,
    link: string,
    name: string,
}

const MENU_ITEMS: Array<LinkType> = [
    {
        icon: ProfileIconSvg,
        link: "/",
        name: "Profile",
    },
    {
        icon: StackIcon,
        link: "/stack",
        name: "Stack",
    },
    {
        icon: ProjectsIcon,
        link: "/projects",
        name: "Projects",
    },
];



const MenuItem = styled(Link)({
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "7px 15px",
})


type ChildrenProps = { css?: CSSProperties }
const Children = styled('div')<ChildrenProps>(({theme, css}) => ({
    maxHeight: `calc(100% - 0px)`,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    overflowY: "auto",
    [theme.breakpoints.up('lg')] : {
        maxHeight: `var(--app-height) !important`,
    },
    ...css
}));

export const RenderMenu = () => {
    const theme = useTheme();
    const location = useLocation();
    const { hideBecauseScroll, screenSize } = useGlobalContext();
    if(screenSize.width < theme.breakpoints.values.lg) {
        return <Collapse in={!hideBecauseScroll}>
            <Menu>
                {
                    MENU_ITEMS.map( i => {
                        const currColor = location.pathname === i.link ? 'white' : 'rgba(255,255,255,0.4)';
                        const icon = React.createElement(
                            i.icon,
                            { color: currColor,},
                        );

                        return <MenuItem to={i.link} key={i.link}>
                            {icon}
                            <Typography color={currColor} variant={"mobileMenu"} >{ i.name }</Typography>
                        </MenuItem>
                    } )
                }
            </Menu>
        </Collapse>
    }
    return null
}

export const BaseContainer = (props: React.PropsWithChildren) => {
    return <Content>
        <Children>
            {props.children}
        </Children>
        <RenderMenu />
    </Content>
}