/*
 * @Author: duanguang
 * @Date: 2021-11-15 23:11:10
 * @LastEditTime: 2021-11-15 23:14:26
 * @LastEditors: duanguang
 * @Description: 
 * @FilePath: /legion-guard/packages/legions-lunar/src/antd-toolkit/checkBrowser.tsx
 * 「扫去窗上的尘埃，才可以看到窗外的美景。」
 */
import { notification } from 'antd';
import React from 'react';
import { checkBrowser } from 'legions-utils-tool/browser'

const notifications = () => {
    const key = `open${Date.now()}`;
    notification.warning({
        btn: (<a href="http://browsehappy.osfipin.com/">
            立即升级
        </a>),
        duration: void 0,
        key,
        className: key,
        message: (<span style={{ color: 'red' }}>浏览器升级通知</span>),
        description: (<div><p>您的浏览器版本过低，可能无法使用部分功能。</p><p>为了获得更好的使用体验，请您升级。</p><p style={{ color: 'red' }}>推荐使用谷歌，火狐浏览器!</p></div>),
    })
    let closeDom = document.getElementsByClassName(key);
    if (closeDom && closeDom.length > 0) {
        closeDom = closeDom[0].getElementsByClassName('ant-notification-notice-close');
        if (closeDom && closeDom.length > 0) {
            let closeDoms = closeDom[0];
            closeDoms.setAttribute('style','display:none')
        }
    }
}
/** 浏览器版本过低时，弹出提示 */
export const checkBrowsers=checkBrowser(notifications)