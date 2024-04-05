import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, TextField } from '@mui/material';
import { userDetails } from 'src/_mock/user';
import { useUsers } from 'src/hooks/use-users';

export default function UserPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(userDetails);
  const { data, isPending, isError } = useUsers();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = userDetails.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.role.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) 
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users Detail
      </Typography>

      <TextField
        label="Search user...."
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '16px', width: '300px' }}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
                No.
              </TableCell>
              <TableCell sx={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
                First Name
              </TableCell>
              <TableCell sx={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
                Role
              </TableCell>
              <TableCell sx={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
                Status
              </TableCell>
              <TableCell sx={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((users) => (
              <TableRow
                key={userDetails.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {users.id}
                </TableCell>
                <TableCell>{users.name}</TableCell>
                <TableCell>{users.role}</TableCell>
                <TableCell>{users.status ? 'Active' : 'InActive'}</TableCell>
                <TableCell>{users.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
