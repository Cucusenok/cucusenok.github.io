import React, {MutableRefObject, useRef} from "react";
import {BaseContainer} from "../../../Components/Containers/BaseContainer";
import {Typography} from "@mui/material";
import Spacer from "../../../Components/Untils/Spacer";
import {useGlobalContext} from "../../../common/globalContext";
import { Collapse } from '@mui/material';
import { BottomSheet } from "../../../Components/BottomSheet/BottomSheet";
import {SearchableLayoutProps} from "./types";
import { Content } from "./styled";
import SearchInput from "../../../Components/SearchInput/SearchInput";



export const SearchableLayout = (props: SearchableLayoutProps) => {
    const { hideBecauseScroll } = useGlobalContext();
    const ref = (useRef<() => void>(null) as MutableRefObject<() => void>);
    const onFilterClick = (event: React.MouseEvent<HTMLElement>) => {
        ref.current()
    }

    return <BaseContainer>
        <BottomSheet openRef={ref} title={props.title}>
            { props.BottomSheet }
        </BottomSheet>
        <Content>
            <Typography variant="h1">
                { props.title }
            </Typography>
            { props.title && <Spacer height={15} /> }
            <Collapse in={!hideBecauseScroll}>
                <SearchInput value={props.searchString}
                             onChange={props.onSearchChange}
                             onFilterClick={onFilterClick}
                             filtersCount={props.filtersCount}
                             onClearClick={props.onClearClick}
                             filterBtn={props.filterBtn}
                />
                <Spacer height={10} />
            </Collapse>
            { props.children }
            <Spacer height={15} />
        </Content>
    </BaseContainer>

}