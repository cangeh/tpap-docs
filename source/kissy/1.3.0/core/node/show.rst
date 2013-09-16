﻿.. currentmodule:: node

show
==================================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.show

    | NodeList **show** ( [ speed, callback ] )
    | 当前节点列表元素以动画效果显示，没有参数的效果是所有元素直接显示
        
    :param number speed: 单位秒, 动画持续时间, 不设置无动画
    :param function callback: 每个动画结束后回调函数
    :rtype: NodeList    
    
    .. note::

        注意回调 callback 在每个元素动画结束后都会回调,  this 值指向当前单个元素所属的动画对象.