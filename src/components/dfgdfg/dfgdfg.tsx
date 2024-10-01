import styles from './dfgdfg.module.scss';
import cx from 'classnames';

export interface DfgdfgProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dfgdfg = ({ className }: DfgdfgProps) => {
    return <div className={cx(styles.root, className)}>Dfgdfg</div>;
};
