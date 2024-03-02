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

export class ConnectorSyncRequestResultExceptionCauseStackTrace {
    'classLoaderName'?: string;
    'moduleName'?: string;
    'moduleVersion'?: string;
    'methodName'?: string;
    'fileName'?: string;
    'lineNumber'?: number;
    'className'?: string;
    'nativeMethod'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "classLoaderName",
            "baseName": "classLoaderName",
            "type": "string",
            "format": ""
        },
        {
            "name": "moduleName",
            "baseName": "moduleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "moduleVersion",
            "baseName": "moduleVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "methodName",
            "baseName": "methodName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lineNumber",
            "baseName": "lineNumber",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "className",
            "baseName": "className",
            "type": "string",
            "format": ""
        },
        {
            "name": "nativeMethod",
            "baseName": "nativeMethod",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConnectorSyncRequestResultExceptionCauseStackTrace.attributeTypeMap;
    }
    
    public constructor() {
    }
}

