/* eslint import/no-unresolved:0 global-require:0 */
/* eslint no-undef:0 */

import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Store } from './Store';

import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
    render(
        <Provider store={Store}>
            <App />
        </Provider>,
        rootElement
    );
}
