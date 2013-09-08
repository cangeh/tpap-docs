﻿.. currentmodule:: node

next
=================================

组件
-----------------------------------------------

  :mod:`node`


方法
-----------------------------------------------

.. function:: next

    | HTMLElement **next** (selector [ , filter ])
    | 获取符合选择器的第一个元素的下一个同级节点.
    
    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string|function filter: 过滤条件, 格式参见 :func:`node.filter <node.filter>` 的相应参数
    :returns: 符合选择器的第一个元素的下一个同级节点.
    :rtype: HTMLElement

