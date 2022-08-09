import clsx from 'clsx';
import React, { useMemo } from 'react';
import styles from './styles.module.scss';

const UIGrid = ({ children, columns, gridGap }) => {
  const optionsStyle = useMemo(() => {
    return `
      .${styles.gridWrapper} {
        --grid--gap: var(--base--spaces--${gridGap});
        --grid--count: ${columns};
      }
    `;
  }, [columns, gridGap]);

  return (
    <>
      <style jsx="true">{optionsStyle}</style>
      <div className={clsx(styles.gridWrapper)}>{children}</div>
    </>
  );
};

export default UIGrid;
