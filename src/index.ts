import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ILauncher
} from '@jupyterlab/launcher';

import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';

/**
 * Initialization data for the htn-2018 extension.
 */


const plugin: JupyterLabPlugin<void> = {
  id: 'htn-2018',
  autoStart: true,
  requires: [ILauncher],
  activate
};

class KnocknockWidget extends Widget {

  readonly img: HTMLImageElement;

  constructor() {
    super();

    this.id = 'knocknock';
    this.title.label = 'Knocknock';
    this.title.closable = true;

    this.img = document.createElement('img');
    this.img.src = 'https://i.imgur.com/wXVZMRD.png';
    this.node.appendChild(this.img)
  }
}

function activate(app: JupyterLab, launcher: ILauncher){

  let widget: KnocknockWidget;
  const { commands } = app;

  commands.addCommand('knocknock:open', {
    label: 'Knocknock',
    iconClass: 'jp-MaterialIcon knocknock_icon',
    caption: 'Open Knocknock helper',
    execute: () => {
      //let cwd = browserFactory.defaultBrowser.model.path;
      //return createNewDIO(cwd);
      if (!widget){
        //Create a new widget if one does not exist
        widget = new KnocknockWidget();
        widget.update();
      }
      //if(!tracker.has(widget)){
      //  tracker.add(widget);
      //}
      if(!widget.isAttached){
        app.shell.addToMainArea(widget);
      }else{
        widget.update();
      }

      //Activate the widget
      app.shell.activateById(widget.id);
    }
});

  if (launcher) {
    launcher.add({
      command: 'knocknock:open',
      rank: 2,
      category: 'Other'
    });
}
  
}

export default plugin;
