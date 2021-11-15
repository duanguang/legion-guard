import { BrowserMatch } from 'legions-utils-tool/browser'
interface ILoggerManagerConsoleLog {
    type: string;
    logConent?: string;
    /**  */
}
interface IReportApi {
    /*上报接口*/
    api: (params: {
        modulesPath?: string;
        type: string;
        content: string;
        modulesName?: string;
        userInfo?: string;
        traceId: string;
        browserEnvironment: string;
    }) => any
}
declare function loggerReport(params: {
    modulesPath?: string;
    type: string;
    content: string;
    modulesName?: string;
    userInfo?: string;
    traceId: string;
    browserEnvironment: string;
}): any
interface ILoggerManagerReport
    extends Pick<ILoggerManagerConsoleLog,'type' | 'logConent'> {
    traceId: string;
    modulesPath?: string;
    content: string;
    modulesName?: string;
    userInfo?: string;
    browserEnvironment?: string;
}
/** 日志记录 */
export const LoggerManager = {
    consoleLog: (options: ILoggerManagerConsoleLog) => {
        const logConent = options.logConent || {};
        console.log({ value: { ...logConent },type: options })
    },
    /** 采集数据上报到数仓 */
    report: (options: ILoggerManagerReport,
        reportApi: IReportApi['api']) => {
        BrowserMatch.init();
        const params: Parameters<typeof loggerReport>[0] = {
            ...options,
            browserEnvironment: JSON.stringify({
                platform: navigator.platform,
                OS: BrowserMatch.OS,
                browser: BrowserMatch.browser,
                version: BrowserMatch.version,
            }),
        };
        /// 上报代码   实时上报
        if (typeof reportApi === 'function') {
            reportApi && reportApi(params);
        }
    },
};