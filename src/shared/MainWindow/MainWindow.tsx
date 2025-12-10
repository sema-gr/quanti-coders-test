import { Form } from '../Form/Form';
import { TypeAssistance } from '../TypeAssistance/TypeAssistance';
import './MainWindow.css';

export function MainWindow() {
    return (
        <div className="main-window">
            <Form />
            <TypeAssistance />
        </div>
    );
}
