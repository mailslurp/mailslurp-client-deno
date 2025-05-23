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

export class SearchInboxesOptions {
    /**
    * Optional page index in list pagination
    */
    'pageIndex'?: number;
    /**
    * Optional page size in list pagination
    */
    'pageSize'?: number;
    /**
    * Optional createdAt sort direction ASC or DESC
    */
    'sortDirection'?: SearchInboxesOptionsSortDirectionEnum;
    /**
    * Optionally filter results for favourites only
    */
    'favourite'?: boolean;
    /**
    * Optionally filter by search words partial matching ID, tags, name, and email address
    */
    'search'?: string;
    /**
    * Optionally filter by tags. Will return inboxes that include given tags
    */
    'tag'?: string;
    /**
    * Optional filter by created after given date time
    */
    'since'?: Date;
    /**
    * Optional filter by created before given date time
    */
    'before'?: Date;
    /**
    * Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).
    */
    'inboxType'?: SearchInboxesOptionsInboxTypeEnum;
    /**
    * Optional filter by inbox function
    */
    'inboxFunction'?: SearchInboxesOptionsInboxFunctionEnum;
    /**
    * Optional domain ID filter
    */
    'domainId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageIndex",
            "baseName": "pageIndex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sortDirection",
            "baseName": "sortDirection",
            "type": "SearchInboxesOptionsSortDirectionEnum",
            "format": ""
        },
        {
            "name": "favourite",
            "baseName": "favourite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "search",
            "baseName": "search",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "since",
            "baseName": "since",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "before",
            "baseName": "before",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "inboxType",
            "baseName": "inboxType",
            "type": "SearchInboxesOptionsInboxTypeEnum",
            "format": ""
        },
        {
            "name": "inboxFunction",
            "baseName": "inboxFunction",
            "type": "SearchInboxesOptionsInboxFunctionEnum",
            "format": ""
        },
        {
            "name": "domainId",
            "baseName": "domainId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return SearchInboxesOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type SearchInboxesOptionsSortDirectionEnum = "ASC" | "DESC" ;
export type SearchInboxesOptionsInboxTypeEnum = "HTTP_INBOX" | "SMTP_INBOX" ;
export type SearchInboxesOptionsInboxFunctionEnum = "ALIAS" | "THREAD" | "CATCH_ALL" | "CONNECTOR" | "ACCOUNT" | "GUEST" | "OAUTH_CONNECTION_GMAIL" ;

