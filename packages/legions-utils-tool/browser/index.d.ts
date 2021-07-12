export declare function getNetworkType(): string;
export declare const BrowserMatch: {
    browser: string;
    version: string;
    OS: string;
    init: () => void;
    getOS: () => "Mac" | "Unix" | "Android" | "Linux" | "Win2000" | "WinXP" | "Win2003" | "WinVista" | "Win7" | "Win8" | "Win10" | "其他";
    getDigits: () => string;
    getBrowser: () => {
        browser: string;
        desc: string;
        version: any;
    } | {
        browser: string;
        version: null;
        desc?: undefined;
    };
};
export declare function checkBrowser(openBrowserUpdateMessage: () => void): boolean;
