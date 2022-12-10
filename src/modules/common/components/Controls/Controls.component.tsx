import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  ButtonGroup,
  Button,
  IconButton,
  TextField,
  Stack,
} from '@mui/material';
import { VscDiffAdded } from 'react-icons/vsc';

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
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });

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
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="flex-end"
      spacing={2}
      mb={2}
    >
      <ButtonGroup variant="outlined" size={isMobile ? 'small' : 'medium'}>
        <Button
          type="button"
          variant={params.filter === 'all' ? 'contained' : 'outlined'}
          onClick={onBtnClickHandler}
        >
          All
        </Button>
        <Button
          type="button"
          variant={params.filter === 'private' ? 'contained' : 'outlined'}
          onClick={onBtnClickHandler}
        >
          Private
        </Button>
        <Button
          type="button"
          variant={params.filter === 'public' ? 'contained' : 'outlined'}
          onClick={onBtnClickHandler}
        >
          Public
        </Button>
        <Button
          type="button"
          variant={params.filter === 'complete' ? 'contained' : 'outlined'}
          onClick={onBtnClickHandler}
        >
          Complete
        </Button>
      </ButtonGroup>
      <Stack direction="row" spacing={1}>
        <IconButton type="button" onClick={() => openAddModal()}>
          <VscDiffAdded />
        </IconButton>
        <TextField
          type="text"
          label="search"
          variant="outlined"
          size="small"
          onChange={onInputChange}
        />
      </Stack>
    </Stack>
  );
};
