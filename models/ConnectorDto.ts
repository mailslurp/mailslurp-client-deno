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

export class ConnectorDto {
    'id': string;
    'name'?: string;
    'enabled': boolean;
    'userId': string;
    'inboxId': string;
    'syncEnabled': boolean;
    'syncScheduleType'?: ConnectorDtoSyncScheduleTypeEnum;
    'syncInterval'?: number;
    'hasImapConnection': boolean;
    'hasSmtpConnection': boolean;
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
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
            "name": "syncEnabled",
            "baseName": "syncEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "syncScheduleType",
            "baseName": "syncScheduleType",
            "type": "ConnectorDtoSyncScheduleTypeEnum",
            "format": ""
        },
        {
            "name": "syncInterval",
            "baseName": "syncInterval",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hasImapConnection",
            "baseName": "hasImapConnection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasSmtpConnection",
            "baseName": "hasSmtpConnection",
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
        return ConnectorDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ConnectorDtoSyncScheduleTypeEnum = "INTERVAL" ;

