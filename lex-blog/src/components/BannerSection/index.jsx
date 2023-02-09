import { highlightMock } from "../../services/apiMock";
import { StyledContainer } from "../../styles/grid";
import { StyledBannerBox } from "./style";

const BannerSection = () => {
   return (
      <section>
         <StyledContainer>
            <StyledBannerBox backgroundImage={highlightMock.img}>
               <div className="overlay">
                  <span>{highlightMock.category}</span>
                  <h1>{highlightMock.title}</h1>
                  <a>Leia mais</a>
               </div>
            </StyledBannerBox>
         </StyledContainer>
      </section>
   );
};

export default BannerSection;
