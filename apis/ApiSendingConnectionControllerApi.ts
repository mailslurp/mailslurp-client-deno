// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateSendingConnectionOptions } from '../models/CreateSendingConnectionOptions.ts';
import { DeliverySenderCapacityDto } from '../models/DeliverySenderCapacityDto.ts';
import { RotateSendingConnectionCredentialsOptions } from '../models/RotateSendingConnectionCredentialsOptions.ts';
import { SendingConnectionDeliveryProbeDto } from '../models/SendingConnectionDeliveryProbeDto.ts';
import { SendingConnectionDto } from '../models/SendingConnectionDto.ts';
import { SendingConnectionProviderDto } from '../models/SendingConnectionProviderDto.ts';
import { UpdateDeliverySenderSeatsOptions } from '../models/UpdateDeliverySenderSeatsOptions.ts';
import { UpdateSendingConnectionOptions } from '../models/UpdateSendingConnectionOptions.ts';

/**
 * no description
 */
export class ApiSendingConnectionControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a sending connection
     * @param createSendingConnectionOptions 
     */
    public async createSendingConnection(createSendingConnectionOptions: CreateSendingConnectionOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createSendingConnectionOptions' is not null or undefined
        if (createSendingConnectionOptions === null || createSendingConnectionOptions === undefined) {
            throw new RequiredError('Required parameter createSendingConnectionOptions was null or undefined when calling createSendingConnection.');
        }


        // Path Params
        const localVarPath = '/sending-connections';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createSendingConnectionOptions, "CreateSendingConnectionOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Cancel purchased Delivery Sender seats
     */
    public async deleteDeliverySenderSeats(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/sending-connections/sender-seats';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Disconnect a sending connection
     * @param connectionId 
     */
    public async deleteSendingConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling deleteSendingConnection.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Releases this connection's shared sender allocation while retaining its verified credentials.
     * Disable Delivery Sender capacity
     * @param connectionId 
     */
    public async disableSendingConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling disableSendingConnection.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}/enable'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Allocates shared sender capacity. Included capacity is used first and supported additional capacity is added to the existing subscription when possible.
     * Enable a verified Delivery Sender
     * @param connectionId 
     */
    public async enableSendingConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling enableSendingConnection.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}/enable'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get shared Delivery Sender capacity
     */
    public async getDeliverySenderCapacity(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/sending-connections/capacity';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a sending connection
     * @param connectionId 
     */
    public async getSendingConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling getSendingConnection.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List sending connection providers
     */
    public async getSendingConnectionProviders(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/sending-connections/providers';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List sending connections
     */
    public async getSendingConnections(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/sending-connections';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Uses only the selected customer-owned connection. A successful receipt proves provider acceptance and delivery to MailSlurp, not Gmail or Outlook placement.
     * Send an unbilled delivery test to a temporary MailSlurp inbox
     * @param connectionId 
     */
    public async probeSendingConnectionDelivery(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling probeSendingConnectionDelivery.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}/delivery-probe'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Verifies supported replacement credentials before atomically replacing the encrypted credential envelope.
     * Rotate sending connection credentials
     * @param connectionId 
     * @param rotateSendingConnectionCredentialsOptions 
     */
    public async rotateSendingConnectionCredentials(connectionId: string, rotateSendingConnectionCredentialsOptions: RotateSendingConnectionCredentialsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling rotateSendingConnectionCredentials.');
        }


        // verify required parameter 'rotateSendingConnectionCredentialsOptions' is not null or undefined
        if (rotateSendingConnectionCredentialsOptions === null || rotateSendingConnectionCredentialsOptions === undefined) {
            throw new RequiredError('Required parameter rotateSendingConnectionCredentialsOptions was null or undefined when calling rotateSendingConnectionCredentials.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}/credentials'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(rotateSendingConnectionCredentialsOptions, "RotateSendingConnectionCredentialsOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update purchased Delivery Sender seats
     * @param updateDeliverySenderSeatsOptions 
     */
    public async updateDeliverySenderSeats(updateDeliverySenderSeatsOptions: UpdateDeliverySenderSeatsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'updateDeliverySenderSeatsOptions' is not null or undefined
        if (updateDeliverySenderSeatsOptions === null || updateDeliverySenderSeatsOptions === undefined) {
            throw new RequiredError('Required parameter updateDeliverySenderSeatsOptions was null or undefined when calling updateDeliverySenderSeats.');
        }


        // Path Params
        const localVarPath = '/sending-connections/sender-seats';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDeliverySenderSeatsOptions, "UpdateDeliverySenderSeatsOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates non-secret connection metadata. Use the credentials endpoint to replace supported SMTP or API-key credentials.
     * Update a sending connection
     * @param connectionId 
     * @param updateSendingConnectionOptions 
     */
    public async updateSendingConnection(connectionId: string, updateSendingConnectionOptions: UpdateSendingConnectionOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling updateSendingConnection.');
        }


        // verify required parameter 'updateSendingConnectionOptions' is not null or undefined
        if (updateSendingConnectionOptions === null || updateSendingConnectionOptions === undefined) {
            throw new RequiredError('Required parameter updateSendingConnectionOptions was null or undefined when calling updateSendingConnection.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateSendingConnectionOptions, "UpdateSendingConnectionOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Verifies the customer credential without enabling billable sender capacity. A consuming product enables the shared Delivery Sender seat when sending starts.
     * Verify a sending connection
     * @param connectionId 
     */
    public async verifySendingConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling verifySendingConnection.');
        }


        // Path Params
        const localVarPath = '/sending-connections/{connectionId}/verify'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ApiSendingConnectionControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSendingConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSendingConnection(response: ResponseContext): Promise<SendingConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDeliverySenderSeats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDeliverySenderSeats(response: ResponseContext): Promise<DeliverySenderCapacityDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverySenderCapacityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverySenderCapacityDto", ""
            ) as DeliverySenderCapacityDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverySenderCapacityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverySenderCapacityDto", ""
            ) as DeliverySenderCapacityDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSendingConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSendingConnection(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableSendingConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disableSendingConnection(response: ResponseContext): Promise<SendingConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enableSendingConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enableSendingConnection(response: ResponseContext): Promise<SendingConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeliverySenderCapacity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverySenderCapacity(response: ResponseContext): Promise<DeliverySenderCapacityDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverySenderCapacityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverySenderCapacityDto", ""
            ) as DeliverySenderCapacityDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverySenderCapacityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverySenderCapacityDto", ""
            ) as DeliverySenderCapacityDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSendingConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSendingConnection(response: ResponseContext): Promise<SendingConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSendingConnectionProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSendingConnectionProviders(response: ResponseContext): Promise<Array<SendingConnectionProviderDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SendingConnectionProviderDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SendingConnectionProviderDto>", ""
            ) as Array<SendingConnectionProviderDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SendingConnectionProviderDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SendingConnectionProviderDto>", ""
            ) as Array<SendingConnectionProviderDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSendingConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSendingConnections(response: ResponseContext): Promise<Array<SendingConnectionDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SendingConnectionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SendingConnectionDto>", ""
            ) as Array<SendingConnectionDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SendingConnectionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SendingConnectionDto>", ""
            ) as Array<SendingConnectionDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to probeSendingConnectionDelivery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async probeSendingConnectionDelivery(response: ResponseContext): Promise<SendingConnectionDeliveryProbeDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDeliveryProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDeliveryProbeDto", ""
            ) as SendingConnectionDeliveryProbeDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDeliveryProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDeliveryProbeDto", ""
            ) as SendingConnectionDeliveryProbeDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rotateSendingConnectionCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rotateSendingConnectionCredentials(response: ResponseContext): Promise<SendingConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDeliverySenderSeats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDeliverySenderSeats(response: ResponseContext): Promise<DeliverySenderCapacityDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverySenderCapacityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverySenderCapacityDto", ""
            ) as DeliverySenderCapacityDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverySenderCapacityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverySenderCapacityDto", ""
            ) as DeliverySenderCapacityDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSendingConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSendingConnection(response: ResponseContext): Promise<SendingConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifySendingConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifySendingConnection(response: ResponseContext): Promise<SendingConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendingConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendingConnectionDto", ""
            ) as SendingConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
