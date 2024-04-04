import { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { Box, Input, Modal, Switch, InputLabel, FormControl } from '@mui/material';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import TableNoData from '../table-no-data';
import TableEmptyRows from '../table-empty-rows';
import ServiceTableRow from '../services-table-row';
import ServiceTableHead from '../services-table-head';
import ServiceTableToolbar from '../services-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import { useCreateService, useServices } from 'src/hooks/use-services';
import { toast } from 'react-toastify';
export default function ServicePage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [services, setServices] = useState('');

  const { isLoading, isError, data } = useServices();
  const mutation = useCreateService();
  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = services.map((n) => n.servicename);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, servicename) => {
    const selectedIndex = selected.indexOf(servicename);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, servicename);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };
  const handleAddService = async () => {
    mutation.mutate((serviceName), {
      onSuccess: () => {
        setServices((prevServices) => [...prevServices, serviceName]);
        setServiceName('');
        handleClose();
        toast.success('Added Successfully')
      }, onError: (err) => {
        toast.error(err?.response?.message || 'error while adding')
      },
    })
    if (serviceName.trim() !== '') {
      const newService = { id: services.length + 1, servicename: serviceName, avatarUrl: '' };
      setServices((prevServices) => [...prevServices, newService]);
      setServiceName('');
      handleClose();
    }
  };
  // const dataFiltered = applyFilter({
  //   // inputData: servic es,
  //   comparator: getComparator(order, orderBy),
  //   filterName,
  // });

  // const notFound = !dataFiltered.length && !!filterName;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [serviceName, setServiceName] = useState('');

  if (isLoading) return 'Loading...'
  if (isError) return 'Error...'

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Services</Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Services
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={style}>
            <Stack direction='column'>
              <FormControl>
                <InputLabel htmlFor="my-input">Service Name</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                />
              </FormControl>
              <Switch {...label} />
              <Button variant='contained' onClick={handleAddService} startIcon={<Iconify icon="eva:plus-fill" />}>
                Add
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Stack>
      <Card>
        <ServiceTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <ServiceTableHead
                order={order}
                orderBy={orderBy}
                rowCount={services.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[{ id: 'servicename', label: 'Service Name' }]}
              />
              <TableBody>
                {data?.data.map((services) => {
                  console.log(data);
                  return (
                    <ServiceTableRow
                      key={services.id}
                      servicename={services.serviceName}
                      avatarUrl={services.avatarUrl}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  )
                })}
                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, services.length)}
                />
                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        <TablePagination
          page={page}
          component="div"
          count={services.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}