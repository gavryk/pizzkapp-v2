import clsx from 'clsx';
import { ReactNode } from 'react';
import { useTitleTag } from './model/hooks';
import styles from './styles.module.scss';

interface TypoProps {
  variant: string;
  fontWeight: string;
  bottomSpace: 'sm' | 'md' | 'lg';
  textAlign: 'left' | 'center' | 'right';
  children: ReactNode;
}

export const UITypography = ({
  variant,
  fontWeight,
  bottomSpace,
  textAlign,
  children,
}: TypoProps) => {
  const Tag: any = useTitleTag(variant);

  return (
    <Tag className={clsx(styles.title, styles[fontWeight], styles[bottomSpace], styles[textAlign])}>
      {children}
    </Tag>
  );
};
