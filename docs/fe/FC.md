# FC(formatting context)
formatting context（格式化上下文），它是W3C CSS2.1规范中的一个概念，定义的是页面中的一块渲染区域，并且有一套渲染规则，它决定了**其子元素将如何定位，以及和其他元素的关系和相互作用**。

一般的fc包含:
1.  块级格式化上下文( Block formatting contexts )( BFC )
2.  行内格式化上下文( Inline formatting contexts ) ( IFC )
3.  自适应格式化上下文( Flex Formatting Contexts )( FFC )
4.  网格布局格式化上下文( GridLayout Formatting Contexts )( GFC )

## IFC布局规则：
> 在行内格式化上下文中，框(boxes)一个接一个地水平排列，起点是包含块的顶部。水平方向上的 margin，border 和 padding在框之间得到保留。框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐。包含那些框的长方形区域，会形成一行，叫做行框。
## BFC布局规则：
> 内部的Box会在垂直方向，一个接一个地放置。

> Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠

> 每个元素的左外边缘（margin-left)， 与包含块的左边（contain box left）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。

> BFC的区域不会与float box重叠。

> BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

> 计算BFC的高度时，浮动元素也参与计算

## 怎样形成一个BFC？
1. 根元素或其它包含它的元素
2. 浮动 (元素的 float 不是 none)
3. 绝对定位的元素 (元素具有 position 为 absolute 或 fixed)
4. 非块级元素具有 display: inline-block，table-cell, table-caption, flex, inline-flex
5. 块级元素具有overflow ，且值不是 visible

