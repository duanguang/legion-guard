declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
interface UrlParams extends PropertyDecorator {
    (url?: string): PropertyDecorator;
}
export declare const urlParams: UrlParams;
export {};
