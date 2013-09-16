.. currentmodule:: node

parent
=================================

组件
-----------------------------------------------

  :mod:`node`


方法
-----------------------------------------------

.. function:: parent

    | NodeList **parent** ([ filter ])
    | 获取当前NodeList的第一个元素的祖先元素.
    
    :param number|string filter: 过滤条件,

    :returns: 当前NodeList的第一个元素的祖先元素.
    :rtype: NodeList

    .. code-block:: javascript

        var S = KISSY, DOM = S.DOM,
        elem = S.get('#id');

        // 返回 elem.parentNode
        elem.parent();

        // 返回 elem.parentNode.parentNode
        elem.parent(2);

        // 寻找 elem 的祖先节点, 返回第一个拥有 container class 值的祖先
        elem.parent('.container');

        // 寻找 elem 的祖先节点, 返回第一个 tagName 为 ul 的祖先
        elem.parent('ul');
