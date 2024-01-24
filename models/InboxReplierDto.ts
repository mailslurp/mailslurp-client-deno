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
* Inbox replier. Will automatically reply to inbound emails that match given field for an inbox.
*/
export class InboxReplierDto {
    'id': string;
    'inboxId': string;
    'name'?: string;
    'field': InboxReplierDtoFieldEnum;
    'match': string;
    'replyTo'?: string;
    'subject'?: string;
    'from'?: string;
    'charset'?: string;
    'isHTML': boolean;
    'templateId'?: string;
    'templateVariables'?: { [key: string]: any; };
    'ignoreReplyTo': boolean;
    'createdAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "InboxReplierDtoFieldEnum",
            "format": ""
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "string",
            "format": ""
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHTML",
            "baseName": "isHTML",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "templateVariables",
            "baseName": "templateVariables",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "ignoreReplyTo",
            "baseName": "ignoreReplyTo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return InboxReplierDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type InboxReplierDtoFieldEnum = "RECIPIENTS" | "SENDER" | "SUBJECT" | "ATTACHMENTS" ;

