import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {FaQuran ,FaHome, FaSignOutAlt, FaClipboard, FaNewspaper, FaCertificate, FaQuestion, FaFolderOpen } from 'react-icons/fa';
import { PiExam } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";


import './Sidemenu.css';
import logo from "../../../assets/images/logo.png";

export default function SideMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column side-menu">
      <Navbar.Brand href="#home" className="menu-logo">
        <img src={logo} alt="Logo" width="100" />
      </Navbar.Brand>
      <Nav className="flex-column menu-list">
        <Nav.Link href="#profile">
          <CgProfile className="menu-icon" />
          الملف التعريفي
        </Nav.Link>
        <Nav.Link href="#circles">
          <FaQuran className="menu-icon" />
         الحلقات
        </Nav.Link>
        <Nav.Link href="#report">
          <FaClipboard className="menu-icon" />
          التقرير
        </Nav.Link>
        <Nav.Link href="#news">
          <FaNewspaper className="menu-icon" />
          الأخبار
        </Nav.Link>
        <Nav.Link href="#certificates">
          <FaCertificate className="menu-icon" />
          الشهادات
        </Nav.Link>
        <Nav.Link href="#exams">
          <PiExam className="menu-icon" />
          الاختبارات
        </Nav.Link>
        <Nav.Link href="#home">
          <FaHome className="menu-icon" />
          الرئيسية
        </Nav.Link>
        <Nav.Link href="#logout" className="mt-auto">
          <FaSignOutAlt className="menu-icon" />
          تسجيل الخروج
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
