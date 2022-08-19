import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { taskSlice } from '../../store/reducers/TaskSlice';
import { CategoryEnum } from '../../types/enum';
import './Category.css';

function Category() {
    const {tasks, category} = useAppSelector(state=>state.taskReducer);
    const {setCategory} = taskSlice.actions
    const dispatch = useAppDispatch()
    

    const handleClickMenu = (e: React.ChangeEvent<HTMLInputElement>)=>{
      dispatch(setCategory(e.target.value as CategoryEnum));
    }

    return (
        <form className="category-container" >
          <label className={category === CategoryEnum.ALL_CATEGORIES?"filter-btn-active":"filter-btn"}>
          All Categories
              <input type="radio" name='menu' className="radio-menu" value={CategoryEnum.ALL_CATEGORIES} checked={category === CategoryEnum.ALL_CATEGORIES} onChange={handleClickMenu} />
          </label>
          <label className={category === CategoryEnum.COMPLETED?"filter-btn-active":"filter-btn"}>
          Completed
            <input type="radio" name='menu' className="radio-menu" value={CategoryEnum.COMPLETED} checked={category === CategoryEnum.COMPLETED} onChange={handleClickMenu}/>
          </label>
          <label className={category === CategoryEnum.UNCOMPLETED?"filter-btn-active":"filter-btn"}>
          UnCompleted
            <input type="radio" name='menu' className="radio-menu"  value={CategoryEnum.UNCOMPLETED} checked={category === CategoryEnum.UNCOMPLETED} onChange={handleClickMenu} />
          </label>
        </form>
  );
}

export default Category;
