import styled from "styled-components";

export const StyledAuthorSectionDisplayDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    .left, .right{
        width: 100%;
    }

    @media (min-width: 950px){
        flex-direction: row;
    }
`