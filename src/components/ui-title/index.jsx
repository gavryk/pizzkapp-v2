import clsx from 'clsx';
import React from 'react';
import { useTitleTag } from './model/hooks';
import styles from './styles.module.scss';

const UITitle = ({ variant, fontWeight, bottomSpace, children }) => {
  const Tag = useTitleTag(variant);

  return (
    <Tag className={clsx(styles.title, styles[fontWeight], styles[bottomSpace])}>{children}</Tag>
  );
};

export default UITitle;
