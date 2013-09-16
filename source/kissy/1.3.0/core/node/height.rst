.. currentmodule:: node


height
========================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.height

    | Number **height** ()
    | 得到当前节点列表第一个节点的计算高度
        
    :rtype: number
    
    ``height()`` 返回不带单位的纯数值, 如图所示：(from jquery)

    .. raw:: html

        <img  src='http://docs.kissyui.com/source/raw/api/core/node/height.png' />



    | NodeList **height** ( value )
    | 设置当前列表每个元素的 css height 值.

    :param number|string value: 代表像素的整数值, 或数字加上其他单位的字符串值.

    .. note::

        在现代浏览器中, css height 属性不包括 padding , border 或者 margin.




