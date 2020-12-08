
//@ts-ignore
/* const StateMachine = require('javascript-state-machine'); */
import * as StateMachines from 'javascript-state-machine';
const StateMachine = StateMachines.default;
interface IStateMachinetransitions{
    transitions:Itransitions[];
}
interface Itransitions{
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
    from: string | string[];
    /** 转换后状态 */
    to: string;
}
export interface IOnEvent{
    event: string;
    from: string;
    fsm: IFsm;
    to: string;
    transition: string;
}
interface IStateMachineOptions<obserMethods = {},lifecycleEvents = {
}> extends IStateMachinetransitions{
    /** 初始状态 */
    init: string;
    methods: {
        onBeforeTransition?: (value: IOnEvent) => void;
        onLeaveState?: (value: IOnEvent) => void;
        onTransition?: (value: IOnEvent) => void;
        onEnterState?: (value: IOnEvent) => void;
        onAfterTransition?: (value: IOnEvent) => void;
        
    } & obserMethods&lifecycleEvents
}
interface IFsm{
    allStates: () => string[];
    allTransitions: () => string[];
    can: (state: string) => boolean;
    /** return true if transition t cannot occur from the current state */
    cannot: (state: string) => boolean;
    is: (state: string) => boolean;
    state: string;
    /**  return list of transitions that are allowed from the current state */
    transitions: () => string[];
    observe:(name:string,callback:(...arg: any[])=>void)=>void
}
interface IStateMachineResult{
    fsm: IFsm
    exceMethod: (name: string) => void;
    exceObserver: (name: string,...arg: any[]) => void;
}
type IStateMachineResultFunc<T> = {
    [P in keyof T]:T[P];
}
const firstUpperCase = function(str:string){
    return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase();
    });
}
export function stateMachine<obserMethods={},lifecycleEvents={}>(options:IStateMachineOptions<obserMethods,lifecycleEvents>):IStateMachineResult&obserMethods{
    const fsm = new StateMachine(options);
    //@ts-ignore
    return {
        fsm,
        exceMethod(name:string) {
            fsm[name]&&fsm[name]()
        },
        
        /**
         * 执行监听订阅函数
         *
         * @param {string} name 传入名称跟 transitions[item].name 一致
         * @param {...any[]} arg
         */
        exceObserver(name: string,...arg: any[]) {
            const newName =`on${firstUpperCase(name)}`
            fsm[newName]&&fsm[newName](arg)
        }
    }
}
