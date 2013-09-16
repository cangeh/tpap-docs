.. currentmodule:: node

contains
=================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. function:: contains

    | Boolean **contains** (contained)
    | 判断当前节点是否包含目标(contained)节点.


    :param string|HTMLElement|ArrayList<HTMLElement>|HTMLDcoument|TextNode contained: 检测节点.

        * 字符串格式参见 :ref:`KISSY selector <dom-selector>` 获取匹配的第一个元素.
        * ArrayList<HTMLElement> : 取列表第一个元素

    :returns: container 是否包含 contained 节点.
    :rtype: Boolean

    .. note::

        两个元素如果相等, 则返回 ``false``

    .. code-block:: javascript

             <div class="dom-father">
                    <div class="dom-child1"></div>
                    <div class="dom-child2"></div>
             </div>

            S.all('.dom-father').contains(S.all('.dom-child1'))   //true