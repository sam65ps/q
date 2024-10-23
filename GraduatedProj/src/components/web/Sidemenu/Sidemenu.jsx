import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { FaQuran, FaHome, FaSignOutAlt, FaClipboard, FaNewspaper, FaCertificate } from 'react-icons/fa';
import { PiExam } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import './Sidemenu.css';

export default function SideMenu({ toggleDrawer }) {
  return (
    <Box
      sx={{ width: 250, backgroundColor: '#004744', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <CgProfile style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="الملف التعريفي" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaQuran style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="الحلقات" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaClipboard style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="التقرير" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaNewspaper style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="الأخبار" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaCertificate style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="الشهادات" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PiExam style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="الاختبارات" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaHome style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="الرئيسية" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FaSignOutAlt style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="تسجيل الخروج" sx={{ color: 'white' }} />
        </ListItem>
      </List>
    </Box>
  );
}
