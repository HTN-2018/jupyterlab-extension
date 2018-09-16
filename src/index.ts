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
  readonly stylesheet_1: HTMLLinkElement;
  readonly stylesheet_2: HTMLLinkElement;
  readonly script_1: HTMLScriptElement;


  constructor() {
    super();

    this.id = 'knocknock';
    this.title.label = 'Knocknock';
    this.title.closable = true;
    this.addClass('jp-knocknock_widget');

    this.stylesheet_1 = document.createElement('link');
    this.stylesheet_1.rel = 'stylesheet';
    this.stylesheet_1.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    this.node.appendChild(this.stylesheet_1);

    this.stylesheet_2 = document.createElement('link');
    this.stylesheet_2.rel = 'stylesheet';
    this.stylesheet_2.href = 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css';
    this.node.appendChild(this.stylesheet_2);

    this.script_1 = document.createElement('script');
    this.script_1.defer = true;
    this.script_1.src = 'https://code.getmdl.io/1.3.0/material.min.js';
    this.node.appendChild(this.script_1);

    this.img = document.createElement('img');
    this.img.src = 'https://i.imgur.com/wXVZMRD.png';
    this.img.className = 'jp-knocknock_logo';
    this.node.appendChild(this.img)

    this.img.insertAdjacentHTML('afterend',
    `
    <h3 class="login_field">Login to Account</h3>
    
    <div style="width: 250px; margin: auto; margin-top: 10px; margin-bottom: 10px">
    <input class="mdl-textfield__input" type="text" id="email">
    <label for="email">Email</label>
    </div>

    <div style="width: 250px; margin: auto; margin-top: 10px; margin-bottom: 10px">
    <input class="mdl-textfield__input" type="password" id="password">
    <label for="password">Password</label>
    </div>

    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style="width: 250px; margin: auto; margin-top: 20px; margin-bottom: 20px">
    Login to Knocknock
    </button>`
    );
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
