import { StyledPostCard } from "./style"

const PostCard = ({post}) => {
  return (
    <StyledPostCard>
        <img src={post.img} alt={post.title} />
        <div className="postContent">
            <span>{post.category}</span>
            <h3>{post.title}</h3>
            <a href="#">Leia mais</a>
        </div>
    </StyledPostCard>
  )
}

export default PostCard