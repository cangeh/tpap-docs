﻿.. currentmodule:: node


prependTo
========================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.prependTo

    | NodeList **prependTo** ( containers )
    | 将当前节点列表中的每个元素插入到容器列表的每个元素的开头.
    
    :param HTMLElement|string|NodeList content: 将要插入的内容
    
        * HTMLElement|NodeList: 已有的节点
        * string: 选择器字符串, 查找已有的容器节点
    :rtype: NodeList


    考虑下面 html 字符串:

    .. code-block:: html

        <h2>Greetings</h2>
        <div class="container">
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>

    我们把一个已有元素插入到另一个

    .. code-block:: javascript

        KISSY.all('h2').prependTo(KISSY.all('.container'));

    如果容器列表只有一个节点, 那么当前节点列表会被移动到容器内(不是克隆):

    .. code-block:: html

        <div class="container">
          <h2>Greetings</h2>
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>

    不过如果有多个目标容器, 那么除了第一个目标容器, 当前节点列表的复制节点会被插入到其他目标容器




