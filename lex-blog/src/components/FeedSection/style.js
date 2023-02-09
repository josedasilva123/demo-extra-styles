import styled from "styled-components";

export const StyledFeedSectionDisplayDiv = styled.div`
   display: flex;
   flex-direction: column;
   gap: 40px;

   .left ul {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
   }

   @media (min-width: 649px) {
      .left ul {
         grid-template-columns: repeat(2, 1fr);
      }
   }

   @media (min-width: 950px) {
    flex-direction: row;
    .right{
        width: 100%;
        max-width: 320px;
    }
   }

   @media (min-width: 1250px) {
      .left ul {
         grid-template-columns: repeat(3, 1fr);
      }
   }
`;
