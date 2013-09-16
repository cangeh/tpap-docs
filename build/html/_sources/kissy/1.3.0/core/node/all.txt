.. currentmodule:: node

all
==================================================

|  该方法的快捷方式为 ``KISSY.all``

组件
-----------------------------------------------

  :mod:`node`

方法
-----------------------------------------------


    | NodeList **KISSY.all** ( selector , [ context ] )
    | 根据选择器字符串得到节点列表
    
    :param string selector: 选择器字符串
    :param HTMLElement|Document|NodeList context:   选择器上下文,
    

            格式参照 :func:`dom.query` ，增加了 :class:`NodeList` 支持.
            
    :rtype: NodeList
    

    | NodeList **KISSY.all**  ( element )

    :param HTMLElement element: 包装成 NodeList 类型的原生 dom 节点
    :rtype: NodeList
    
    | NodeList **KISSY.all**  ( elementArray )

    :param Array<HTMLElement>|HTMLCollection elementArray: 包装成 NodeList 类型的原生 dom 节点集合
    :rtype: NodeList
    
    | NodeList **KISSY.all** ( nodeList )

    :param NodeList nodeList: 克隆出一个新的 NodeList 对象
    :rtype: NodeList        
    
    
    在第一种形式中, KISSY.all() 找到所以匹配选择器参数的原生 dom 节点, 然后创建一个新的 NodeList 对象来指向这些元素, 例如

    .. code-block:: javascript

        KISSY.all("div.foo");
    

    **选择器上下文**

    默认情况下是在文档根节点开始依据选择器字符串开始匹配元素查找. 但是一个上下文可以作为可选的第二个参数来限定查找范围, 例如在事件处理器
    范围内进行查找匹配元素：

    .. code-block:: javascript

        var $=KISSY.all;
        $('div.foo').on("click",function(e) {
          $('span', e.target).addClass('bar');
        });

    当对 ``span`` 的选择限定在 e.target 中时, 只有位于点击元素内的 span 节点会被设置格外的 class.也可以通过 ``$(e.target).all("span")`` 来实现限定搜索范围.


    **使用原生 DOM 节点**

    第二, 第三种方法使用现有的原生 dom 节点来创建 NodeList 对象. 常用的应用场景是从事件处理器的 this 关键字中创建 NodeList 对象

    .. code-block:: javascript

        var $=KISSY.all;
        $('div.foo').on("click",function(e.target) {
          $(e.target).slideUp();
        });

    这个例子会导致元素点击时以滑动的效果隐藏. 因为事件处理器中的 e.target 默认指向原生 dom 节点, 在调用 slideUp 方法前一定要通过 KISSY.all 构建 NodeList 对象.


    **克隆 NodeList 对象**

    当一个 NodeList 对象作为参数传递给 KISSY.all 时, 会返回该对象的克隆对象. 返回的克隆对象和源对象指向同一个原生 dom 节点集合.



Demo
--------------------------------------------------


    **NodeList.all 可以直接获取选择器字符串匹配的节点列表**

    .. code-block:: javascript

        var nl=KISSY.all("div"); // 选择器功能而不是创建 text node
        domNodes=nl.getDOMNodes();
        domNodes[0].nodeType == 1 // => true : Html Element
        domNodes[0].nodeType == 1 // => true : Html Element


    **找到表单内的所有输入框**

    .. code-block:: javascript

        KISSY.all("input","form");

    **设置输入框的内容**

    .. code-block:: javascript

        KISSY.all("input").val("12");

    **隐藏一个表单内的所有输入框**

    .. code-block:: javascript

        KISSY.all(myForm.elements).hide();

                               