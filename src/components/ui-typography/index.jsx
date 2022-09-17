import clsx from 'clsx';
import React from 'react';
import { useTitleTag } from './model/hooks';
import styles from './styles.module.scss';

const UITypography = ({ variant, fontWeight, bottomSpace, textAlign, children }) => {
  const Tag = useTitleTag(variant);

  return (
    <Tag className={clsx(styles.title, styles[fontWeight], styles[bottomSpace], styles[textAlign])}>
      {children}
    </Tag>
  );
};

export default UITypography;
