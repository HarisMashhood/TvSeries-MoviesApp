import * as React from 'react';
import { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: "black",
        zIndex: 100,
    },
})

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate();
    useEffect(() => {
        if (value === 0) {
            Navigate('/')
        }
        else if (value === 1) Navigate('/movies');
        else if (value === 2) Navigate('/series');
        else if (value === 3) Navigate('/search');
    }, [value, Navigate]);

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.root}
        >
            <BottomNavigationAction style={{}} label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{}} label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction style={{}} label="TV Series" icon={<TvIcon />} />
            <BottomNavigationAction style={{}} label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}