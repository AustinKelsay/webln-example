import { useRouter } from 'next/router'
import {useState, useEffect} from "react"
import axios from "axios"

const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = useState([])
  console.log(slug)

  useEffect(() => {
    if (typeof(slug) !== 'undefined') {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [])


  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default Post