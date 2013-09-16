.. currentmodule:: node

children
=================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. function:: children

    | NodeList **children** ([ filter ])
    | 获取当前NodeList的所有非文字节点的子节点.
    
    :param string filter: 过滤条件, 格式参见 :func:`node.filter <node.filter>` 的相应参数
    :returns: 获取符合选择器的所有非文字节点的子节点.
    :rtype: NodeList
