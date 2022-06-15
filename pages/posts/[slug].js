import { useRouter } from 'next/router'
import {useState, useEffect} from "react"
import styles from "./styles.module.css"
import axios from "axios"

const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  console.log(slug)

  useEffect(() => {
    if (typeof(slug) !== 'undefined') {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}/comments`)
        .then(res => {
            console.log(res.data)
            setComments(res.data)
        })
        .catch(err => console.log(err))
  }, [post])


  return (
    <div>
        <div className={styles.post}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
        {
            comments.map(comment => {
                return (
                    <div className={styles.commentContainer}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Post