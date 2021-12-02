import ReactDOM from 'react-dom';
import React from 'react';
import './index.less';
import { ReactElement } from '@umijs/renderer-react/node_modules/@types/react';

interface InstanceOptions {
  mask: boolean;
  children: ReactElement;
}

interface Info {
  content: string;
}

const Info: any = (props: Info) => {
  return <div className="obiusm-toast-info">{props.content}</div>;
};

const Loading: any = (props: Info) => {
  return (
    <div className="obiusm-toast-loading">
      <div className={'obiusm-toast-spinner'}>
        <div className={'obiusm-toast-spinner-bar1'}></div>
        <div className={'obiusm-toast-spinner-bar2'}></div>
        <div className={'obiusm-toast-spinner-bar3'}></div>
        <div className={'obiusm-toast-spinner-bar4'}></div>
        <div className={'obiusm-toast-spinner-bar5'}></div>
        <div className={'obiusm-toast-spinner-bar6'}></div>
        <div className={'obiusm-toast-spinner-bar7'}></div>
        <div className={'obiusm-toast-spinner-bar8'}></div>
        <div className={'obiusm-toast-spinner-bar9'}></div>
        <div className={'obiusm-toast-spinner-bar10'}></div>
        <div className={'obiusm-toast-spinner-bar11'}></div>
        <div className={'obiusm-toast-spinner-bar12'}></div>
      </div>
      {props.content && (
        <div className={'obiusm-toast-content'}>{props.content}</div>
      )}
    </div>
  );
};

const Success: any = (props: Info) => {
  return (
    <div className="obiusm-toast-success">
      <svg width="100" height="100" style={{ transform: 'scale(0.5)' }}>
        <circle cx="50" cy="50" r="40" fill="none" id="circle2"></circle>
        <path className="line3" d="M25 45 L45 70" fill="none"></path>
        <path className="line4" d="M43 70 L75 30" fill="none"></path>
      </svg>
      {props.content && (
        <div className={'obiusm-toast-content'}>{props.content}</div>
      )}
    </div>
  );
};

const Fail: any = (props: Info) => {
  return (
    <div className="obiusm-toast-fail">
      <svg width="100" height="100" style={{ transform: 'scale(0.5)' }}>
        <circle cx="50" cy="50" r="40" fill="none" id="circle1"></circle>
        <path className="line1" d="M30 30 L70 70" fill="none"></path>
        <path className="line2" d="M70 30 L30 70" fill="none"></path>
      </svg>
      {props.content && (
        <div className={'obiusm-toast-content'}>{props.content}</div>
      )}
    </div>
  );
};

const Wrapper: any = (props: any) => {
  const stop = (e: TouchEvent) => {
    if (props.mask) {
      e.stopPropagation();
    }
  };
  return (
    <div
      className="obiusm-toast-wrapper"
      onClick={(e: any) => {
        stop(e);
      }}
    >
      {props.children}
    </div>
  );
};

class Toast {
  instance: null | HTMLElement = null;

  info(
    content: string,
    duration: number = 3,
    onClose?: Function,
    mask: boolean = true,
  ) {
    if (this.instance !== null) return;
    this.creatInstance({
      children: <Info content={content} />,
      mask,
    });
    setTimeout(() => {
      this.deleteInstance();
      onClose && onClose();
    }, duration * 1000);
  }

  success(
    content: string = '成功',
    duration: number = 3,
    onClose?: Function,
    mask: boolean = true,
  ) {
    if (this.instance !== null) return;
    this.creatInstance({
      children: <Success content={content} />,
      mask,
    });
    setTimeout(() => {
      this.deleteInstance();
      onClose && onClose();
    }, duration * 1000);
  }

  fail(
    content: string = '失败',
    duration: number = 3,
    onClose?: Function,
    mask: boolean = true,
  ) {
    if (this.instance !== null) return;
    this.creatInstance({
      children: <Fail content={content} />,
      mask,
    });
    setTimeout(() => {
      this.deleteInstance();
      onClose && onClose();
    }, duration * 1000);
  }

  loading(
    content: string = '数据加载',
    duration: number = -1,
    onClose?: Function,
    mask: boolean = true,
  ) {
    if (this.instance !== null) return;
    this.creatInstance({
      children: <Loading content={content} />,
      mask,
    });
    if (duration === -1) return;
    setTimeout(() => {
      this.deleteInstance();
      onClose && onClose();
    }, duration * 1000);
  }

  hide() {
    this.deleteInstance();
  }

  creatInstance(options: InstanceOptions) {
    const box = document.createElement('div');
    ReactDOM.render(Wrapper(options), box);
    this.instance = box;
    let parentNode = document.getElementById('root') || document.body;
    parentNode.appendChild(box);
  }

  deleteInstance() {
    this.instance?.parentNode?.removeChild(this.instance);
    this.instance = null;
  }
}

export default new Toast();
