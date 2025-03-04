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

export class DomainInformation {
    'domainName': string;
    'verified': boolean;
    /**
    * Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.
    */
    'domainType': DomainInformationDomainTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domainName",
            "baseName": "domainName",
            "type": "string",
            "format": ""
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "domainType",
            "baseName": "domainType",
            "type": "DomainInformationDomainTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DomainInformation.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type DomainInformationDomainTypeEnum = "HTTP_INBOX" | "SMTP_DOMAIN" ;

