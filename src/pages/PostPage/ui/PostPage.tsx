import { Link, useParams } from "react-router-dom"
import { postApi } from "../../../app/services/PostService";
import { ErrorPage } from "../../ErrorPage";
import PostItem from "../../../entities/PostItem";
import styles from "./PostPage.module.css";

export const PostPage = () => {
    const {id} = useParams() as any;
    const {data: post, error, isLoading} = postApi.useGetPostByIdQuery(id)

    return (
        <div className={styles.post_page}>
            {isLoading && <h3>Loading...</h3>}
            {error && <ErrorPage />}
            {post && <PostItem post={post}/>}
            <Link to={`/`}>
                <button type="button">Back</button>
            </Link>         
        </div>
    )
}