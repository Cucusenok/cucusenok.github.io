import React from "react";
import {styled} from "@mui/system";
import {stringOrNumberCssPropertyTransform} from "../../library/componentsUntils";

type SpacerStyledProps = {
    height?: string | number,
}


const SpacerStyled = styled('div')<SpacerStyledProps>(({ height,}) => ({
    height: stringOrNumberCssPropertyTransform(height, "50px"),
}));


export default SpacerStyled;

