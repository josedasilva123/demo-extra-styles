import styled from "styled-components";

export const StyledAsidePostList = styled.aside`
    ul{
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    @media (min-width: 770px){
        ul{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 950px){
        ul{
            grid-template-columns: 1fr;
        }   
    }
`