.. currentmodule:: node

item
==================================================



组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. method:: NodeList.item

    | NodeList **item** ( index )
    | 获取包含当前节点列表 index 位置处的单个原生节点的新 NodeList 对象
    
    :returns: null 或者包含一个原生节点的 NodeList 对象
    :rtype: NodeList


    .. code-block:: html

        <div class='a a1'>
        </div>
        <div class='a a2'>
        </div>

        <script>
            KISSY.all(".a").item(0).hasClass("a1")  // => true
            KISSY.all(".a").item(1).hasClass("a1")  // => false
            KISSY.all(".a").item(0).hasClass("a2")  // => false
            KISSY.all(".a").item(1).hasClass("a2")  // => true
        </script>