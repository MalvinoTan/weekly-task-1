/** Styles */
import styles from "./style.module.css";

/** Bootstrap Components */
import { Nav } from "react-bootstrap";

const Tab = ({ data }) => {
    return (
        <Nav.Item className={styles.nav_item}>
            <Nav.Link className={styles.nav_text} eventKey={data.eventKey}>{data.title}</Nav.Link>
        </Nav.Item>
    );
};

export default Tab;