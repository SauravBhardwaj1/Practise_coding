import { Component } from "react";
import styles from "./ClassComp.module.css"


class ClassComp extends Component {
    render(){
        return(
            <>
                <h1 className={styles.heading}>Hello from Class component</h1>

                <img src="/vite.svg" alt="vite img"/>
            </>
        )
    }
}

export default ClassComp