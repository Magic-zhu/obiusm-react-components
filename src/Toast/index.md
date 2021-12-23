---
nav:
  path: /components
---

## Toast

Demo:

```tsx
import React from 'react';
import { Toast } from 'obiusm-react-components';
import './demo/demo.css';

export default () => {
  function handleClick(type: string) {
    const actionMap = {
      loading: () => {
        Toast.loading('哈哈哈', -1, () => {}, false);
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
        Toast.hide();
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

- Toast.success(content, duration, onClose, mask)
- Toast.fail(content, duration, onClose, mask)
- Toast.info(content, duration, onClose, mask)
- Toast.loading(content, duration, onClose, mask)
- Toast.hide(content, duration, onClose, mask)

### 属性

| 属性     | 说明                   | 类型     | 默认值 |
| -------- | ---------------------- | -------- | ------ |
| content  | 提示内容               | String   | 无     |
| duration | 自动关闭的延时，单位秒 | number   | 3      |
| onClose  | 关闭后回调             | Function | 无     |
| mask     | 是否启用遮罩           | Boolean  | true   |
