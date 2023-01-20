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
* Preview object for domain entity
*/
export class DomainPreview {
    'id': string;
    'domain': string;
    'catchAllInboxId'?: string;
    'createdAt': Date;
    /**
    * Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.
    */
    'domainType': DomainPreviewDomainTypeEnum;
    'isVerified': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "catchAllInboxId",
            "baseName": "catchAllInboxId",
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
            "name": "domainType",
            "baseName": "domainType",
            "type": "DomainPreviewDomainTypeEnum",
            "format": ""
        },
        {
            "name": "isVerified",
            "baseName": "isVerified",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DomainPreview.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type DomainPreviewDomainTypeEnum = "HTTP_INBOX" | "SMTP_DOMAIN" ;

