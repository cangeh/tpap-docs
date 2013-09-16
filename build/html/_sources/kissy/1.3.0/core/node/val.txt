.. currentmodule:: node

val
=================================

组件
-----------------------------------------------

  :mod:`node`


方法
-----------------------------------------------

.. function:: val

    | String **val** ( )
    | 当前NodeList的第一个元素所的 value 值.
    
    :returns:当前NodeList的第一个元素的 value 值. 无值时, 返回空字符串.
	
    例如

    .. code-block:: javascript
	
		// 获取 id 是 J_username 的元素的 value 值
		KISSY.all("#J_username").val();

    

    | void **val** ( value )
    | 给当前NodeList的所有元素设置 value 值.
    
    :param string value: 将要设置的 value 值
	
    例如

    .. code-block:: javascript
	

		// 将 id 是 J_username 的元素的 value 值设置成“张三”
		KISSY.all("#J_username").val("张三");
