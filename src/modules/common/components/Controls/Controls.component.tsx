import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Wrapper,
  FilterGroup,
  SearchGroup,
  Button,
  Input,
} from './Controls.styled';

interface IProps {
  openAddModal: () => void;
}

export const Controls: React.FC<IProps> = ({ openAddModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({
    filter: 'all',
    search: '',
    page: '1',
    limit: '10',
  });

  useEffect(() => {
    setParams({
      filter: searchParams.get('filter') ?? 'all',
      search: searchParams.get('search') ?? '',
      page: searchParams.get('page') ?? '1',
      limit: searchParams.get('limit') ?? '10',
    });
  }, [searchParams]);

  const onBtnClickHandler = (e: React.MouseEvent) => {
    const filterName = (
      (e.target as HTMLButtonElement).textContent ?? 'All'
    ).toLowerCase();
    setSearchParams({ ...params, filter: filterName, page: '1' });
  };
  const onInputChange = (e: React.ChangeEvent) => {
    setSearchParams({
      ...params,
      search: (e.target as HTMLInputElement).value,
    });
  };
  return (
    <Wrapper>
      <FilterGroup>
        <Button type="button" onClick={onBtnClickHandler}>
          All
        </Button>
        <Button type="button" onClick={onBtnClickHandler}>
          Private
        </Button>
        <Button type="button" onClick={onBtnClickHandler}>
          Public
        </Button>
        <Button type="button" onClick={onBtnClickHandler}>
          Complete
        </Button>
      </FilterGroup>
      <SearchGroup>
        <Button type="button" onClick={() => openAddModal()}>
          AddTodo
        </Button>
        <Input type="text" placeholder="search" onChange={onInputChange} />
      </SearchGroup>
    </Wrapper>
  );
};
