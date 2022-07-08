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

import { Sort } from './Sort.ts';
import { HttpFile } from '../http/http.ts';

export class PageableObject {
    'offset'?: number;
    'sort'?: Sort;
    'pageNumber'?: number;
    'pageSize'?: number;
    'paged'?: boolean;
    'unpaged'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "Sort",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
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
            "name": "paged",
            "baseName": "paged",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "unpaged",
            "baseName": "unpaged",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PageableObject.attributeTypeMap;
    }
    
    public constructor() {
    }
}

