import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { useRouter } from 'next/router'
import {useState, useEffect} from "react"
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import Sidebar from '../../components/sidebar';
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

  const itemTemplate = (data) => {
    return (
        <div className={styles.comment}>
            <span>{data.email}</span>
            <h4>{data.name}</h4>
            <p>{data.body}</p>
            <div className={styles.upvoteContainer}>
                <Button icon="pi pi-thumbs-up" disabled={'OUTOFSTOCK'}></Button>
            </div>
        </div>
    );
}

  return (
    <div>
        <Sidebar />
        <div className={styles.post}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
        <div className={styles.DataScroller}>
            <DataScroller value={comments} itemTemplate={itemTemplate} rows={comments?.length} scrollHeight="auto" header="Answers" />
        </div>
    </div>
  )
}

export default Post