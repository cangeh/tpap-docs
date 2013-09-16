.. currentmodule:: node

test
=================================

组件
-----------------------------------------------

  :mod:`node`


方法
-----------------------------------------------

.. function:: test

    | Boolean **test** (filter [,context=document] )
    | 判断当前NodeList是否都符合过滤条件.
    
    :param string|function filter: 过滤选择器或函数, 具体详见 :func:`dom.filter <dom.filter>`
    :param string|HTMLElement context: 选择器参考上下文, ``#id`` 或者 dom 节点.
    :returns: 当前NodeList是否都符合过滤条件.
    :rtype: Boolean

    例如

    .. code-block:: javascript
	

			// 如果所有 a 标签都包含 J_on 样式则向下进行
			if(KISSY.all("a").test(".J_on")){
				//add your option
			}
