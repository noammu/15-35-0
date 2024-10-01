import React from 'react';
import classes from './route.module.scss';
import commonStyles from '~/styles/common-styles.module.scss';
import classNames from 'classnames';
import { Dfgdfg } from '../../../src/components/dfgdfg/dfgdfg';
import PikachuPng from '../../../src/assets/pikachu.png';

export default function ElementsTree() {
    return (
        <div className={classes.div1}>
            <Dfgdfg />
            <h1>Heading 1</h1>elements-tree
            <p>This is a paragraph.</p>
            <img src={PikachuPng} alt="" />
            <ol>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ol>
            Text
            <button>Button</button>
            <label>Label</label>
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div className={classes.grid}>
                <h2>Replace content</h2>
            </div>
            <button className={classNames(commonStyles.primaryButton)}>Primary</button>
        </div>
    );
}
