// @ts-nocheck
import React, {Component} from 'react';
import './Header.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../../shared/logo.png'
import Media from 'react-media';
import { Menu } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
function DDitem (props) {
    return(<li>
              <Link to={props.link}>{props.name}</Link>
            </li>
          )}

function HeaderItemDD(props) {
  const DD = () => props.list.map((item)=>{return(<DDitem link={props.link} name={item}/>)});
  return (
    <li className="nav-item dd">
    <Link to={props.link} className="nav-link">
      {props.name}
    </Link>
      <ul className="list-unstyled dropdownMenu">
      {<DD/>}
      </ul>
    </li>
  )
}

function HeaderItem(props) {
  return (
    <li className="nav-item" onClick={props.onClick}>
    <Link to={props.link} className="nav-link">
      {props.name}
    </Link>
    </li>
  )
}

function Header() {
  const isBig = useMediaQuery('(min-width:850px)');
  const [menuOpen, setMenu] = React.useState(isBig);
  const toggleMenu = () => {
    setMenu(!menuOpen)
  }
  return (
    <div className="table2">
    <h4>Админ-панель</h4>
    {(menuOpen || isBig ) &&
      <ul className="list" id="nav">
        <HeaderItem onClick={toggleMenu} link="/admin/moderators" name="модераторы"/>
        <HeaderItem onClick={toggleMenu} link="/admin/drugs" name="лекарства"/>
        <HeaderItem onClick={toggleMenu} link="/admin/recs" name='клинические рекомендации'/>
        <HeaderItem onClick={toggleMenu} link="/admin/news" name='новости'/>
        <HeaderItem onClick={toggleMenu} link="/admin/video" name='видео'/>
        <HeaderItem onClick={toggleMenu} link="/admin/feedback" name="сообщения пользователей"/>
      </ul>
    }
<Menu className="hamburger" fontSize="large" onClick={toggleMenu}/>
    </div>



  );
}
export default Header;
