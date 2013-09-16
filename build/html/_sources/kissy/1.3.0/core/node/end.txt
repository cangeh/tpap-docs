.. currentmodule:: node



end
==================================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.prototype.end

    | NodeList **end** ()
    | 得到上一次 KISSY.all` 操作前的 NodeList 对象
    
    :returns: 上一步的节点列表对象


    .. code-block:: html

            <p id='p1'>1</p><p id='p2'>2</p>

            <script>
                var KISSY.all('.dom-child1').all('.dom-child2').end(); // KISSY.all('.dom-child1')
            </script>
    
    
    .. hint::

        引入该方法是为了更好的支持链式操作( ``chaining`` )，可以在一个语句内对不同层次得节点集合进行不同的操作.
    
   



