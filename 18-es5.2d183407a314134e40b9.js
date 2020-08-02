!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{yVrQ:function(t,d,o){"use strict";o.r(d),o.d(d,"UtilModule",(function(){return k}));var a,c,r,i,n,s,l,p,h=o("tyNb"),m=o("PCNd"),u=o("0qEG"),g=o("fXoL"),y=o("II6v"),b=[{path:"",component:u.a,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:(l=function t(){e(this,t),this.item={cols:1,urls:{"en-US":"packages/util/docs/getting-started.en-US.md","zh-CN":"packages/util/docs/getting-started.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p><code>@delon/util</code> is a collection of tool functions.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><p>Installing <code>@delon/util</code> dependency package:</p><pre class="hljs language-bash"><code>yarn add @delon/util</code></pre><p>Import the <code>DelonUtilModule</code> in to your root AppModule.</p><pre class="hljs language-typescript"><code>import { DelonUtilModule } from \'@delon/util\';\n\n@NgModule({\n  imports: [\n    DelonUtilModule\n  ]\n})\nexport class AppModule { }</code></pre><h2 id="Parameters"><a class="lake-link"><i data-anchor="Parameters"></i></a>Parameters</h2><p>You can override <span>ArrayService</span> to set the mapping name through <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>.</p></section>',meta:{order:1,title:"Getting Started",type:"Documents"},toc:[{id:"Usage",title:"Usage",h:2},{id:"Parameters",title:"Parameters",h:2}]},"zh-CN":{content:'<section class="markdown"><p>@delon/util \u662f\u4e00\u7ec4\u65e5\u5e38\u666e\u901a\u4f7f\u7528\u7684\u5de5\u5177\u51fd\u6570\u7684\u96c6\u5408\u3002</p><h2 id="\u5982\u4f55\u4f7f\u7528"><a class="lake-link"><i data-anchor="\u5982\u4f55\u4f7f\u7528"></i></a>\u5982\u4f55\u4f7f\u7528</h2><p>\u5b89\u88c5 <code>@delon/util</code> \u4f9d\u8d56\u5305\uff1a</p><pre class="hljs language-bash"><code>yarn add @delon/util</code></pre><p>\u5bfc\u5165 <code>DelonUtilModule</code> \u6a21\u5757\uff1a</p><pre class="hljs language-typescript"><code>import { DelonUtilModule } from \'@delon/util\';\n\n@NgModule({\n  imports: [\n    DelonUtilModule\n  ]\n})\nexport class AppModule { }</code></pre><h2 id="\u53c2\u6570"><a class="lake-link"><i data-anchor="\u53c2\u6570"></i></a>\u53c2\u6570</h2><p>\u53ef\u4ee5\u901a\u8fc7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5c40\u914d\u7f6e</a>\u8986\u76d6 <code>ArrayService</code> \u8bbe\u7f6e\u6620\u5c04\u540d\u79f0\u3002</p></section>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{id:"\u5982\u4f55\u4f7f\u7528",title:"\u5982\u4f55\u4f7f\u7528",h:2},{id:"\u53c2\u6570",title:"\u53c2\u6570",h:2}]}},demo:!1},this.codes=[]},l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=g.Jb({type:l,selectors:[["app-util-getting-started"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){1&e&&g.Qb(0,"app-docs",0),2&e&&g.oc("codes",t.codes)("item",t.item)},directives:[y.a],styles:["[_nghost-%COMP%] { display: block }"]}),l)},{path:"array",redirectTo:"array/zh",pathMatch:"full"},{path:"array/:lang",component:(s=function t(){e(this,t),this.item={cols:1,urls:{"en-US":"packages/util/src/array/index.en-US.md","zh-CN":"packages/util/src/array/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Used for conversion and access between arrays and trees. It is generally used with <code>nz-tree</code>.</p><h2 id="treeToArr"><a class="lake-link"><i data-anchor="treeToArr"></i></a>treeToArr</h2><p>Convert tree structure to array structure.</p><p><strong>options</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>deepMapName</code></td><td>Deep map name</td><td><code>string</code></td><td><code>deep</code></td></tr><tr><td><code>parentMapName</code></td><td>Parent item map name of flat array</td><td><code>string</code></td><td><code>parent</code></td></tr><tr><td><code>childrenMapName</code></td><td>Source data children map name</td><td><code>string</code></td><td><code>children</code></td></tr><tr><td><code>clearChildren</code></td><td>Whether remove <code>children</code> item</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>cb</code></td><td>Callback event</td><td><code>(item: any, parent: any, deep: number) => void</code></td><td>-</td></tr></tbody></table><h2 id="arrToTree"><a class="lake-link"><i data-anchor="arrToTree"></i></a>arrToTree</h2><p>Convert array structure to tree structure.</p><blockquote><p>If <code>parent_id</code> is a string, the root value <strong>Make Sure</strong> is an empty string.</p></blockquote><p><strong>options</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>idMapName</code></td><td>Id map name</td><td><code>string</code></td><td><code>id</code></td></tr><tr><td><code>parentIdMapName</code></td><td>Parent id map name</td><td><code>string</code></td><td><code>parent_id</code></td></tr><tr><td><code>childrenMapName</code></td><td>Children map name</td><td><code>string</code></td><td><code>children</code></td></tr><tr><td><code>cb</code></td><td>Callback event</td><td><code>(item: any) => void</code></td><td>-</td></tr></tbody></table><h2 id="arrToTreeNode"><a class="lake-link"><i data-anchor="arrToTreeNode"></i></a>arrToTreeNode</h2><p>Convert array structure to <code>nz-tree</code> data structure.</p><p><strong>options</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>idMapName</code></td><td>Id map name</td><td><code>string</code></td><td><code>id</code></td></tr><tr><td><code>parentIdMapName</code></td><td>Parent id map name</td><td><code>string</code></td><td><code>parent_id</code></td></tr><tr><td><code>titleMapName</code></td><td>Title map name</td><td><code>string</code></td><td><code>title</code></td></tr><tr><td><code>isLeafMapName</code></td><td>isLeaf map name, if value does not exist, include <code>children</code> value to determine whether it\'s a leaf node</td><td><code>string</code></td><td><code>isLeaf</code></td></tr><tr><td><code>checkedMapname</code></td><td>Checked map name</td><td><code>string</code></td><td><code>checked</code></td></tr><tr><td><code>selectedMapname</code></td><td>Selected map name</td><td><code>string</code></td><td><code>selected</code></td></tr><tr><td><code>expandedMapname</code></td><td>Expanded map name (Except leaf nodes)</td><td><code>string</code></td><td><code>expanded</code></td></tr><tr><td><code>disabledMapname</code></td><td>Disabled map name</td><td><code>string</code></td><td><code>disabled</code></td></tr><tr><td><code>cb</code></td><td>Callback event</td><td><code>(item: any, parent: any, deep: number) => void</code></td><td>-</td></tr></tbody></table><h2 id="visitTree"><a class="lake-link"><i data-anchor="visitTree"></i></a>visitTree</h2><p>Recursive access tree.</p><p><strong>options</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>childrenMapName</code></td><td>Children map name</td><td><code>string</code></td><td><code>children</code></td></tr></tbody></table><h2 id="getKeysByTreeNode"><a class="lake-link"><i data-anchor="getKeysByTreeNode"></i></a>getKeysByTreeNode</h2><p>Get all the selected <code>key</code> values.</p><p><strong>options</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>includeHalfChecked</code></td><td>Whether include half-checked</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>keyMapName</code></td><td>Whether re-specify <code>key</code> name</td><td><code>string</code></td><td>-</td></tr><tr><td><code>cb</code></td><td>Callback event, return <code>key</code> value</td><td><code>(item: NzTreeNode, parent: NzTreeNode, deep: number) => any</code></td><td>-</td></tr></tbody></table></section>',meta:{title:"array",subtitle:"Array",type:"Type"},toc:[{id:"treeToArr",title:"treeToArr",h:2},{id:"arrToTree",title:"arrToTree",h:2},{id:"arrToTreeNode",title:"arrToTreeNode",h:2},{id:"visitTree",title:"visitTree",h:2},{id:"getKeysByTreeNode",title:"getKeysByTreeNode",h:2}]},"zh-CN":{content:'<section class="markdown"><p><code>ArrayService</code> \u7528\u4e8e\u6570\u7ec4\u4e0e\u6811\u4e4b\u95f4\u7684\u8f6c\u5316\u3001\u8bbf\u95ee\u7b49\uff0c\u4e00\u822c\u914d\u5408 <code>nz-tree</code> \u4e00\u8d77\u4f7f\u7528\u3002</p><h2 id="treeToArr"><a class="lake-link"><i data-anchor="treeToArr"></i></a>treeToArr</h2><p>\u5c06\u6811\u7ed3\u6784\u8f6c\u6362\u6210\u6570\u7ec4\u7ed3\u6784\u3002</p><p><strong>options</strong></p><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th></tr></thead><tbody><tr><td><code>deepMapName</code></td><td>\u6df1\u5ea6\u9879\u540d</td><td><code>string</code></td><td><code>deep</code></td></tr><tr><td><code>parentMapName</code></td><td>\u6241\u5e73\u540e\u6570\u7ec4\u7684\u7236\u6570\u636e\u9879\u540d</td><td><code>string</code></td><td><code>parent</code></td></tr><tr><td><code>childrenMapName</code></td><td>\u6e90\u6570\u636e\u5b50\u9879\u540d</td><td><code>string</code></td><td><code>children</code></td></tr><tr><td><code>clearChildren</code></td><td>\u662f\u5426\u79fb\u9664 <code>children</code> \u8282\u70b9</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>cb</code></td><td>\u8f6c\u6362\u6210\u6570\u7ec4\u7ed3\u6784\u65f6\u56de\u8c03</td><td><code>(item: any, parent: any, deep: number) => void</code></td><td>-</td></tr></tbody></table><h2 id="arrToTree"><a class="lake-link"><i data-anchor="arrToTree"></i></a>arrToTree</h2><p>\u6570\u7ec4\u8f6c\u6362\u6210\u6811\u6570\u636e\u3002</p><blockquote><p>\u82e5 <code>parent_id</code> \u4e3a\u5b57\u7b26\u4e32\uff0c\u5219\u6839\u503c<strong>\u52a1\u5fc5</strong>\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002</p></blockquote><p><strong>options</strong></p><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th></tr></thead><tbody><tr><td><code>idMapName</code></td><td>\u7f16\u53f7\u9879\u540d</td><td><code>string</code></td><td><code>id</code></td></tr><tr><td><code>parentIdMapName</code></td><td>\u7236\u7f16\u53f7\u9879\u540d</td><td><code>string</code></td><td><code>parent_id</code></td></tr><tr><td><code>childrenMapName</code></td><td>\u5b50\u9879\u540d</td><td><code>string</code></td><td><code>children</code></td></tr><tr><td><code>cb</code></td><td>\u8f6c\u6362\u6210\u6811\u6570\u636e\u65f6\u56de\u8c03</td><td><code>(item: any) => void</code></td><td>-</td></tr></tbody></table><h2 id="arrToTreeNode"><a class="lake-link"><i data-anchor="arrToTreeNode"></i></a>arrToTreeNode</h2><p>\u6570\u7ec4\u8f6c\u6362\u6210 <code>nz-tree</code> \u6570\u636e\u6e90\uff0c\u901a\u8fc7 <code>options</code> \u8f6c\u5316\u9879\u540d\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 <code>options.cb</code> \u66f4\u9ad8\u7ea7\u51b3\u5b9a\u6570\u636e\u9879\u3002</p><p><strong>options</strong></p><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th></tr></thead><tbody><tr><td><code>idMapName</code></td><td>\u7f16\u53f7\u9879\u540d</td><td><code>string</code></td><td><code>id</code></td></tr><tr><td><code>parentIdMapName</code></td><td>\u7236\u7f16\u53f7\u9879\u540d</td><td><code>string</code></td><td><code>parent_id</code></td></tr><tr><td><code>titleMapName</code></td><td>\u6807\u9898\u9879\u540d</td><td><code>string</code></td><td><code>title</code></td></tr><tr><td><code>isLeafMapName</code></td><td>\u662f\u5426\u53f6\u8282\u70b9\u9879\u540d\uff0c\u82e5\u6570\u636e\u6e90\u4e0d\u5b58\u5728\u65f6\u81ea\u52a8\u6839\u636e <code>children</code> \u503c\u51b3\u5b9a\u662f\u5426\u4e3a\u53f6\u5b50\u8282\u70b9</td><td><code>string</code></td><td><code>isLeaf</code></td></tr><tr><td><code>checkedMapname</code></td><td>\u8282\u70b9 Checkbox \u662f\u5426\u9009\u4e2d\u9879\u540d</td><td><code>string</code></td><td><code>checked</code></td></tr><tr><td><code>selectedMapname</code></td><td>\u8282\u70b9\u672c\u8eab\u662f\u5426\u9009\u4e2d\u9879\u540d</td><td><code>string</code></td><td><code>selected</code></td></tr><tr><td><code>expandedMapname</code></td><td>\u8282\u70b9\u662f\u5426\u5c55\u5f00(\u53f6\u5b50\u8282\u70b9\u65e0\u6548)\u9879\u540d</td><td><code>string</code></td><td><code>expanded</code></td></tr><tr><td><code>disabledMapname</code></td><td>\u8bbe\u7f6e\u662f\u5426\u7981\u7528\u8282\u70b9(\u4e0d\u53ef\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c)\u9879\u540d</td><td><code>string</code></td><td><code>disabled</code></td></tr><tr><td><code>cb</code></td><td>\u8f6c\u6362\u6210\u6570\u7ec4\u7ed3\u6784\u65f6\u56de\u8c03</td><td><code>(item: any, parent: any, deep: number) => void</code></td><td>-</td></tr></tbody></table><h2 id="visitTree"><a class="lake-link"><i data-anchor="visitTree"></i></a>visitTree</h2><p>\u9012\u5f52\u8bbf\u95ee\u6574\u4e2a\u6811\u3002</p><p><strong>options</strong></p><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th></tr></thead><tbody><tr><td><code>childrenMapName</code></td><td>\u5b50\u9879\u540d</td><td><code>string</code></td><td><code>children</code></td></tr></tbody></table><h2 id="getKeysByTreeNode"><a class="lake-link"><i data-anchor="getKeysByTreeNode"></i></a>getKeysByTreeNode</h2><p>\u83b7\u53d6\u6240\u6709\u5df2\u7ecf\u9009\u4e2d\u7684 <code>key</code> \u503c\u3002</p><p><strong>options</strong></p><table><thead><tr><th>\u53c2\u6570</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th></tr></thead><tbody><tr><td><code>includeHalfChecked</code></td><td>\u662f\u5426\u5305\u542b\u534a\u9009\u72b6\u6001\u7684\u503c</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>keyMapName</code></td><td>\u662f\u5426\u91cd\u65b0\u6307\u5b9a <code>key</code> \u952e\u540d\uff0c\u82e5\u4e0d\u6307\u5b9a\u8868\u793a\u4f7f\u7528 <code>NzTreeNode.key</code> \u503c</td><td><code>string</code></td><td>-</td></tr><tr><td><code>cb</code></td><td>\u56de\u8c03\uff0c\u8fd4\u56de\u4e00\u4e2a\u503c <code>key</code> \u503c\uff0c\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5176\u4ed6</td><td><code>(item: NzTreeNode, parent: NzTreeNode, deep: number) => any</code></td><td>-</td></tr></tbody></table></section>',meta:{title:"array",subtitle:"\u6570\u7ec4",type:"Type"},toc:[{id:"treeToArr",title:"treeToArr",h:2},{id:"arrToTree",title:"arrToTree",h:2},{id:"arrToTreeNode",title:"arrToTreeNode",h:2},{id:"visitTree",title:"visitTree",h:2},{id:"getKeysByTreeNode",title:"getKeysByTreeNode",h:2}]}},demo:!1},this.codes=[]},s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=g.Jb({type:s,selectors:[["app-util-array"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){1&e&&g.Qb(0,"app-docs",0),2&e&&g.oc("codes",t.codes)("item",t.item)},directives:[y.a],styles:["[_nghost-%COMP%] { display: block }"]}),s)},{path:"lazy",redirectTo:"lazy/zh",pathMatch:"full"},{path:"lazy/:lang",component:(n=function t(){e(this,t),this.item={cols:1,urls:{"en-US":"packages/util/src/lazy/index.en-US.md","zh-CN":"packages/util/src/lazy/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p><code>LazyService</code> delay loading JS or CSS files.</p><pre class="hljs language-ts"><code>import { LazyService } from \'@delon/util\';\n\nexport class AppComponent {\n  constructor(private lazy: LazyService) {}\n\n  ngOnInit() {\n    this.lazy.load([ `//cdn.bootcss.com/xlsx/0.11.17/xlsx.full.min.js` ]).then(() => {\n      // do something\n    });\n  }\n}</code></pre></section>',meta:{title:"lazy",subtitle:"Lazy load",type:"Type"},toc:[]},"zh-CN":{content:'<section class="markdown"><p><code>LazyService</code> \u7528\u4e8e\u5ef6\u8fdf\u52a0\u8f7d JS \u6216 CSS \u6587\u4ef6\uff0c\u5bf9\u4e8e\u65e0\u987b\u88ab\u6253\u5305 script.js \u4e14\u53c8\u662f\u7b2c\u4e09\u65b9\u7c7b\u5e93\u6bd4\u8f83\u5927\u65f6\uff0c\u975e\u5e38\u6709\u7528\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-ts"><code>import { LazyService } from \'@delon/util\';\n\nexport class AppComponent {\n  constructor(private lazy: LazyService) {}\n\n  ngOnInit() {\n    this.lazy.load([ `//cdn.bootcss.com/xlsx/0.11.17/xlsx.full.min.js` ]).then(() => {\n      // do something\n    });\n  }\n}</code></pre></section>',meta:{title:"lazy",subtitle:"\u5ef6\u8fdf\u52a0\u8f7d",type:"Type"},toc:[]}},demo:!1},this.codes=[]},n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g.Jb({type:n,selectors:[["app-util-lazy"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){1&e&&g.Qb(0,"app-docs",0),2&e&&g.oc("codes",t.codes)("item",t.item)},directives:[y.a],styles:["[_nghost-%COMP%] { display: block }"]}),n)},{path:"other",redirectTo:"other/zh",pathMatch:"full"},{path:"other/:lang",component:(i=function t(){e(this,t),this.item={cols:1,urls:{"en-US":"packages/util/src/other/index.en-US.md","zh-CN":"packages/util/src/other/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h2 id="isEmpty"><a class="lake-link"><i data-anchor="isEmpty"></i></a>isEmpty</h2><p>Used to verify <code>&lt;ng-content></ng-content></code> is empty, useful for custom components.</p><h2 id="toBoolean"><a class="lake-link"><i data-anchor="toBoolean"></i></a>toBoolean</h2><p>Convert to <code>boolean</code>.</p><h2 id="toNumber"><a class="lake-link"><i data-anchor="toNumber"></i></a>toNumber</h2><p>Convert to <code>number</code>.</p><h2 id="deepGet"><a class="lake-link"><i data-anchor="deepGet"></i></a>deepGet</h2><p>Gets the value at <code>path</code> of <code>object</code>, like <code>_.get</code> in lodash.</p><pre class="hljs language-ts"><code>const obj = {\n  id: 1,\n  user: {\n    name: \'cipchk\',\n    age: 18\n  }\n};\n\ndeepGet(obj, \'id\'); // 1\ndeepGet(obj, \'user.age\'); // 18</code></pre><h2 id="deepCopy"><a class="lake-link"><i data-anchor="deepCopy"></i></a>deepCopy</h2><p>Base on <a target="_blank" href="https://github.com/justmoon/node-extend" data-url="https://github.com/justmoon/node-extend">extend</a> deep copy.</p><pre class="hljs language-ts"><code>const source = { a: 1, user: { name: \'cipchk\' } };\nconst obj = deepCopy(source);</code></pre><h2 id="deepMerge"><a class="lake-link"><i data-anchor="deepMerge"></i></a>deepMerge</h2><p>Deep merge object.</p><pre class="hljs language-ts"><code>let original = { a: 1, b: { c: \'c\' } };\ndeepMerge(original, { b: { d: \'d\' }, arr: [ 1 ] });\n// output: { a: 1, b: { c: \'c\', d: \'d\' }, arr: [ 1 ] }</code></pre><h2 id="copy"><a class="lake-link"><i data-anchor="copy"></i></a>copy</h2><p>Copy text to clipboard.</p><h2 id="updateHostClass"><a class="lake-link"><i data-anchor="updateHostClass"></i></a>updateHostClass</h2><p>Update host component style <code>class</code>, for example:</p><pre class="hljs language-ts"><code>updateHostClass(\n  this.el.nativeElement,\n  this.renderer,\n  {\n    [ \'classname\' ]: true,\n    [ \'classname\' ]: this.type === \'1\',\n    [ this.cls ]: true,\n    [ `a-${this.cls}` ]: true\n  }\n)</code></pre></section>',meta:{title:"other",subtitle:"Other",type:"Type"},toc:[{id:"isEmpty",title:"isEmpty",h:2},{id:"toBoolean",title:"toBoolean",h:2},{id:"toNumber",title:"toNumber",h:2},{id:"deepGet",title:"deepGet",h:2},{id:"deepCopy",title:"deepCopy",h:2},{id:"deepMerge",title:"deepMerge",h:2},{id:"copy",title:"copy",h:2},{id:"updateHostClass",title:"updateHostClass",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="isEmpty"><a class="lake-link"><i data-anchor="isEmpty"></i></a>isEmpty</h2><p>\u7528\u4e8e\u6821\u9a8c <code>&lt;ng-content></ng-content></code> \u662f\u5426\u4e3a\u7a7a\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\u86ee\u6709\u7528\u3002</p><h2 id="toBoolean"><a class="lake-link"><i data-anchor="toBoolean"></i></a>toBoolean</h2><p>\u8f6c\u6362 <code>boolean</code> \u5c5e\u6027</p><h2 id="toNumber"><a class="lake-link"><i data-anchor="toNumber"></i></a>toNumber</h2><p>\u8f6c\u6362 <code>number</code> \u5c5e\u6027</p><h2 id="deepGet"><a class="lake-link"><i data-anchor="deepGet"></i></a>deepGet</h2><p>\u7c7b\u4f3c <code>_.get</code>\uff0c\u6839\u636e <code>path</code> \u83b7\u53d6\u5b89\u5168\u503c\u3002</p><pre class="hljs language-ts"><code>const obj = {\n  id: 1,\n  user: {\n    name: \'cipchk\',\n    age: 18\n  }\n};\n\ndeepGet(obj, \'id\'); // 1\ndeepGet(obj, \'user.age\'); // 18</code></pre><h2 id="deepCopy"><a class="lake-link"><i data-anchor="deepCopy"></i></a>deepCopy</h2><p>\u57fa\u4e8e <a target="_blank" href="https://github.com/justmoon/node-extend" data-url="https://github.com/justmoon/node-extend">extend</a> \u7684\u6df1\u5ea6\u62f7\u8d1d\u3002</p><pre class="hljs language-ts"><code>const source = { a: 1, user: { name: \'cipchk\' } };\nconst obj = deepCopy(source);</code></pre><h2 id="deepMerge"><a class="lake-link"><i data-anchor="deepMerge"></i></a>deepMerge</h2><p>\u6df1\u5ea6\u5408\u5e76\u3002</p><pre class="hljs language-ts"><code>let original = { a: 1, b: { c: \'c\' } };\ndeepMerge(original, { b: { d: \'d\' }, arr: [ 1 ] });\n// output: { a: 1, b: { c: \'c\', d: \'d\' }, arr: [ 1 ] }</code></pre><h2 id="copy"><a class="lake-link"><i data-anchor="copy"></i></a>copy</h2><p>\u590d\u5236\u5b57\u7b26\u4e32\u6587\u6863\u81f3\u526a\u8d34\u677f\u3002</p><h2 id="updateHostClass"><a class="lake-link"><i data-anchor="updateHostClass"></i></a>updateHostClass</h2><p>\u66f4\u65b0\u5bbf\u4e3b\u7ec4\u4ef6\u6837\u5f0f <code>class</code>\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-ts"><code>updateHostClass(\n  this.el.nativeElement,\n  this.renderer,\n  {\n    [ \'classname\' ]: true,\n    [ \'classname\' ]: this.type === \'1\',\n    [ this.cls ]: true,\n    [ `a-${this.cls}` ]: true\n  }\n)</code></pre></section>',meta:{title:"other",subtitle:"\u5176\u4ed6",type:"Type"},toc:[{id:"isEmpty",title:"isEmpty",h:2},{id:"toBoolean",title:"toBoolean",h:2},{id:"toNumber",title:"toNumber",h:2},{id:"deepGet",title:"deepGet",h:2},{id:"deepCopy",title:"deepCopy",h:2},{id:"deepMerge",title:"deepMerge",h:2},{id:"copy",title:"copy",h:2},{id:"updateHostClass",title:"updateHostClass",h:2}]}},demo:!1},this.codes=[]},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=g.Jb({type:i,selectors:[["app-util-other"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){1&e&&g.Qb(0,"app-docs",0),2&e&&g.oc("codes",t.codes)("item",t.item)},directives:[y.a],styles:["[_nghost-%COMP%] { display: block }"]}),i)},{path:"string",redirectTo:"string/zh",pathMatch:"full"},{path:"string/:lang",component:(r=function t(){e(this,t),this.item={cols:1,urls:{"en-US":"packages/util/src/string/index.en-US.md","zh-CN":"packages/util/src/string/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h2 id="format"><a class="lake-link"><i data-anchor="format"></i></a>format</h2><p>String formatting.</p><pre class="hljs language-ts"><code>format(\'this is ${name}\', { name: \'asdf\' })\n// output: this is asdf\nformat(\'this is ${user.name}\', { user: { name: \'asdf\' } }, true)\n// output: this is asdf</code></pre><p><strong>Parameters</strong></p><ul><li><p><code>str: string</code> Template</p></li><li><p><code>obj: {}</code> Data Object</p></li><li><p><code>needDeepGet = false</code> Whether deep get item, like this: <code>${user.address.city}</code>.</p></li></ul></section>',meta:{title:"string",subtitle:"String",type:"Type"},toc:[{id:"format",title:"format",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="format"><a class="lake-link"><i data-anchor="format"></i></a>format</h2><p>\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u3002</p><pre class="hljs language-ts"><code>format(\'this is ${name}\', { name: \'asdf\' })\n// output: this is asdf\nformat(\'this is ${user.name}\', { user: { name: \'asdf\' } }, true)\n// output: this is asdf</code></pre><p><strong>\u53c2\u6570</strong></p><ul><li><p><code>str: string</code> \u6a21\u677f</p></li><li><p><code>obj: {}</code> \u6570\u636e\u5bf9\u8c61</p></li><li><p><code>needDeepGet = false</code> \u662f\u5426\u9700\u8981\u6df1\u5ea6\u83b7\u53d6\uff0c\u652f\u6301 <code>${user.address.city}</code> \u5199\u6cd5\u3002</p></li></ul></section>',meta:{title:"string",subtitle:"\u5b57\u7b26\u4e32",type:"Type"},toc:[{id:"format",title:"format",h:2}]}},demo:!1},this.codes=[]},r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=g.Jb({type:r,selectors:[["app-util-string"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){1&e&&g.Qb(0,"app-docs",0),2&e&&g.oc("codes",t.codes)("item",t.item)},directives:[y.a],styles:["[_nghost-%COMP%] { display: block }"]}),r)},{path:"time",redirectTo:"time/zh",pathMatch:"full"},{path:"time/:lang",component:(c=function t(){e(this,t),this.item={cols:1,urls:{"en-US":"packages/util/src/time/index.en-US.md","zh-CN":"packages/util/src/time/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h2 id="getTimeDistance"><a class="lake-link"><i data-anchor="getTimeDistance"></i></a>getTimeDistance</h2><p>Get the time range, return <code>[ Date, Date]</code> for the start and end dates, for example: Get this week time:</p><pre class="hljs language-ts"><code>getTimeDistance(\'week\')</code></pre><p><strong>Parameters</strong></p><ul><li><p><code>type</code> Shortcut type, with <code>-</code> for last time, if specified <code>number</code> type for days</p><ul><li><p><code>today</code>, <code>-today</code> Today or yesterday</p></li><li><p><code>week</code>, <code>-week</code> This week or last week</p></li><li><p><code>month</code>, <code>-month</code> This month or last month</p></li><li><p><code>year</code>, <code>-year</code> This year or last year</p></li></ul></li><li><p><code>time</code> Specify start time, default is <code>now</code></p></li></ul><h2 id="toDate"><a class="lake-link"><i data-anchor="toDate"></i></a>toDate</h2><p>Return the date parsed from string using the given format string, If the argument is a number, it is treated as a timestamp.</p><ul><li><p><code>formatString</code> If parsing fails try to parse the date by pressing <code>formatString</code></p></li><li><p><code>defaultValue</code> If parsing fails returned default value, default: <code>new Date(NaN)</code></p></li></ul></section>',meta:{title:"time",subtitle:"Date-Time",type:"Type"},toc:[{id:"getTimeDistance",title:"getTimeDistance",h:2},{id:"toDate",title:"toDate",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="getTimeDistance"><a class="lake-link"><i data-anchor="getTimeDistance"></i></a>getTimeDistance</h2><p>\u83b7\u53d6\u65f6\u95f4\u8303\u56f4\uff0c\u8fd4\u56de <code>[ Date, Date]</code> \u8868\u793a\u5f00\u59cb\u4e0e\u7ed3\u675f\u65e5\u671f\uff0c\u4f8b\u5982\uff1a\u83b7\u53d6\u672c\u5468\u65f6\u95f4\uff1a</p><pre class="hljs language-ts"><code>getTimeDistance(\'week\')</code></pre><p><strong>\u53c2\u6570</strong></p><ul><li><p><code>type</code> \u5feb\u6377\u7c7b\u578b\uff0c\u5e26 <code>-</code> \u8868\u793a\u8fc7\u53bb\u4e00\u4e2a\u65f6\u95f4\uff0c\u82e5\u6307\u5b9a <code>number</code> \u8868\u793a\u5929\u6570</p><ul><li><p><code>today</code>\u3001<code>-today</code> \u4eca\u5929\u6216\u6628\u5929</p></li><li><p><code>week</code>\u3001<code>-week</code> \u672c\u5468\u6216\u4e0a\u5468</p></li><li><p><code>month</code>\u3001<code>-month</code> \u672c\u5468\u6216\u4e0a\u6708</p></li><li><p><code>year</code>\u3001<code>-year</code> \u4eca\u5e74\u6216\u53bb\u5e74</p></li></ul></li><li><p><code>time</code> \u6307\u5b9a\u5f00\u59cb\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\uff1a<code>now</code></p></li></ul><h2 id="toDate"><a class="lake-link"><i data-anchor="toDate"></i></a>toDate</h2><p>\u8f6c\u6362\u6210 <code>Date</code> \u683c\u5f0f\uff0c\u652f\u6301 <code>Date, number, string</code> \u7c7b\u578b\uff0c\u5982\u679c\u662f <code>number</code> \u8868\u793a Unix timestamp\u3002</p><ul><li><p><code>formatString</code> \u5982\u679c\u8f6c\u6362\u5931\u8d25\u5c1d\u8bd5\u6839\u636e <code>formatString</code> \u683c\u5f0f\u6765\u8f6c\u6362</p></li><li><p><code>defaultValue</code> \u65e0\u6548\u65e5\u671f\u5e94\u8fd4\u56de\u7684\u9ed8\u8ba4\u503c\uff0c\u9ed8\u8ba4\uff1a<code>new Date(NaN)</code></p></li></ul></section>',meta:{title:"time",subtitle:"\u65e5\u671f",type:"Type"},toc:[{id:"getTimeDistance",title:"getTimeDistance",h:2},{id:"toDate",title:"toDate",h:2}]}},demo:!1},this.codes=[]},c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=g.Jb({type:c,selectors:[["app-util-time"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){1&e&&g.Qb(0,"app-docs",0),2&e&&g.oc("codes",t.codes)("item",t.item)},directives:[y.a],styles:["[_nghost-%COMP%] { display: block }"]}),c)},{path:"validate",redirectTo:"validate/zh",pathMatch:"full"},{path:"validate/:lang",component:(a=function t(){e(this,t),this.item={cols:1,urls:{"en-US":"packages/util/src/validate/index.en-US.md","zh-CN":"packages/util/src/validate/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>isNum</code></td><td>Whether number</td></tr><tr><td><code>isInt</code></td><td>Whether integer</td></tr><tr><td><code>isDecimal</code></td><td>Whether decimal</td></tr><tr><td><code>isIdCard</code></td><td>Whether IDCard(Chinese User)</td></tr><tr><td><code>isMobile</code></td><td>Whether mobile(Chinese User)</td></tr><tr><td><code>isUrl</code></td><td>Whether URL Address</td></tr></tbody></table><p>Every method has a corresponding form validation:</p><pre class="hljs language-ts"><code>this.valForm = fb.group({\n  // is mobile\n  mobile: [null, Validators.compose([Validators.required, _Validators.mobile])]\n});</code></pre>',meta:{title:"Validate",type:"Type"},toc:[{id:"API",title:"API",h:2}]},"zh-CN":{content:'<section class="markdown"></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><table><thead><tr><th>\u65b9\u6cd5\u540d</th><th>\u8bf4\u660e</th></tr></thead><tbody><tr><td><code>isNum</code></td><td>\u662f\u5426\u4e3a\u6570\u5b57</td></tr><tr><td><code>isInt</code></td><td>\u662f\u5426\u4e3a\u6574\u6570</td></tr><tr><td><code>isDecimal</code></td><td>\u662f\u5426\u4e3a\u5c0f\u6570</td></tr><tr><td><code>isIdCard</code></td><td>\u662f\u5426\u4e3a\u8eab\u4efd\u8bc1</td></tr><tr><td><code>isMobile</code></td><td>\u662f\u5426\u4e3a\u624b\u673a\u53f7</td></tr><tr><td><code>isUrl</code></td><td>\u662f\u5426URL\u5730\u5740</td></tr></tbody></table><p>\u6bcf\u4e00\u4e2a\u9a8c\u8bc1\u578b\u90fd\u5305\u62ec\u7740\u7528\u4e8e\u8868\u5355\u9a8c\u8bc1\u5668\uff1a</p><pre class="hljs language-ts"><code>this.valForm = fb.group({\n  // \u624b\u673a\u53f7\n  mobile: [null, Validators.compose([Validators.required, _Validators.mobile])]\n});</code></pre>',meta:{title:"\u6821\u9a8c",type:"Type"},toc:[{id:"API",title:"API",h:2}]}},demo:!1},this.codes=[]},a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g.Jb({type:a,selectors:[["app-util-validate"]],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,t){1&e&&g.Qb(0,"app-docs",0),2&e&&g.oc("codes",t.codes)("item",t.item)},directives:[y.a],styles:["[_nghost-%COMP%] { display: block }"]}),a)}]}],k=((p=function t(){e(this,t)}).\u0275mod=g.Nb({type:p}),p.\u0275inj=g.Mb({factory:function(e){return new(e||p)},imports:[[m.a,h.n.forChild(b)]]}),p)}}])}();