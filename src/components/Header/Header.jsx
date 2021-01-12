import './header.scss';

const Header = ({likedPosts, allPosts}) => {
    return(
        <div className="app-header d-flex">
            <h1>Nika's ToDo App</h1>
            <h2>{allPosts} записей, из них понравилось {likedPosts}</h2>
        </div>
    )
}

export default Header;
