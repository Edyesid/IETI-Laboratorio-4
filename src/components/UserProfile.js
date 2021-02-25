  
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './UserProfile.css';

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='paper'>
                <Avatar className='avatar'>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <form className='form' noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Full name"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Confirm password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                    </Grid>
                    </Grid>
                    <br/>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className='submit'
                    >
                    Save
                    </Button>
                </form>
                </div>
            </Container>
        );
    }
}
export default UserProfile;