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

import { OrganizationInboxProjection } from './OrganizationInboxProjection.ts';
import { Pageable } from './Pageable.ts';
import { Sort } from './Sort.ts';
import { HttpFile } from '../http/http.ts';

/**
* Paginated organization inbox results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
*/
export class PageOrganizationInboxProjection {
    'content'?: Array<OrganizationInboxProjection>;
    'pageable'?: Pageable;
    'totalElements'?: number;
    'totalPages'?: number;
    'last'?: boolean;
    'size'?: number;
    'number'?: number;
    'sort'?: Sort;
    'numberOfElements'?: number;
    'first'?: boolean;
    'empty'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "Array<OrganizationInboxProjection>",
            "format": ""
        },
        {
            "name": "pageable",
            "baseName": "pageable",
            "type": "Pageable",
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
            "type": "Sort",
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
            "name": "empty",
            "baseName": "empty",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PageOrganizationInboxProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}

