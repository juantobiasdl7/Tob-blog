import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog =>blog.id !== id );
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        fetch(' http://localhost:8000/blogs')
        .then(res => {
            console.log(res);
            if (!res.ok) {
                throw Error('could not fetch data from that resource...');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch((e) => {
            console.log(e.message);
            setIsPending(false);
            setError(e.message);
        });
    }, []);

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
           { isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Tobías' )} title="Tobías' Blogs!"/>*/}
        </div>
     );
}
 
export default Home;