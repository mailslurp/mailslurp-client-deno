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
* Byte array request body
*/
export class InlineObject1 {
    '_short'?: number;
    '_char'?: string;
    '_int'?: number;
    '_long'?: number;
    '_float'?: number;
    '_double'?: number;
    'direct'?: boolean;
    'readOnly'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_short",
            "baseName": "short",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "_char",
            "baseName": "char",
            "type": "string",
            "format": ""
        },
        {
            "name": "_int",
            "baseName": "int",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "_long",
            "baseName": "long",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "_float",
            "baseName": "float",
            "type": "number",
            "format": "float"
        },
        {
            "name": "_double",
            "baseName": "double",
            "type": "number",
            "format": "double"
        },
        {
            "name": "direct",
            "baseName": "direct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject1.attributeTypeMap;
    }
    
    public constructor() {
    }
}

