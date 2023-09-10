import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import {router} from "./routing";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
// <Provider store={}>
    <RouterProvider router={router} />
// </Provider>
);

