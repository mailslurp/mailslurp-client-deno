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

import { Set } from './Set.ts';
import { HttpFile } from '../http/http.ts';

export class ContactProjection {
    'id': string;
    'groupId'?: string;
    'createdAt': Date;
    'firstName'?: string;
    'lastName'?: string;
    'company'?: string;
    'emailAddresses'?: Set<string>;
    'optOut'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailAddresses",
            "baseName": "emailAddresses",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "optOut",
            "baseName": "optOut",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContactProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}

