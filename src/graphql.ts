
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    firstName: string;
    lastName: string;
    isActive?: boolean;
}

export interface IQuery {
    getUsers(): User[] | Promise<User[]>;
}
