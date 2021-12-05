---
nav:
  path: /components
---

## Skeleton

Demo:

```tsx
import React from 'react';
import { Skeleton } from '@obiusm/react-components';
import './demo/demo.css';

export default () => (
  <Skeleton isVisible={true}>
    <div className="wrapper">
      <div className="content1"></div>
      <div data-skeleton-ignore={true}>123456</div>
      <div className="content2"></div>
      <div className="content3" data-skeleton-style={{ width: '50%' }}></div>
    </div>
  </Skeleton>
);
```

### 属性

| 属性                 | 说明                                   | 类型    | 默认值 |
| -------------------- | -------------------------------------- | ------- | ------ |
| isVisible            | 展示骨架屏还是真实内容 true 展示骨架屏 | boolean | -      |
| depth                | 骨架递归深度,需要递归到多少层结构      | number  | 4      |
| data-skeleton-ignore | 忽略当前节点                           | boolean | -      |
| data-skeleton-style  | 自定义当前节点样式                     | style   | 无     |
