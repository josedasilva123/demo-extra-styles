import styled from "styled-components";

export const StyledBannerBox = styled.div`
    background: url(${({backgroundImage}) => backgroundImage}) center center no-repeat;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;

    .overlay{
        width: 100%;
        height: 300px;
        background: rgba(0,0,0,.45);

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        gap: 30px;

        padding: 30px;
    }

    @media (min-width: 800px){
        .overlay{
            height: 500px;
        }
    }
`