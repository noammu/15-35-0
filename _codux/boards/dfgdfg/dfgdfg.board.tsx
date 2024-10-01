import { createBoard, Variant } from '@wixc3/react-board';
import { Dfgdfg } from '../../../src/components/dfgdfg/dfgdfg';

export default createBoard({
    name: 'Dfgdfg',
    Board: () => (
        <Variant name="Ariki">
            <Dfgdfg />
        </Variant>
    ),
    isSnippet: true,
});
