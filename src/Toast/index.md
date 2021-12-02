---
nav:
  path: /components
---

## Toast

Demo:

```tsx
import React from 'react';
import { Toast } from '@obiusm/react-components';
import './demo/demo.css';

export default () => {
  function handleClick(type: string) {
    const actionMap = {
      loading: () => {
        Toast.loading('哈哈哈', 3, () => {
          Toast.info('触发关闭', 1);
        });
      },
      info: () => {
        Toast.info('测试数据...');
      },
      success: () => {
        Toast.success();
      },
      fail: () => {
        Toast.fail();
      },
      hide: () => {
        Toast.loading('手动关闭');
        setTimeout(() => {
          Toast.hide();
          Toast.success();
        }, 2000);
      },
    };
    actionMap[type]();
  }
  return (
    <div>
      <div
        onClick={() => {
          handleClick('loading');
        }}
        className={'button'}
      >
        loading
      </div>
      <div
        onClick={() => {
          handleClick('info');
        }}
        className={'button'}
      >
        info
      </div>
      <div
        onClick={() => {
          handleClick('success');
        }}
        className={'button'}
      >
        success
      </div>
      <div
        onClick={() => {
          handleClick('fail');
        }}
        className={'button'}
      >
        fail
      </div>
      <div
        onClick={() => {
          handleClick('hide');
        }}
        className={'button'}
      >
        hide
      </div>
    </div>
  );
};
```

### API

- Toast.success(content, duration, onClose)
- Toast.fail(content, duration, onClose)
- Toast.info(content, duration, onClose)
- Toast.loading(content, duration, onClose)
- Toast.hide(content, duration, onClose)

### 属性

| 属性     | 说明                   | 类型     | 默认值 |
| -------- | ---------------------- | -------- | ------ |
| content  | 提示内容               | String   | 无     |
| duration | 自动关闭的延时，单位秒 | number   | 3      |
| onClose  | 关闭后回调             | Function | 无     |
