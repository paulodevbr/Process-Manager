/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

import {Badge} from "react-bootstrap";

export const LOAD_LIST = 'process-manager/home/LOAD_LIST';
export const LOAD_LIST_SUCCESS = 'process-manager/home/LOAD_LIST_SUCCESS';
export const SHOW_USER_FORM = 'process-manager/home/SHOW_USER_FORM';
export const HIDE_USER_FORM = 'process-manager/home/HIDE_USER_FORM';


export const ADMIN = 'ADMIN';
export const TRIADOR = 'TRIADOR';
export const FINALIZADOR = 'FINALIZADOR';

