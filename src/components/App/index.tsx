// Core
import { FC } from 'react';

// Components
import { TaskManager } from '../TaskManager';
import { TasksProvider } from "../../context";

const App: FC = () => {
    return (
        <TasksProvider>
            <TaskManager />
        </TasksProvider>
    );
};

export default App;
