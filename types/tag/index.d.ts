/// <reference types="react" />

import * as React from 'react';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onClick?: any;
}

export interface CloseableProps extends HTMLAttributesWeak {
    /**
     * closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮
     */
    closeArea?: 'tag' | 'tail';

    /**
     * 点击关闭按钮时的回调
     */
    onClose?: (from: string) => boolean;

    /**
     * 标签关闭后执行的回调
     */
    afterClose?: () => void;

    /**
     * 点击回调
     */
    onClick?: () => void;

    /**
     * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
     */
    size?: 'small' | 'medium' | 'large';
}

export class Closeable extends React.Component<CloseableProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onChange?: any;
}

export interface SelectableProps extends HTMLAttributesWeak {
    /**
     * 标签是否被选中，受控用法
     * tag checked or not, a controlled way
     */
    checked?: boolean;

    /**
     * 标签是否默认被选中，非受控用法
     * tag checked or not by default, a uncontrolled way
     */
    defaultChecked?: boolean;

    /**
     * 选中状态变化时触发的事件
     */
    onChange?: (checked: boolean, e: any) => void;

    /**
     * 标签是否被禁用
     */
    disabled?: boolean;
}

export class Selectable extends React.Component<SelectableProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onClick?: any;
}

export interface TagProps extends HTMLAttributesWeak {
    /**
     * 标签类名前缀,提供给二次开发者用
     */
    prefix?: string;

    /**
     * 标签的类型
     */
    type?: 'normal' | 'primary';

    /**
     * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否开启动效
     */
    animation?: boolean;

    /**
     * 标签出现动画结束后执行的回调
     */
    afterAppear?: () => void;

    /**
     * 点击回调
     */
    onClick?: () => void;
}

export default class Tag extends React.Component<TagProps, any> {
    static Closeable: typeof Closeable;
    static Selectable: typeof Selectable;
}
