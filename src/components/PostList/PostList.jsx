import PostListItem from '../PostListItem';
import './post-list.scss';

const PostList = ({posts, onDelete, onToggleimportant, onToggleLike}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <li key = {id} className='list-group-item'>
                <PostListItem
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleimportant={() => onToggleimportant(id)}
                onToggleLike={() => onToggleLike(id)}
               />
            </li>
        )
    });
    return(
        <ul className = "app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;
