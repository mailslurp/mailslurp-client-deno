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

import { HttpFile } from '../http/http.ts';

export class InboxRulesetDto {
    'id'?: string;
    'inboxId'?: string;
    'scope'?: InboxRulesetDtoScopeEnum;
    'action'?: InboxRulesetDtoActionEnum;
    'target'?: string;
    'handler'?: InboxRulesetDtoHandlerEnum;
    'createdAt'?: Date;

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
            "name": "scope",
            "baseName": "scope",
            "type": "InboxRulesetDtoScopeEnum",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "InboxRulesetDtoActionEnum",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        {
            "name": "handler",
            "baseName": "handler",
            "type": "InboxRulesetDtoHandlerEnum",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return InboxRulesetDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type InboxRulesetDtoScopeEnum = "RECEIVING_EMAILS" | "SENDING_EMAILS" ;
export type InboxRulesetDtoActionEnum = "BLOCK" | "ALLOW" | "FILTER_REMOVE" ;
export type InboxRulesetDtoHandlerEnum = "EXCEPTION" ;

