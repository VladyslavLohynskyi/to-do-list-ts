import './Category.css';

function Category() {
    return (
    <div className="category-container" >
        <h2  className='filter-btn'>All Categories</h2>
        <div className='filter-btn'>Favourites</div>
        <div className='filter-btn'>Completed</div>
    </div>
  );
}

export default Category;
