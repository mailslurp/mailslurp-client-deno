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
* Options for creating an inbox replier
*/
export class CreateInboxReplierOptions {
    /**
    * Inbox ID to attach replier to
    */
    'inboxId': string;
    /**
    * Name for replier
    */
    'name'?: string;
    /**
    * Field to match against to trigger inbox replier for inbound email
    */
    'field': CreateInboxReplierOptionsFieldEnum;
    /**
    * String or wildcard style match for field specified when evaluating reply rules
    */
    'match': string;
    /**
    * Reply-to email address when sending replying
    */
    'replyTo'?: string;
    /**
    * Subject override when replying to email
    */
    'subject'?: string;
    /**
    * Send email from address
    */
    'from'?: string;
    /**
    * Email reply charset
    */
    'charset'?: string;
    /**
    * Ignore sender replyTo when responding. Send directly to the sender if enabled.
    */
    'ignoreReplyTo'?: boolean;
    /**
    * Send HTML email
    */
    'isHTML'?: boolean;
    /**
    * Email body for reply
    */
    'body'?: string;
    /**
    * ID of template to use when sending a reply
    */
    'templateId'?: string;
    /**
    * Template variable values
    */
    'templateVariables'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inboxId",
            "baseName": "inboxId",
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
            "name": "field",
            "baseName": "field",
            "type": "CreateInboxReplierOptionsFieldEnum",
            "format": ""
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "string",
            "format": ""
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string",
            "format": ""
        },
        {
            "name": "ignoreReplyTo",
            "baseName": "ignoreReplyTo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHTML",
            "baseName": "isHTML",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "templateVariables",
            "baseName": "templateVariables",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateInboxReplierOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type CreateInboxReplierOptionsFieldEnum = "RECIPIENTS" | "SENDER" | "SUBJECT" | "ATTACHMENTS" ;

