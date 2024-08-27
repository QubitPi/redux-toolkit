import { useState } from 'react'
import { Post } from '.'
import { postsApi } from '../../app/services/posts'

export const PostsList = () => {
  const { data, error } = postsApi.endpoints.getPosts.useQuery()
  const [selected, select] = useState<number | undefined>()

  return error ? (
    <>there was an error</>
  ) : !data ? (
    <>loading</>
  ) : (
    <>
      {selected && <Post id={selected} />}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <button onClick={() => select(post.id)}>{post.name}</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostsList
