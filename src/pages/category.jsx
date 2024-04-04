import { IoIosAdd, IoMdCut } from 'react-icons/io';
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
import { useCategories, useCreateCategory, useUpdateCategory } from 'src/hooks/use-categories';
import { toast } from 'react-toastify';
import { isError } from 'lodash';

export default function CategoryPage() {
  const { data, isPending,isError } = useCategories();
  const mutation = useCreateCategory();
  const updateMutation = useUpdateCategory();

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [editedCategoryId, setEditedCategoryId] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
    setEditedCategoryId(null);
    setCategoryName('')
  };

  const handleEdit = (categoryId) => {
    setOpen(true);
    setEditMode(true);
    setEditedCategoryId(categoryId);
    const categoryToEdit = data.data.find((category) => category.id === categoryId);
    setCategoryName(categoryToEdit.categoryName);
    setIsActive(categoryToEdit.isActive);
  };

  const handleAddOrUpdateCategory = async () => {
    if (categoryName.trim() !== '') {
      try {
        if (editMode) {
          await updateCategory(categoryName, editedCategoryId);
          toast.success('Category updated successfully');
        } else {
          await addCategory(categoryName);
          toast.success('Category added successfully');
        }
        setCategoryName('');
        handleClose();
      } catch (error) {
        toast.error(error?.response?.message || 'Error while updating category');
      }
    } else {
      toast.error('Category name is empty.');
    }
  };

  const addCategory = async (name) => {
    mutation.mutate(name);
  };

  const updateCategory = async (name, id) => {
    updateMutation.mutate({ name, id, isActive: isActive });
  };

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
            <Stack direction={'column'}>
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
              {editedCategoryId && (
                <>
                  <InputLabel htmlFor="my-input">Status</InputLabel>
                  <Switch
                    value={isActive}
                    defaultChecked={isActive}
                    onChange={() => setIsActive((prev) => !prev)}
                  />
                </>
              )}
              <Button onClick={handleAddOrUpdateCategory} variant="contained">
                {editMode ? 'Update' : 'Add'}
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Stack>
      <TableContainer component={Paper}>
        <Box sx={{ overflowX: 'auto' }}>
          <Table sx={{ minWidth: '800px' }}>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>isActive</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
            <TableBody>
              {data?.data?.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{category.categoryName}</TableCell>
                  <TableCell>
                    <Badge color="error">{category.isActive ? 'Active' : 'InActive'}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(category.id)}
                      startIcon={<IoMdCut size={20}/>}
                      variant="contained"
                    >
                      Edit

                    </Button>
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
