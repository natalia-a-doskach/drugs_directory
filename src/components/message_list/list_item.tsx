// @ts-nocheck
import React, {Component, useState} from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome } from "@fortawesome/free-solid-svg-icons";

function ListItem(props) {
    const [isShown, setIsShown] = useState(false);
    return(
      <div key={props.item.id} className="messageCard bigCard relativeCard"
      onMouseEnter={() => setIsShown(true)}
      onClick={() => setIsShown(!isShown)}
      onMouseLeave={() => setIsShown(false)}>
      {props.canDeleteItem && isShown &&
        <>
        <div className="deleteCard1 btnToClick1" onClick={() => {
              props.deleteItem(props.item.id);
        }}><p>удалить</p></div>

        <div className="processCard btnToClick1" onClick={() => {
              props.processItem(props.item.id);
        }}><p>{props.item.isProcessed? "отметить как необработанное":"отметить как обработанное"}</p></div>

        <div className="respondCard btnToClick1" onClick={() => {
              props.composeEmail(props.item)
        }}><p>ответить</p></div>
       </>
      }
      <div className="drugCard"
      onClick={() => {
        props.handleClick(props.item);
  }} >
      <p className={props.isBold?"boldName notOverFl":" boldName notOverFl"}>
      {props.item.isProcessed && <FontAwesomeIcon icon={faCheck} />}{props.item.name}({props.item.email}) {(props.item.isMedic ? " - мед работник" : " - пациент")}
      </p>
      <p className={props.isBold?"boldName notOverFl":"notOverFl messageCard" }>
      {props.item.text}
      </p>
      </div>
      <hr/>
      </div>
    )
}
export default ListItem;
