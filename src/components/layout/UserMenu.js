import { useState } from 'react';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Divider,
  Typography,
  Fade,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CloseIcon from '@mui/icons-material/Close';

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleClose();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleClose();
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {isLoggedIn ? (
        <>
          <IconButton
            onClick={handleMenu}
            sx={{
              p: 0,
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'transparent',
                background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(255, 77, 77, 0.3)',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <PersonIcon />
            </Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              sx: {
                mt: 1.5,
                background: 'rgba(17, 25, 40, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                minWidth: '250px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                '& .MuiMenuItem-root': {
                  color: '#fff',
                  py: 1.5,
                  transition: 'all 0.2s ease',
                },
              },
            }}
          >
            <Box sx={{ 
              px: 2, 
              py: 2,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Demo User
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  demo@example.com
                </Typography>
              </Box>
              <IconButton
                onClick={handleClose}
                size="small"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#fff',
                    background: 'rgba(255,255,255,0.1)',
                    transform: 'rotate(90deg)',
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            <MenuItem
              component={Link}
              to="/profile"
              onClick={handleClose}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateX(5px)',
                },
              }}
            >
              <PersonIcon sx={{ mr: 2, color: '#FF4D4D' }} />
              View Profile
            </MenuItem>
            <MenuItem
              onClick={handleLogout}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateX(5px)',
                },
              }}
            >
              <LogoutIcon sx={{ mr: 2, color: '#FF4D4D' }} />
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            startIcon={<LoginIcon />}
            onClick={handleLogin}
            sx={{
              color: '#fff',
              borderRadius: '10px',
              px: 3,
              background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #F9CB28, #FF4D4D)',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)',
              },
            }}
          >
            Login
          </Button>
          <Button
            startIcon={<HowToRegIcon />}
            component={Link}
            to="/signup"
            sx={{
              color: '#fff',
              borderRadius: '10px',
              px: 3,
              border: '2px solid #FF4D4D',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#F9CB28',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(255, 77, 77, 0.3)',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default UserMenu; 