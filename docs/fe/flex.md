# flex布局
为什么会学习flex，要讲到出名的中间自适应两边固定的布局还有经典的垂直水平居中问题。
## 中间自适应两边固定
以前的解决方案有双飞翼和圣杯布局，也是所谓的三栏布局，要求左右定宽，中间自适应，而且中间要先渲染。
### 圣杯布局
```html
    <style>
    * {
        padding: 0;
        margin: 0;
    }
    .content {
        padding-left: 150px;
        padding-right: 190px;
    }
    .left{
        background: #E79F6D;
        width:150px;
        float:left;
        margin-left: -100%;
        position: relative;
        left:-150px;
    }
    .main{
        background: #D6D6D6;
        width:100%;
        float:left;	
    }
    .right{
        background: #77BBDD;
        width:190px;
        float:left;
        margin-right: -190px;
        position: relative;
        right: -190px;
    }

    </style>
</head>
<body>
    <div class="content">
        <div class="main"></div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
```
为了中间main元素不被遮挡，要采用定位来解决。

### 双飞翼布局
双飞翼布局可以看成是对圣杯布局的改进，因为圣杯布局用到的标签属性较多，用着也较麻烦，最早由玉伯提出,对比圣杯布局少了positon多了一个div。
```html
    <style>
    *{
        margin:0;
        border: 0;
    }
    .left{
        float: left;
        width: 100px;
        height: 200px;
        background-color: green;
        margin-left: -100%;
    }

    .right{
        float: left;
        width: 100px;
        height: 200px;
        background-color: blue;
        margin-left:-100px;

    }

    .sub{

        height: 200px;
        background-color: red;
        margin-left: 120px;
        margin-right: 120px;
    }

    .center{
        width: 100%;
        float: left;
    }

    </style>
</head>
<body>
    <div class="center">
        <div class="sub">
            这是中间
        </div>
    </div>
    <div class="left">这是左侧</div>
    <div class="right">这是右侧</div>
</body>
```
### flex
那么针对三栏布局，用flex怎么实现呢？
```html
    *{
        margin:0;
        border: 0;
    }
    .left{
        flex:0 1 100px;
        background-color: blue;
        margin-right: 20px;
        order: -1;
    }

    .right{
        flex:0 1 100px;
        background-color: green;

        order: 1;
    }
    .center{

        background-color: red;
        flex-grow: 1;
        margin-right: 20px;
    }
    .container{
        display: flex;
    }

    </style>
</head>
<body>
        <div class="container">
                <div class="center">
                    这是中间
                </div>  
                <div class="left">这是左侧</div>
    
                <div class="right">这是右侧</div>
        </div>
</body>
```
可以看出来flex便捷而且灵活，语法层面阮一峰的[flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)足够了。
