.. currentmodule:: node

index
=================================


组件
-----------------------------------------------

  :mod:`node`


方法
-----------------------------------------------

.. function:: index

    | String **index** ( refer )
    | 如果 refer 不填，则为当前NodeList的第一个元素在其兄弟节点的下标位置
    | 如果 refer 为选择器字符串，则为为匹配当前NodeList的第一个元素在匹配 refer 的所有元素中的位置下标
    | 如果 refer 为 dom 元素或 KISSY Node，则为 refer 在当前NodeList列表中的位置

    :param String|HTMLElement|KISSY.Node refer:  参考节点
    :returns: {Number} - 获取元素在另一批元素的位置信息


