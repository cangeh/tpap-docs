.. currentmodule:: node

animate
==================================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.animate

    | NodeList **animate** ( props[, duration=1, easing='easeNone', callback, nativeSupport=true] )
    | 在当前节点列表上开始动画.

    :rtype: NodeList

    .. code-block:: javascript

        var node=KISSY.all(".foo");
        node.animate(...);     //对每一个class为foo的元素都进行动画

    所有详细参数请参考 : :class:`~anim.Anim`  构造器接口.

    .. note::

        回调 callback 在每个元素动画结束后都会回调,  this 值指向当前单个元素所属的动画对象.