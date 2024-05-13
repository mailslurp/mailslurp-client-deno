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

import { ConnectorSyncRequestResultExceptionCause } from './ConnectorSyncRequestResultExceptionCause.ts';
import { ConnectorSyncRequestResultExceptionCauseStackTrace } from './ConnectorSyncRequestResultExceptionCauseStackTrace.ts';
import { HttpFile } from '../http/http.ts';

export class ConnectorSyncRequestResultException {
    'cause'?: ConnectorSyncRequestResultExceptionCause;
    'stackTrace'?: Array<ConnectorSyncRequestResultExceptionCauseStackTrace>;
    'message'?: string;
    'suppressed'?: Array<ConnectorSyncRequestResultExceptionCause>;
    'localizedMessage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cause",
            "baseName": "cause",
            "type": "ConnectorSyncRequestResultExceptionCause",
            "format": ""
        },
        {
            "name": "stackTrace",
            "baseName": "stackTrace",
            "type": "Array<ConnectorSyncRequestResultExceptionCauseStackTrace>",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "suppressed",
            "baseName": "suppressed",
            "type": "Array<ConnectorSyncRequestResultExceptionCause>",
            "format": ""
        },
        {
            "name": "localizedMessage",
            "baseName": "localizedMessage",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConnectorSyncRequestResultException.attributeTypeMap;
    }
    
    public constructor() {
    }
}

