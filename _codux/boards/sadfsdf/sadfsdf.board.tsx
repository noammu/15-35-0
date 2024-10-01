import { createBoard, Variant } from '@wixc3/react-board';
import { Sadfsdf } from '../../../src/components/sadfsdf/sadfsdf';

export default createBoard({
    name: 'Sadfsdf',
    Board: () => (
        <Variant name="duuuuude">
            <Sadfsdf />
        </Variant>
    ),
    isSnippet: true,
});
