const AsidePostCard = ({ post }) => {
   return (
      <li>
         <a href="">
            <img src={post.img} alt={post.title} />
            <h3>{post.title}</h3>
         </a>
      </li>
   );
};

export default AsidePostCard;
