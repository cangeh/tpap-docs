.. currentmodule:: node

scrollIntoView
=================================

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------

.. function:: scrollIntoView

    | void **scrollIntoView** ([ container = window , top = true , hscroll = true ] )
    | 使当前NodeList出现在指定容器可视区域内.
    
    :param window|HTMLElement container: 指定容器
    :param boolean top: 是否强制元素的上边界与容器的上边界对齐, 左边界和左边界对齐
    :param boolean hscroll: 是否允许容器左右滚动以保证元素显示在其可视区域.
	
	.. code-block:: javascript
	

			//将 id 为 J_t2 的元素显示在当前模块中
			KISSY.all('#J_t2).scrollIntoView();
