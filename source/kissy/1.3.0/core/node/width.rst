.. currentmodule:: node


width
========================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.width

    | NodeList **width** ()
    | 得到当前节点列表第一个节点的计算宽度 ，该函数返回不带单位的纯数值
        
    :rtype: number

       
    | NodeList **width** ( value )
    | 设置当前列表每个元素的 css width 值.
    
    :param number|string value: 代表像素的整数值, 或数字加上其他单位的字符串值.
    
    .. note::

        在现代浏览器中, css width 属性不包括 padding , border 或者 margin.


    例子可参考 :meth:`~node.NodeList.height`