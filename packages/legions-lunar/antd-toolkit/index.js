/**
  * legions-lunar v0.0.9
  * (c) 2021 duanguang
  * @license MIT
  */
import { Modal } from 'antd';

var OpenModal = function (options) {
    //信息提示样式
    options.type = options.type || 'success';
    var ref = Modal[options.type]({
        title: options.title || '',
        content: options.content || '',
        onOk: function () {
            options.onOk && options.onOk();
            ref.destroy();
        },
    });
};
var OpenDeleteConfirm = function (options) {
    var ref = Modal.confirm({
        title: (options && options.title) || '删除',
        content: (options && options.content) || '您确认删除选中数据吗？',
        okText: (options && options.okText) || '确认',
        okType: (options && options.okType) || 'danger',
        cancelText: (options && options.cancelText) || '取消',
        onOk: function () {
            options.onOk && options.onOk();
            ref.destroy();
        },
        onCancel: function () {
            options.onCancel && options.onCancel();
            ref.destroy();
        },
    });
};
var OpenConfirm = function (options) {
    var ref = Modal.confirm({
        title: options.title || 'confirm',
        content: options.content,
        okText: options.okText || '确认',
        okType: options.okType || 'danger',
        cancelText: options.cancelText || '取消',
        onOk: function () {
            options.onOk && options.onOk();
            ref.destroy();
        },
        onCancel: function () {
            options.onCancel && options.onCancel();
            ref.destroy();
        },
    });
};

/** 下拉框开启labelInValue时的特殊表单验证规则 */
var LabeledValueValidator = function (value, error, callBack) {
    if (value && !value.key) {
        callBack(error);
    }
    else {
        callBack();
    }
};

export { LabeledValueValidator, OpenConfirm, OpenDeleteConfirm, OpenModal };
