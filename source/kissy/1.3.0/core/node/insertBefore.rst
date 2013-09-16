.. currentmodule:: node


insertBefore
========================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.insertBefore

    | NodeList **insertBefore** ( target )
    | 将当前列表中的每个元素插入到目标元素之前.
   
    :param HTMLElement|string|NodeList target: 将要插入的元素
                                        
        * string : 选择器字符串
        * HTMLElement|NodeList : 已有的元素


    .. code-block:: html

        <div class="container">
          <h2>Greetings</h2>
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>


    我们操纵现有元素

    .. code-block:: javascript

        KISSY.all('h2').insertBefore(KISSY.all('.container'));

    如果目标节点只有一个, 那么当前节点就会移动到目标节点之前

    .. code-block:: html

        <h2>Greetings</h2>
        <div class="container">
          <div class="inner">Hello</div>
          <div class="inner">Goodbye</div>
        </div>

    如果有多个目标节点, 那么除了第一个目标节点外, 其他目标节点前会被插入当前节点的克隆







