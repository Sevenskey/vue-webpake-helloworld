# vue-webpake-helloworld

一个单页应用的Vue-Webpack的脚手架栗子（新手向

## 使用

```
# 开发模式，每次保存页面自动刷新
# localhost:2333
npm run dev 

# 生产环境模式，编译输出压缩后的JS和所有其他静态资源到dist目录
npm run build
```

## 组织结构

```
{
    index.html : {
        bundle.js : {
            main.js : {
                全局设置,
                启动路由 : {
                    路由配置 : [连接所有页面],
                    将路由挂载到钩子上
                }
            }
        }
        style-tag / style.css
    }
}


```

## 目录结构

- dist/ 输出静态资源
- libs/ 自行编写的公用库/函数
- pages/ 页面
- index.html 应用页面入口
- main.js 编译入口
- routes.config.js 页面路由设置
