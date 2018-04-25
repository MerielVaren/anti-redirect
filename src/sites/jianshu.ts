import { Provider } from '../provider';
import { matchLinkFromUrl } from '../utils';

export class JianShuProvider extends Provider {
  test = /link\.jianshu\.com\/\?t=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      this.onHover(aElement);
    });
  }
  onHover(aElement: HTMLAnchorElement) {
    this.emit(
      this.ANTI_REDIRECT_DONE_EVENT,
      aElement,
      matchLinkFromUrl(aElement, this.test)
    );
  }
}
