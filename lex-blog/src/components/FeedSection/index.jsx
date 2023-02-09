import { StyledContainer } from "../../styles/grid";
import AsidePostList from "./AsidePostList";
import PostList from "./PostList";
import { StyledFeedSectionDisplayDiv } from "./style";

const FeedSection = () => {
   return (
      <section>
         <StyledContainer containerPadding="all">
            <StyledFeedSectionDisplayDiv>
               <div className="left">
                  <h2>Notícias Recentes</h2>
                  <PostList />
               </div>
               <div className="right">
                  <AsidePostList />
               </div>
            </StyledFeedSectionDisplayDiv>
         </StyledContainer>
      </section>
   );
};

export default FeedSection;
