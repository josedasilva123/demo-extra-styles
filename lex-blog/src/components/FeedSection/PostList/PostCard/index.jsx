const PostCard = ({post}) => {
  return (
    <li>
        <img src={post.img} alt={post.title} />
        <div>
            <span>{post.category}</span>
            <h3>{post.title}</h3>
            <a href="#">Leia mais</a>
        </div>
    </li>
  )
}

export default PostCard