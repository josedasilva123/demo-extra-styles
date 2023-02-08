import { postsMock } from '../../../services/apiMock'
import PostCard from './PostCard'

const PostList = () => {
  return (
    <ul>
        {postsMock.map(post => (
            <PostCard key={post.id} post={post} />
        ))}
    </ul>
  )
}

export default PostList