import { useEffect, useRef, useState } from "react";
import { postApi } from "../../../app/services/PostService";
import { ErrorPage } from "../../../pages";
import { Link } from "react-router-dom";
import styles from "./PostsList.module.css";

const PostsList = () => {
    const [page, setPage] = useState(1);
    const maxOffsetHeight = useRef(0);
    const {data: posts, error, isLoading} = postApi.usePartialPostsQuery(page);
    
    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom = 
                Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight;
            if(scrolledToBottom && !isLoading && (maxOffsetHeight.current !== document.body.offsetHeight)) {
                console.log('Fetching more data...');
                setPage(page + 1);
                maxOffsetHeight.current = document.body.offsetHeight;
            }

        };
        document.addEventListener('scroll', onScroll);

        return function() {
            document.removeEventListener('scroll', onScroll);
        };
    }, [page, isLoading])

    return (
        <ul className={styles.posts_list}>
            {isLoading && <h3>Loading...</h3>}
            {error && <ErrorPage />}
            {posts && posts.map(
                post => <li className={styles.post_items} key={post.id}>
                                <span>
                                    #{post.id}. <strong>{post.title}</strong>. {post.body}
                                </span>
                                <Link to={`/posts/${post.id}`}>
                                    <button type="button">Show</button>
                                </Link>
                            </li>)}
        </ul>
    )
}

export {PostsList};