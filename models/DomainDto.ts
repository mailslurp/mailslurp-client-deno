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

import { DomainNameRecord } from './DomainNameRecord.ts';
import { HttpFile } from '../http/http.ts';

/**
* Domain plus verification records and status
*/
export class DomainDto {
    'id': string;
    'userId': string;
    /**
    * Custom domain name
    */
    'domain': string;
    /**
    * Verification tokens
    */
    'verificationToken': string;
    /**
    * Unique token DKIM tokens
    */
    'dkimTokens': Array<string>;
    /**
    * If the domain is duplicate records.
    */
    'duplicateRecordsMessage'?: string;
    /**
    * Whether the domain has duplicated required records. If true then see the domain in the dashboard app.
    */
    'hasDuplicateRecords': boolean;
    /**
    * If the domain is missing records then show which pairs are missing.
    */
    'missingRecordsMessage'?: string;
    /**
    * Whether the domain has missing required records. If true then see the domain in the dashboard app.
    */
    'hasMissingRecords': boolean;
    /**
    * Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.
    */
    'isVerified': boolean;
    /**
    * List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.
    */
    'domainNameRecords': Array<DomainNameRecord>;
    /**
    * The optional catch all inbox that will receive emails sent to the domain that cannot be matched.
    */
    'catchAllInboxId'?: string;
    'createdAt': Date;
    'updatedAt': Date;
    /**
    * Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.
    */
    'domainType': DomainDtoDomainTypeEnum;

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
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "verificationToken",
            "baseName": "verificationToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "dkimTokens",
            "baseName": "dkimTokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "duplicateRecordsMessage",
            "baseName": "duplicateRecordsMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasDuplicateRecords",
            "baseName": "hasDuplicateRecords",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "missingRecordsMessage",
            "baseName": "missingRecordsMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasMissingRecords",
            "baseName": "hasMissingRecords",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isVerified",
            "baseName": "isVerified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "domainNameRecords",
            "baseName": "domainNameRecords",
            "type": "Array<DomainNameRecord>",
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
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "domainType",
            "baseName": "domainType",
            "type": "DomainDtoDomainTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DomainDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type DomainDtoDomainTypeEnum = "HTTP_INBOX" | "SMTP_DOMAIN" ;

