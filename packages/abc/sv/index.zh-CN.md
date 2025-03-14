---
type: CURD
title: sv
subtitle: 查看
cols: 1
order: 2
module: import { SVModule } from '@delon/abc/sv';
---

查看栅格系统是在原 [Grid 栅格](https://ng.ant.design/components/grid/zh) 基础上构建更高阶的组件，用于简化查看页布局。

## API

### sv-container

| 参数 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[size]` | 大小 | `'small','large'` | `'large'` | ✅ |
| `[layout]` | 布局 | `'horizontal','vertical'` | `'horizontal'` | ✅ |
| `[gutter]` | 间距 | `number` | `32` | ✅ |
| `[col]` | 指定信息最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | `3` | ✅ |
| `[labelWidth]` | 默认标签文本宽度 | `number` | - | ✅ |
| `[default]` | 默认是否显示默认文本 | `boolean` | `true` | ✅ |
| `[title]` | 标题 | `string,TemplateRef<void>` | - | - |
| `[noColon]` | 默认是否不显示 label 后面的冒号 | `boolean` | `false` | - |

### sv

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[col]` | 指定信息最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定，继承 `sv-container` | `'1','2','3','4','5','6'` | - |
| `[label]` | 标签 | `string,TemplateRef<void>` | - |
| `[unit]` | 单位 | `string,TemplateRef<void>` | - |
| `[default]` | 是否显示默认文本，继承 `sv-container` | `boolean` | - |
| `[type]` | 类型 | `'primary','success','danger','warning'` | - |
| `[optional]` | 标签可选信息 | `string, TemplateRef<void>` | - |
| `[optionalHelp]` | 标签可选帮助 | `string, TemplateRef<void>` | - |
| `[optionalHelpColor]` | 标签可选帮助背景颜色	 | `string` | - |
| `[noColon]` | 是否不显示 label 后面的冒号 | `boolean` | `false` | - |
| `[hideLabel]` | 是否隐藏当前 `label` | `boolean` | `false` |

### sv-title

用于展示标题，单独一行。

### sv-value

值展示。

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[prefix]` | 前缀 | `string` | - |
| `[unit]` | 单位 | `string` | - |
| `[tooltip]` | 文字提示内容 | `string, TemplateRef<void>` | - |
| `[size]` | 大小 | `'large','small','default'` | `default` |
