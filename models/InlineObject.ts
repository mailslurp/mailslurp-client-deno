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

export class InlineObject {
    /**
    * Optional content type header of attachment
    */
    'contentTypeHeader'?: string;
    'file': HttpFile;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contentTypeHeader",
            "baseName": "contentTypeHeader",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "HttpFile",
            "format": "binary"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
    
    public constructor() {
    }
}

