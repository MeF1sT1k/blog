import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={styles.error_page}>
            <h1>Ooopsie</h1>
            <small>Unexpected error</small>
        </div>
    )
}