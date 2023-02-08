import { postsMock } from "../../../services/apiMock";
import AsidePostCard from "./AsidePostCard";

const AsidePostList = () => {
   return (
      <aside>
         <h2>Leia também</h2>
         <ul>
            {postsMock.map((post) => (
               <AsidePostCard key={post.id} post={post} />
            ))}
         </ul>
      </aside>
   );
};

export default AsidePostList;
