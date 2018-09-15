import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the htn-2018 extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'htn-2018',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension htn-2018 is activated!');
  }
};

export default extension;
