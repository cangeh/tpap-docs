.. currentmodule:: node

filter
=================================

组件
-----------------------------------------------

  :mod:`node`


方法
-----------------------------------------------

.. function:: filter

    | NodeList **filter** ( filter )
    | 获取符合过滤参数的所有元素.

    :param string filter: 过滤选择器，格式为 tag.cls .

    :returns: 符合过滤参数的 dom 节点数组
    :rtype: NodeList
	
    例如

    .. code-block:: javascript
	
		// 过滤出 class 为 J_on 的 a 元素
	    var els=KISSY.all("a").filter(".J_on");

