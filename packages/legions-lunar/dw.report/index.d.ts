interface ILoggerManagerConsoleLog {
    type: string;
    logConent?: string;
}
interface IReportApi {
    api: (params: {
        modulesPath?: string;
        type: string;
        content: string;
        modulesName?: string;
        userInfo?: string;
        traceId: string;
        browserEnvironment: string;
    }) => any;
}
interface ILoggerManagerReport extends Pick<ILoggerManagerConsoleLog, 'type' | 'logConent'> {
    traceId: string;
    modulesPath?: string;
    content: string;
    modulesName?: string;
    userInfo?: string;
    browserEnvironment?: string;
}
/** 日志记录 */
export declare const LoggerManager: {
    consoleLog: (options: ILoggerManagerConsoleLog) => void;
    /** 采集数据上报到数仓 */
    report: (options: ILoggerManagerReport, reportApi: IReportApi['api']) => void;
};
export {};
