import { IoIosAdd } from 'react-icons/io';
import React, { useState, useEffect } from 'react';

import {
  Box,
  Input,
  Modal,
  Paper,
  Stack,
  Table,
  Button,
  TableRow,
  Switch,
  TableBody,
  TableCell,
  InputLabel,
  FormControl,
  FormHelperText,
  TableContainer,
  Badge,
} from '@mui/material';

import { useCategories, useCreateCategory, useUpdateStatus } from 'src/hooks/use-categories';
import { toast } from 'react-toastify';
import { isError } from 'lodash';

export default function CategoryPage() {
  const { data, isPending,isError } = useCategories();
  const mutation = useCreateCategory();
  const updateStatus = useUpdateStatus();

  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddCategory = async () => {
    if (categoryName.trim() !== '') {
      mutation.mutate(categoryName, {
        onSuccess: () => {
          setCategoryName('');
          handleClose();
          toast.success('Created successfully')
        },
        onError: (err) => {
          toast.error(err?.response?.message || 'error while adding')
          //fire toast err.message
        },
      });
    } else {
      console.log('Category name is empty.');
    }
  };
  `z`
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

  if (isPending) return 'Loading...';
  if (isError) return 'Error...';


  return (
    <>
      <Stack>
        <h2>Category</h2>
        <Stack sx={{ flexDirection: 'row-reverse' }}>
          <Button sx={{ mb: 3 }} onClick={handleOpen} startIcon={<IoIosAdd />} variant="contained">
            Add Categories
          </Button>
        </Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl>
              <InputLabel htmlFor="my-input">Category Name</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <FormHelperText id="my-helper-text">Input the category.</FormHelperText>
            </FormControl>
            <Button onClick={handleAddCategory} variant="contained">
              {mutation.isPending ? 'loading..' : 'Add'}
            </Button>
          </Box>
        </Modal>
      </Stack>
      <TableContainer component={Paper}>
        <Box sx={{ overflowX: 'auto' }}>
          <Table sx={{ minWidth: '800px' }}>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>isActive</TableCell>
            </TableRow>
            <TableBody>
              {data?.data?.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{category.categoryName}</TableCell>
                  <TableCell>
                    <Badge color="error">{category.isActive ? 'Active' : 'InActive'}</Badge>
                    {/* <Switch {...label} checked={category.isActive} size="small" /> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </>
  );
}
