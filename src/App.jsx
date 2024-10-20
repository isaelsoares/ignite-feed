import { Header } from "./componentes/Header";
import { Sidebar } from "./componentes/Sidebar";
import { Post } from "./componentes/Post";

import './global.css';

import styles from './App.module.css';

export function App() {
    return (
        <div>
            <Header></Header>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post/>
                    <Post/>
                </main>
            </div>
        </div>
    )
};
