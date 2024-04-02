
import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";

import {
    Box,
    Input,
    Modal,
    Paper,
    Stack,
    Table,
    Button,
    TableRow,
    TableBody,
    TableCell,
    InputLabel,
    FormControl,
    FormHelperText,
    TableContainer,
} from '@mui/material';

export default function CategoryPage() {
    const [open, setOpen] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleAddCategory = () => {
        if (categoryName.trim() !== '') {
            setCategories((prev) => [...prev, categoryName]);
            setCategoryName('');
            handleClose();
        }
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
                        <Button
                            onClick={handleAddCategory}
                            variant="contained"
                        >
                            Add
                        </Button>
                    </Box>
                </Modal>
            </Stack>
            <TableContainer component={Paper}>
                <Box sx={{ overflowX: 'auto' }}>
                    <Table sx={{ minWidth: '800px' }}>
                        <TableRow>
                            <TableCell>Category Name</TableCell>
                        </TableRow>
                        <TableBody>
                            {categories.map((category, index) => (
                                <TableRow key={index}>
                                    <TableCell>{category}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </TableContainer>
        </>
    )
}

