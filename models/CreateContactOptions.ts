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

export class CreateContactOptions {
    'firstName'?: string;
    'lastName'?: string;
    'company'?: string;
    /**
    * Set of email addresses belonging to the contact
    */
    'emailAddresses'?: Set<string>;
    /**
    * Tags that can be used to search and group contacts
    */
    'tags'?: Set<string>;
    'metaData'?: any;
    /**
    * Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.
    */
    'optOut'?: boolean;
    /**
    * Group IDs that contact belongs to
    */
    'groupId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "tags",
            "baseName": "tags",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "any",
            "format": ""
        },
        {
            "name": "optOut",
            "baseName": "optOut",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return CreateContactOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

