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

import { PageableObject } from './PageableObject.ts';
import { SendWithQueueResult } from './SendWithQueueResult.ts';
import { Sort } from './Sort.ts';
import { HttpFile } from '../http/http.ts';

/**
* Paginated sent email results for emails sent with queue. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full sent email entity use the projection ID with individual method calls.
*/
export class PageSentEmailWithQueueProjection {
    /**
    * Collection of items
    */
    'content': Array<SendWithQueueResult>;
    'pageable'?: PageableObject;
    'total'?: number;
    /**
    * Size of page requested
    */
    'size': number;
    /**
    * Page number starting at 0
    */
    'number': number;
    /**
    * Number of items returned
    */
    'numberOfElements': number;
    /**
    * Total number of pages available
    */
    'totalPages': number;
    /**
    * Total number of items available for querying
    */
    'totalElements': number;
    'last'?: boolean;
    'sort'?: Sort;
    'first'?: boolean;
    'empty'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "Array<SendWithQueueResult>",
            "format": ""
        },
        {
            "name": "pageable",
            "baseName": "pageable",
            "type": "PageableObject",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
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
            "name": "numberOfElements",
            "baseName": "numberOfElements",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalElements",
            "baseName": "totalElements",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "last",
            "baseName": "last",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "Sort",
            "format": ""
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
        return PageSentEmailWithQueueProjection.attributeTypeMap;
    }
    
    public constructor() {
    }
}

