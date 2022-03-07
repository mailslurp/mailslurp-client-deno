/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * OpenAPI spec version: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

/**
* Representation a user's account
*/
export class UserDto {
    'id': string;
    'apiKey': string;
    'emailAddress': string;
    'emailAddressMd5': string;
    'created'?: Date;
    'userType'?: UserDtoUserTypeEnum;
    /**
    * Does user belong to an organization
    */
    'organization'?: string;
    /**
    * Has user accepted an organization invite
    */
    'verified'?: UserDtoVerifiedEnum;
    'hasPassword': boolean;
    'isFrozen': boolean;
    'addNewContacts'?: boolean;
    'ssoProvider'?: string;
    'customerId'?: string;
    'hasOnboarded'?: boolean;
    'imapUsername'?: string;
    'imapPassword'?: string;
    'smtpUsername'?: string;
    'smtpPassword'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailAddressMd5",
            "baseName": "emailAddressMd5",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "userType",
            "baseName": "userType",
            "type": "UserDtoUserTypeEnum",
            "format": ""
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "UserDtoVerifiedEnum",
            "format": ""
        },
        {
            "name": "hasPassword",
            "baseName": "hasPassword",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFrozen",
            "baseName": "isFrozen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "addNewContacts",
            "baseName": "addNewContacts",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ssoProvider",
            "baseName": "ssoProvider",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasOnboarded",
            "baseName": "hasOnboarded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "imapUsername",
            "baseName": "imapUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "imapPassword",
            "baseName": "imapPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "smtpUsername",
            "baseName": "smtpUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "smtpPassword",
            "baseName": "smtpPassword",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type UserDtoUserTypeEnum = "SOLO" | "CHILD_SOLO" | "CHILD_TEAM" ;
export type UserDtoVerifiedEnum = "VERIFIED" | "PENDING" ;

