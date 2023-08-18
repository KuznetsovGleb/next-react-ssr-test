// Core
import { FC } from "react";

// Components
import { Header } from '../Header';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';
import { Footer } from '../Footer'

import styles from './index.module.scss';

export const TaskManager: FC = () => {

    return (
        <section className={styles.scheduler}>
            <main className={styles.main}>
                <Header />
                <section className={styles.tasksSection}>
                    <TodoForm />
                    <TodoList />
                </section>
                <Footer />
            </main>
        </section>
    );
};
