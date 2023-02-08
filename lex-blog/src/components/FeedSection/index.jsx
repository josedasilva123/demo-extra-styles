import AsidePostList from './AsidePostList'
import PostList from './PostList'

const FeedSection = () => {
  return (
    <section>
        <div>
            <PostList />
        </div>
        <div>
            <AsidePostList />
        </div>
    </section>
  )
}

export default FeedSection