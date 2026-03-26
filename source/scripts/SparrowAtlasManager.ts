type SparrowAtlasAnimationData = {
  play(): void;
  stop(): void;
  goToFrame(index: number): void;
  setAnimation(newFrameName: String): void;
};

class SparrowAtlasManager {
  stored: Map<String, HTMLCanvasElement> = new Map();
  storedData: Map<String, SparrowAtlasAnimationData> = new Map();

  static current: SparrowAtlasManager;
  constructor() {}

  static initialize() {
    SparrowAtlasManager.current = new SparrowAtlasManager();
  }

  play(id: String) {
    this.storedData.get(id)?.play();
  }

  stop(id: String) {
    this.storedData.get(id)?.stop();
  }

  goToFrame(id: String, index: number) {
    this.storedData.get(id)?.goToFrame(index);
  }

  setAnimation(id: String, newFrameName: String) {
    this.storedData.get(id)?.setAnimation(newFrameName);
  }
}

SparrowAtlasManager.initialize();

(window as any).SparrowAtlasManager = SparrowAtlasManager;

window.dispatchEvent(new CustomEvent("sparrow-atlas-manager-loaded"));
