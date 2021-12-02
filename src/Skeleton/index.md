---
nav:
  title: Components
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
      <div data-skeletonIgnore={true}>123456</div>
      <div className="content2"></div>
      <div className="content3" data-skeletonStyle={{ width: '50%' }}></div>
    </div>
  </Skeleton>
);
```
