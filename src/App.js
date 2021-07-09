import axios from 'axios'
import './App.css';
import {useEffect , useState} from 'react'
import Post from './component/post'
import Pagination from './component/pagination';

function App() {
  const [posts ,setPosts ] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(()=>{
    const fetchPost = async() => {
      setLoading(true)
     const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPost()
    
  },[])

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  const pag =(pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container">
      <h1 className='text-primary mb-3'>My blog</h1>
      <Post posts={currentPost} loading={loading}/>
      {posts  && (<Pagination postPerPage={postPerPage} totalPost={posts.length} pag={pag}/>)}
    </div>
  );
}

export default App;
