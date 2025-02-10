import { Contact } from './Accounts/Contact';
import { Machine } from './Accounts/Machine';
import { User } from './Accounts/User';
import { UserGroup } from './Accounts/UserGroup';
import { ulong } from './API/Types';
import { Company } from './Companies/Company';
import { Picture } from './Images/Picture';

/**
 * 
 */
export const COMPANIES: Map<ulong, Company> = new Map;
/**
 * 
 */
export const CONTACTS: Map<ulong, Contact> = new Map;
/**
 * 
 */
export const MACHINES: Map<ulong, Machine> = new Map;
/**
 * 
 */
export const USERS: Map<ulong, User> = new Map;
/**
 * 
 */
export const GROUPS: Map<ulong, UserGroup> = new Map;

/**
 * 
 */
export const PICTURES: Map<ulong, Picture> = new Map;