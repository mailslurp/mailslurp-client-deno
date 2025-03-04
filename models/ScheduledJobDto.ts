/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * OpenAPI spec version: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class ScheduledJobDto {
    'id': string;
    'userId': string;
    'inboxId': string;
    'jobId': string;
    'groupId': string;
    'triggerId': string;
    'status': ScheduledJobDtoStatusEnum;
    'sendAtTimestamp': Date;
    'createdAt': Date;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "jobId",
            "baseName": "jobId",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "triggerId",
            "baseName": "triggerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ScheduledJobDtoStatusEnum",
            "format": ""
        },
        {
            "name": "sendAtTimestamp",
            "baseName": "sendAtTimestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ScheduledJobDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type ScheduledJobDtoStatusEnum = "SUBMITTED" | "COMPLETED" | "ABORTED" | "FAILED" | "CANCELLED" ;

