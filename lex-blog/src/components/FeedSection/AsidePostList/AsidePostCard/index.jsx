import { StyledAsidePostCard } from "./style";

const AsidePostCard = ({ post }) => {
   return (
      <StyledAsidePostCard>
         <a href="">
            <img src={post.img} alt={post.title} />
            <h3>{post.title}</h3>
         </a>
      </StyledAsidePostCard>
   );
};

export default AsidePostCard;
