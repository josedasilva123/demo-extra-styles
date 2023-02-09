import { postsMock } from "../../../services/apiMock";
import AsidePostCard from "./AsidePostCard";
import { StyledAsidePostList } from "./style";

const AsidePostList = () => {
   return (
      <StyledAsidePostList>
         <h2>Leia também</h2>
         <ul>
            {postsMock.map((post) => (
               <AsidePostCard key={post.id} post={post} />
            ))}
         </ul>
      </StyledAsidePostList>
   );
};

export default AsidePostList;
