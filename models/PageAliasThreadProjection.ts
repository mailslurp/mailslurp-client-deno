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

import { AliasThreadProjection } from './AliasThreadProjection.ts';
import { PageableObject } from './PageableObject.ts';
import { SortObject } from './SortObject.ts';
import { HttpFile } from '../http/http.ts';

/**
* Paginated alias thread projection results.
*/
export class PageAliasThreadProjection {
    'content'?: Array<AliasThreadProjection>;
    'pageable'?: PageableObject;
    'totalElements': number;
    'totalPages': number;
    'last'?: boolean;
    'numberOfElements'?: number;
    'first'?: boolean;
    'size'?: number;
    'number'?: number;
    'sort'?: SortObject;
    'empty'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "Array<AliasThreadProjection>",
            "format": ""
        },
        {
            "name": "pageable",
            "baseName": "pageable",
            "type": "PageableObject",
            "format": ""
        },
        {
            "name": "totalElements",
            "baseName": "totalElements",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "last",
            "baseName": "last",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "numberOfElements",
            "baseName": "numberOfElements",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "first",
            "baseName": "first",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "SortObject",
            "format": ""
        },
        {
            "name": "empty",
            "baseName": "empty",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PageAliasThreadProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}

