.. currentmodule:: node

innerWidth
=================================



Module
-----------------------------------------------

  :mod:`node`


Methods
-----------------------------------------------

.. function:: innerWidth

    | Number **innerWidth** ( )
    | 获取当前NodeList的第一个元素的宽度值, 注意: **该值包含 padding** .
    
    :returns: 符合当前NodeList的第一个元素的宽度值.
    :rtype: Number

    .. code-block:: html

        <div style="width: 100px;">
            <div id="test" style="width: 80%; height: 20px; padding: 10px;"></div>
        </div>
        <script>
            var S = KISSY, $ = S.all,
            elem = $('#test');

            elem.innerWidth(); // 返回 100
            elem.innerHeight(); // 返回 40
        </script>