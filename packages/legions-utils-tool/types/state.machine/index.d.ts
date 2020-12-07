interface IStateMachinetransitions {
    transitions: Itransitions[];
}
interface Itransitions {
    /** 状态转换执行函数名称
     *
     * 在状态变换过程中，可以通过on<Name> 在methods定义监听函数
     *
     * 直接通过实例对象xxx.name() 调用执行或者通过exceMethod 传入函数名称执行
     */
    name: string;
    /** 转移前状态
     *  如果是数组，则表示只要转移前数据状态在集合内，则都可以进行转移
     */
    form: string | string[];
    /** 转换后状态 */
    to: string;
}
interface IOnEvent {
    event: string;
    from: string;
    fsm: IStateMachineResult;
    to: string;
    transition: string;
}
interface IStateMachineOptions<obserMethods = {}, lifecycleEvents = {}> extends IStateMachinetransitions {
    /** 初始状态 */
    init: string;
    methods: {
        onBeforeTransition?: (value: IOnEvent) => void;
        onLeaveState?: (value: IOnEvent) => void;
        onTransition?: (value: IOnEvent) => void;
        onEnterState?: (value: IOnEvent) => void;
        onAfterTransition?: (value: IOnEvent) => void;
    } & obserMethods & lifecycleEvents;
}
interface IStateMachineResult {
    allStates: () => string[];
    allTransitions: () => string[];
    can: (state: string) => boolean;
    /** return true if transition t cannot occur from the current state */
    cannot: (state: string) => boolean;
    is: (state: string) => boolean;
    state: string;
    /**  return list of transitions that are allowed from the current state */
    transitions: () => string[];
    exceMethod: (name: string) => void;
    exceObserver: (name: string, ...arg: any[]) => void;
    observe: (name: string, callback: (...arg: any[]) => void) => void;
}
export declare function stateMachine<obserMethods = {}, lifecycleEvents = {}>(options: IStateMachineOptions<obserMethods, lifecycleEvents>): IStateMachineResult & obserMethods;
export {};
