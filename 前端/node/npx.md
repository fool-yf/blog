##### 最近在看webpack文档的时候，发现有个npx命令。很好奇，之前不都是npm吗？npx是什么鬼？然后找了下资料，对npx有了个简单的认识，记录下。

##### npx从哪里来？
npm v5.2.0引入的一条命令，npx。

##### npx是干什么的？
1. 目的是为了提升开发者使用包内提供的命令行工具的体验。 
2. npx 会自动查找当前依赖包中的可执行文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会帮你安装！

##### 如何使用？
- 运行本地bin文件
```bash
npx webpack
```

- 调用github仓库的命令
```bash
npx github:piuccio/cowsay
```

- 指定node版本以及运行npm命令
```bash
npx -p node@8 npm run build
```

##### 优点？
1. 不用全局安装（npm i -g webpack）
2. 自动加载node_modules中的依赖包，一次性调用，无需本地安装
3. 从github仓库调用命令
4. 指定node版本以及运行npm命令

##### 参考文档
- [https://zhuanlan.zhihu.com/p/27840803](https://zhuanlan.zhihu.com/p/27840803)
- [https://github.com/zkat/npx#readme](https://github.com/zkat/npx#readme)