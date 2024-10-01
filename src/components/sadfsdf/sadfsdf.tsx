import styles from './sadfsdf.module.scss';
import cx from 'classnames';

export interface SadfsdfProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sadfsdf = ({ className }: SadfsdfProps) => {
    return <div className={cx(styles.root, className)}>Sadfsdf</div>;
};
