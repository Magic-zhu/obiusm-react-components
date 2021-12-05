import React, { ReactElement } from 'react';
import './index.less';
interface Props {
  isVisible: boolean;
  depth?: number;
  children: any;
}
const createModal = (child: ReactElement, depth: number, current: number) => {
  if (
    depth === current ||
    (child && child.props && child.props['data-skeleton-ignore'])
  ) {
    return;
  }
  if (
    child &&
    child.props &&
    child.props.children &&
    Array.isArray(child.props.children) &&
    current < depth - 1
  ) {
    return (
      <div
        className={`${
          child.props.className !== undefined ? child.props.className : ''
        } ${'react-skeleton'}`}
        style={
          child.props && child.props['data-skeleton-style']
            ? child.props['data-skeleton-style']
            : {}
        }
        key={Math.random() * 1000}
      >
        {child.props.children && child.props.children.length > 0
          ? child.props.children.map((child: any) => {
              return createModal(child, depth, current + 1);
            })
          : '*'}
      </div>
    );
  } else {
    return (
      <div
        className={`${
          child.props && child.props.className ? child.props.className : ''
        } ${'react-skeleton2'}`}
        style={
          child.props && child.props['data-skeleton-style']
            ? child.props['data-skeleton-style']
            : {}
        }
        key={Math.random() * 1000}
      >
        *
      </div>
    );
  }
};
function Skeleton(props: Props) {
  if (!props) {
    return <div />;
  }
  if (props.isVisible) {
    return createModal(props.children, props.depth || 4, 0);
  } else {
    return props.children ? props.children : <div />;
  }
}
export default Skeleton;
