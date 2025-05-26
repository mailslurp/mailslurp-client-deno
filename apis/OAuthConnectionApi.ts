// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateOAuthConnectionResult } from '../models/CreateOAuthConnectionResult.ts';
import { CreateOAuthExchangeResult } from '../models/CreateOAuthExchangeResult.ts';

/**
 * no description
 */
export class OAuthConnectionApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Configure an inbox for OAuth sync with MailSlurp
     * Create an OAuth connection
     * @param redirectBase 
     * @param oAuthConnectionType 
     * @param emailAddress 
     */
    public async createOAuthConnection(redirectBase: string, oAuthConnectionType: 'GOOGLE' | 'MICROSOFT', emailAddress?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'redirectBase' is not null or undefined
        if (redirectBase === null || redirectBase === undefined) {
            throw new RequiredError('Required parameter redirectBase was null or undefined when calling createOAuthConnection.');
        }


        // verify required parameter 'oAuthConnectionType' is not null or undefined
        if (oAuthConnectionType === null || oAuthConnectionType === undefined) {
            throw new RequiredError('Required parameter oAuthConnectionType was null or undefined when calling createOAuthConnection.');
        }



        // Path Params
        const localVarPath = '/oauth-connection';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (redirectBase !== undefined) {
            requestContext.setQueryParam("redirectBase", ObjectSerializer.serialize(redirectBase, "string", ""));
        }
        if (oAuthConnectionType !== undefined) {
            requestContext.setQueryParam("oAuthConnectionType", ObjectSerializer.serialize(oAuthConnectionType, "'GOOGLE' | 'MICROSOFT'", ""));
        }
        if (emailAddress !== undefined) {
            requestContext.setQueryParam("emailAddress", ObjectSerializer.serialize(emailAddress, "string", ""));
        }

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
     * Exchange an OAuth code for an access token and create an inbox connection in MailSlurp
     * Exchange authorization code for access token and create inbox
     * @param authorizationCode 
     * @param redirectUri 
     */
    public async exchangeAuthorizationTokenAndCreateOrUpdateInbox(authorizationCode: string, redirectUri: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'authorizationCode' is not null or undefined
        if (authorizationCode === null || authorizationCode === undefined) {
            throw new RequiredError('Required parameter authorizationCode was null or undefined when calling exchangeAuthorizationTokenAndCreateOrUpdateInbox.');
        }


        // verify required parameter 'redirectUri' is not null or undefined
        if (redirectUri === null || redirectUri === undefined) {
            throw new RequiredError('Required parameter redirectUri was null or undefined when calling exchangeAuthorizationTokenAndCreateOrUpdateInbox.');
        }


        // Path Params
        const localVarPath = '/oauth-connection/oauth-exchange/google';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (authorizationCode !== undefined) {
            requestContext.setQueryParam("authorizationCode", ObjectSerializer.serialize(authorizationCode, "string", ""));
        }
        if (redirectUri !== undefined) {
            requestContext.setQueryParam("redirectUri", ObjectSerializer.serialize(redirectUri, "string", ""));
        }

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

export class OAuthConnectionApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuthConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createOAuthConnection(response: ResponseContext): Promise<CreateOAuthConnectionResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateOAuthConnectionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOAuthConnectionResult", ""
            ) as CreateOAuthConnectionResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateOAuthConnectionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOAuthConnectionResult", ""
            ) as CreateOAuthConnectionResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exchangeAuthorizationTokenAndCreateOrUpdateInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangeAuthorizationTokenAndCreateOrUpdateInbox(response: ResponseContext): Promise<CreateOAuthExchangeResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateOAuthExchangeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOAuthExchangeResult", ""
            ) as CreateOAuthExchangeResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateOAuthExchangeResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOAuthExchangeResult", ""
            ) as CreateOAuthExchangeResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
