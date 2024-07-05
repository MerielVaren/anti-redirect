export type IProviderConstructor = new () => IProvider;

export type tester = (aElement: HTMLAnchorElement) => boolean;

export interface IProvider {
  test: RegExp | tester | boolean | null;
  onInit?(): Promise<this>;
  resolve(aElementList: HTMLAnchorElement): void;
}
