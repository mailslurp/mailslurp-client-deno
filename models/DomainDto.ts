/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
 *
 * OpenAPI spec version: 6.5.2
 * 
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
    /**
    * The optional catch all inbox that will receive emails sent to the domain that cannot be matched.
    */
    'catchAllInboxId'?: string;
    'createdAt': Date;
    /**
    * Unique token DKIM tokens
    */
    'dkimTokens'?: Array<string>;
    /**
    * Custom domain name
    */
    'domain'?: string;
    /**
    * List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.
    */
    'domainNameRecords'?: Array<DomainNameRecord>;
    'id': string;
    /**
    * Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.
    */
    'isVerified'?: boolean;
    'updatedAt': Date;
    'userId': string;
    /**
    * Verification tokens
    */
    'verificationToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "dkimTokens",
            "baseName": "dkimTokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "domainNameRecords",
            "baseName": "domainNameRecords",
            "type": "Array<DomainNameRecord>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "isVerified",
            "baseName": "isVerified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "verificationToken",
            "baseName": "verificationToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DomainDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

