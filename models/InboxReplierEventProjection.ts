/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
* Inbox replier event
*/
export class InboxReplierEventProjection {
    'createdAt': Date;
    'replierId'?: string;
    'recipients'?: Array<string>;
    'emailId'?: string;
    'inboxId'?: string;
    'userId'?: string;
    'sentId'?: string;
    'message'?: string;
    'id'?: string;
    'status'?: InboxReplierEventProjectionStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "replierId",
            "baseName": "replierId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "sentId",
            "baseName": "sentId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InboxReplierEventProjectionStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InboxReplierEventProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type InboxReplierEventProjectionStatusEnum = "SUCCESS" | "FAILURE" ;

