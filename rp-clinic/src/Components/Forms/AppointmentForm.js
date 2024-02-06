import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import './AppointmentForm.css';
import { Button } from '@mui/material';

function AppointmentForm() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className='appointment-main-div'>
            <div className='appointment-heading'>
                MAKE APPOINTMENT
            </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        fullWidth
                        label="First Name"
                        id="outlined-size-small"
                        size="small"
                    />
                </div>
                <div>
                    <TextField
                        label="Last Name"
                        id="outlined-size-small"
                        size="small"
                    />
                </div>
                <div>
                    <TextField
                        label="Phone"
                        id="outlined-size-small"
                        size="small"
                    />
                </div>
            </Box>
            <FormControl sx={{ m: 1, minWidth: '35ch' }}>
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{ fontSize: 17 }}>Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                    <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                </RadioGroup>
            </FormControl>
            <br />
            <FormControl sx={{ m: 1, minWidth: '35ch' }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value="age"
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={{ m: 1, minWidth: '35ch' }} />
            </LocalizationProvider>
            <br />
            <FormControl sx={{ m: 1, minWidth: '35ch' }} size="small">
                <InputLabel id="demo-select-small-label">Time</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value="age"
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>9:00-9:30 AM</MenuItem>
                    <MenuItem value={20}>9:30-10:00 AM</MenuItem>
                    <MenuItem value={30}>10:30-11:00 AM</MenuItem>
                    <MenuItem value={30}>10:30-11:00 AM</MenuItem>
                    <MenuItem value={30}>11:30-12:00 AM</MenuItem>
                    <MenuItem value={30}>12:30-13:00 PM</MenuItem>
                    <MenuItem value={30}>14:30-15:00 PM</MenuItem>
                    <MenuItem value={30}>15:30-16:00 PM</MenuItem>
                    <MenuItem value={30}>16:30-17:00 PM</MenuItem>
                </Select>
            </FormControl>
            <br />
            <Box sx={{ '& button': { m: 1, minWidth: '36ch' } }}>
                <Button variant='contained' size='large'>Book Appointment</Button>
            </Box>
        </div>
    );
}

export default AppointmentForm