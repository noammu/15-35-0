import styles from './ssss.module.scss';
import cx from 'classnames';

export interface SsssProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Ssss = ({ className }: SsssProps) => {
    return <div className={cx(styles.root, className)}>Ssss</div>;
};
