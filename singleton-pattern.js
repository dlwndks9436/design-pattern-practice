function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcesssManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const processManager = Singleton.getProcesssManager();
const processManager2 = Singleton.getProcesssManager();

console.log(processManager === processManager2);
