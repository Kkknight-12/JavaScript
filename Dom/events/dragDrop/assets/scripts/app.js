class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px'; // 500px
    tooltipElement.style.top = y + 'px';

    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    // initiating drag
    this.connectDrag();
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  // adding drag event listner function on the item you want to drag
  connectDrag() {
    // seleting the element by this.id and adding event listner dragstart
    document.getElementById(this.id).addEventListener('dragstart', event => {

      // configuring the drag event

      // For dragging text, use the text/plain type. 
      // The second data parameter should be the dragged string
      event.dataTransfer.setData('text/plain', this.id);

      // The DataTransfer object is used to hold the data 
      // that is being dragged during a drag and drop operation.
      // In effect we describe which type of drag and drop opertion 
      // are getting performed
      event.dataTransfer.effectAllowed = 'move';
    });
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);

    // making list dropable, doing this here so that when we drag an element here,
    // we want to be able to drop it here into the list.
    this.connectDroppable();
  }

  // adding connect dropable method which will be trigged from inside constructor
  // so that when we create a new project list we in the end setup this dropable event listner here
  connectDroppable(){
    const list = document.querySelector(`#${this.type}-projects ul`)

    // This event is fired when a dragged element or text selection 
    // enters a valid drop target.
    list.addEventListener('dragenter', event =>{
      if(event.dataTransfer.types[0] === 'text/plain'){
        event.preventDefault();
      }
      list.parentElement.classList.add('droppable'); //will change background color
    })

    // This event is fired continuously when an element 
    // or text selection is being dragged and 
    // the mouse pointer is over a valid drop target
    list.addEventListener('dragover', event => {
       if(event.dataTransfer.types[0] === 'text/plain'){
        event.preventDefault();
      }
    })

    // will trigger when you leave the list with our element
    list.addEventListener('dragleave', event => {
      // only remove class if the leave event trigger 
      // because we left into non child item

      // closest() method travel across the Element and its parents 
      // (heading toward the document root) until it finds a node 
      // that matches the provided selector string.

      // remove the droppable class when you successfully drag and drop 
      // the Active into Finished or visa versa
       if(event.relatedTarget.closest(`#${this.type}-projects ul`) !==list ){
        list.parentElement.classList.remove('droppable') // remove color when you leave the list
      }
    })
    // in events above you can't read the data (id here) you can only access type

    // in drop event you can access data
    list.addEventListener('drop', event => {
      const prjId = event.dataTransfer.getData('text/plain');
      // if list item is picked and droped in the same list(active/finished)
      // then do nothing
      if(this.projects.find( p => p.id === prjId )){
        return;
      }

      // otherwise click the button Finish | Active
      document.getElementById(prjId).querySelector('button:last-of-type').click();
      // remove the class droppable
      list.parentElement.classList.remove('droppable');
      // 
    });
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
