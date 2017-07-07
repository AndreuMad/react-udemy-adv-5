import  { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {

    let component;

    beforeEach(() => {
        const props = ['Comment1', 'Comment2', 'Comment3'];

        component = renderComponent(CommentList, null, { comments: props });
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('Comment1');
        expect(component).to.contain('Comment2');
    });
});
