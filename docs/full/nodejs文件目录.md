# nodejs文件目录
## __dirname和__filename和process.cwd()三者的区别
1.process cwd() 方法返回 Node.js 进程当前工作的目录

例：我在F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process 这个文件加下面创建了一个test.js在该js文件中写下下面的代码，然后右键 run test.js

const cwd = process.cwd();
console.log(cwd);

输出如下 F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process

2.__dirname 是node的一个全局变量，获得当前文件所在目录的完整目录名
还在上面的js文件中输入一下代码
console.log(__dirname)
输出如下 F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process

现在一看感觉上面两个方法是一样的，其实不是。node.js进程当前工作的目录有可能不是该文件所在目录的完整目录。例如：我用node webpack ..打包了一个应用程序，
我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中console.log(cwd)
在完整的这个页面架构中执行启动这个项目的命令，则对应的cwd就是当前项目所在的绝对路径,而不是应用程序的路径

3.__filename 也是node的全局变量 Node.js中，在任何模块文件内部，可以使用__filename变量获取当前模块文件的带有完整绝对路径的文件名

console.log(__filename)
F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process\test.js